import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaClipboardList, FaComments, FaUserGraduate, FaClipboardCheck, FaExchangeAlt, FaUserPlus, FaTicketAlt, FaCalendarAlt, FaUserTie, FaIdBadge } from 'react-icons/fa';

const JoinUsContainer = styled.div`
  min-height: 100vh;
  background: var(--background-primary);
  padding: 80px 0 60px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const Divider = styled.div`
  width: 100px;
  height: 3px;
  background: var(--primary-color);
  margin: 0 auto 2rem;
`;

const JoinNowButton = styled.a`
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(135deg, var(--police-gold), #ffe066);
  color: #000000;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  margin: 0.5rem 0 0.5rem;
  text-transform: uppercase;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(255, 215, 0, 0.5);
    background: linear-gradient(135deg, #ffe066, var(--police-gold));
  }
  
  @media (max-width: 768px) {
    padding: 14px 30px;
    font-size: 1.1rem;
  }
`;

const ProcessSection = styled.section`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  /* Ensure proper spacing between step groups */
  & > * + * {
    margin-top: 20px;
  }
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;
  position: relative;
  min-height: 150px; /* Ensure consistent minimum height */
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    
    .step-content {
      padding-left: 0;
      padding-right: 60px;
    }
  }
  
  &:nth-child(odd) {
    .step-content {
      padding-left: 60px;
      padding-right: 0;
    }
  }
  
  /* Connecting line between steps */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 40px; /* Positioned relative to icon */
    height: 160px;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-color) 60%, transparent);
    z-index: 0;
  }
  
  /* Different positioning for even-numbered steps */
  &:nth-child(even):not(:last-child)::after {
    left: auto;
    right: 40px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center !important;
    margin-bottom: 60px;
    
    &:nth-child(even) {
      .step-content {
        padding: 20px 0 0 0 !important;
      }
    }
    
    &:nth-child(odd) {
      .step-content {
        padding: 20px 0 0 0 !important;
      }
    }
    
    &:not(:last-child)::after {
      left: 50%;
      height: 80px;
      top: 100%;
    }
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--text-primary);
  position: relative;
  z-index: 2;
  border: 4px solid var(--background-primary);
  box-shadow: 0 0 20px rgba(26, 84, 144, 0.3);
  margin-left: 0; /* Ensure consistent positioning */
  margin-right: 0;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin: 0 auto;
  }
`;

const StepContent = styled.div`
  flex: 1;
  max-width: 500px;
`;

const StepTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const CallToActionSection = styled.section`
  text-align: center;
  margin-top: 80px;
  padding: 60px 0;
  background: linear-gradient(135deg, var(--background-secondary), var(--background-tertiary));
  border-radius: 15px;
  border: 1px solid var(--border-color);
`;

const CTATitle = styled.h2`
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(26, 84, 144, 0.3);
  text-transform: uppercase;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(26, 84, 144, 0.4);
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

// Path selection buttons
const PathSelection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const PathButton = styled.button`
  padding: 15px 30px;
  background: ${props => props.active ? 'linear-gradient(135deg, var(--police-gold), #ffe066)' : 'var(--background-secondary)'};
  color: ${props => props.active ? '#000000' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'var(--police-gold)' : 'var(--primary-color)'};
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 220px;
  box-shadow: ${props => props.active ? '0 5px 15px rgba(255, 215, 0, 0.3)' : 'none'};
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(26, 84, 144, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.active ? '100%' : '0'};
    background-color: rgba(255, 255, 255, 0.08);
    transition: height 0.3s ease;
    z-index: -1;
  }
  
  &:hover::after {
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

const ProcessContainer = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  height: 100%;
`;

const ProcessTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const JoinUs = () => {
  const [activePath, setActivePath] = useState(null);
  
  // Set default path after initial render
  useEffect(() => {
    setActivePath('normal');
  }, []);
  
  // Handle path change when a button is clicked
  const handlePathChange = (path) => {
    setActivePath(path);
    // Auto-scroll removed as per user request
  };

  return (
    <JoinUsContainer>
      <Container>
        <HeaderSection>
          <Title>Application Process</Title>
          <Subtitle>We will walk you through it</Subtitle>
          <Divider />
          <JoinNowButton href="https://cerpc.uk/apply" target="_blank" rel="noopener noreferrer">
            Join Now
          </JoinNowButton>
        </HeaderSection>
        
        <PathSelection>
          <PathButton 
            active={activePath === 'normal'} 
            onClick={() => handlePathChange('normal')}
          >
            Normal Application
          </PathButton>
          <PathButton 
            active={activePath === 'force'} 
            onClick={() => handlePathChange('force')}
          >
            Force Transfer
          </PathButton>
          <PathButton 
            active={activePath === 'direct'} 
            onClick={() => handlePathChange('direct')}
          >
            Direct Entry
          </PathButton>
        </PathSelection>

        {/* Process section anchor removed as auto-scroll was disabled */}
        
        <ProcessContainer active={activePath === 'normal' || activePath === null}>
          <ProcessTitle>Normal Application Process</ProcessTitle>
          <ProcessSection>
          <ProcessStep>
            <StepIcon>
              <FaClipboardList />
            </StepIcon>
            <StepContent className="step-content">
              <StepTitle>Submitting an Application</StepTitle>
              <StepDescription>
                Your application process begins with first registering on our Forum and then 
                completing the Application Form. This is a chance for us to ensure that the 
                applicant meets the criteria for our members base.
              </StepDescription>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepIcon>
              <FaComments />
            </StepIcon>
            <StepContent className="step-content">
              <StepTitle>Interview</StepTitle>
              <StepDescription>
                Once the application is accepted, the applicant will be called to an interview. 
                The interview offers an opportunity for us to verify what the applicant stated 
                in their application, and also allow us to give more information about the 
                following steps of the application process.
              </StepDescription>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepIcon>
              <FaUserGraduate />
            </StepIcon>
            <StepContent className="step-content">
              <StepTitle>Competency Training</StepTitle>
              <StepDescription>
                Once accepted as a recruit, you'll be assigned to a section and go through 
                our competency-based training as a PPC (Probationary Police Constable). During this time 
                you can also attend Sunday Ops and get to know other members.
              </StepDescription>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepIcon>
              <FaClipboardCheck />
            </StepIcon>
            <StepContent className="step-content">
              <StepTitle>Final Assessment</StepTitle>
              <StepDescription>
                The final step is where we remove the supports and let the applicant conduct a 
                full operation in a new section, while being assessed by an NCO. Upon successful 
                completion, you will become a PC (Police Constable).
              </StepDescription>
            </StepContent>
          </ProcessStep>
        </ProcessSection>
        </ProcessContainer>
        
        <ProcessContainer active={activePath === 'force'}>
          <ProcessTitle>Force Transfer Process</ProcessTitle>
          <ProcessSection>
            <ProcessStep>
              <StepIcon>
                <FaTicketAlt />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Open a Ticket</StepTitle>
                <StepDescription>
                  Begin by opening a ticket on our Discord server. This will initiate the force transfer 
                  process and allow you to communicate with our staff members directly about your interest 
                  in transferring to our community.
                </StepDescription>
              </StepContent>
            </ProcessStep>

            <ProcessStep>
              <StepIcon>
                <FaUserTie />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Experience Interview</StepTitle>
                <StepDescription>
                  After opening a ticket, you'll have an interview focused on your past roleplay experience. 
                  This helps us understand your skills, knowledge, and background to determine the best position 
                  for you within our community.
                </StepDescription>
              </StepContent>
            </ProcessStep>

            <ProcessStep>
              <StepIcon>
                <FaExchangeAlt />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Position Assignment</StepTitle>
                <StepDescription>
                  Based on your interview and past knowledge, you'll be given a position that matches your 
                  experience level. The position will be determined by our staff based on your demonstrated 
                  skills and our current needs.
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessSection>
        </ProcessContainer>
        
        <ProcessContainer active={activePath === 'direct'}>
          <ProcessTitle>Direct Entry Process</ProcessTitle>
          <ProcessSection>
            <ProcessStep>
              <StepIcon>
                <FaCalendarAlt />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Monthly Announcements</StepTitle>
                <StepDescription>
                  Direct entry opportunities are typically announced at the beginning of each month on our 
                  Discord server. These announcements will include information about which positions are 
                  currently available for direct entry candidates.
                </StepDescription>
              </StepContent>
            </ProcessStep>

            <ProcessStep>
              <StepIcon>
                <FaTicketAlt />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Open a Ticket</StepTitle>
                <StepDescription>
                  If you're interested in one of the available positions, open a ticket on our Discord server 
                  to express your interest. Be sure to mention which position you're applying for and provide 
                  any relevant experience.
                </StepDescription>
              </StepContent>
            </ProcessStep>

            <ProcessStep>
              <StepIcon>
                <FaComments />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Position Interview</StepTitle>
                <StepDescription>
                  You'll participate in an interview specifically focused on the position you're applying for. 
                  This interview will assess your suitability for the role and provide you with more information 
                  about what the position entails.
                </StepDescription>
              </StepContent>
            </ProcessStep>

            <ProcessStep>
              <StepIcon>
                <FaIdBadge />
              </StepIcon>
              <StepContent className="step-content">
                <StepTitle>Position Assignment</StepTitle>
                <StepDescription>
                  Based on the outcome of your interview, you may be offered the position you applied for. 
                  If successful, you'll be integrated directly into the role without going through the standard 
                  training process.
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessSection>
        </ProcessContainer>

        <CallToActionSection>
          <CTATitle>Ready to Join Our Community?</CTATitle>
          <CTADescription>
            Take the first step and begin your journey with Central East Roleplay Community. 
            We're looking forward to meeting you!
          </CTADescription>
          <CTAButton href="https://cerpc.uk/apply" target="_blank" rel="noopener noreferrer">
            Start Your Application
          </CTAButton>
        </CallToActionSection>
      </Container>
    </JoinUsContainer>
  );
};

export default JoinUs;
