import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaUsers, FaGavel, FaHandshake } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: var(--background-primary);
  position: relative;
  overflow: hidden;
`;

// Hero Section with background image and overlay
const HeroSection = styled.section`
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ), url('/assets/hero5.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

// Regular section
const Section = styled.section`
  padding: 4rem 0;
  
  &:nth-child(even) {
    background: var(--background-secondary);
  }
`;

// Story section with background image
const StorySection = styled.section`
  padding: 6rem 0;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.75)
  ), url('/assets/5.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  h2 {
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;

// Values section with background image
const ValuesSection = styled.section`
  padding: 6rem 0;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.75)
  ), url('/assets/6.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  h2 {
    color: white;
  }
`;

// Leadership section 
const LeadershipSection = styled.section`
  padding: 6rem 0;
  position: relative;
  background: var(--background-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
  }
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const LeaderCard = styled.div`
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    color: white;
    overflow: hidden;
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .position {
    color: var(--primary-color);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

// Divider component for smooth transitions
const Divider = styled.div`
  height: 8px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  opacity: 0.5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>About Central East Roleplay Community</h1>
          <p>Central East RPC was created by and for people who care about proper roleplay. With a focus on UK policing, we're committed to building a respectful, structured and immersive environment for everyone involved.</p>
        </HeroContent>
      </HeroSection>
      
      {/* Simple divider between sections */}
      <Divider />

      {/* Story Section */}
      <StorySection>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Story</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Central East RPC is a whitelisted FiveM roleplay server founded in 2024 by Robert Gray, Joe Finan and Joshua Taylor. Set in the heart of the Central East borough of London, our community is built for those who value realism, enjoyment and a well-structured approach to roleplay.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              We originally launched using the GTA V map, but after taking on board feedback from our community, we made the switch to the GTA IV map. The new setting offers a grittier, more authentic urban feel, much more in keeping with the London-inspired environment we are aiming to create. It is just one example of how we listen to our members and continue to improve the experience.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our server features fully operational emergency services including the Metropolitan Police Service, London Ambulance Service and London Fire Brigade - all operating under authentic structures and procedures. Each department is staffed by dedicated members who understand their roles and take pride in maintaining high standards.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              We pride ourselves on being a community led server. That means listening, adapting and holding ourselves to high standards both in and out of roleplay. Respect, professionalism and authenticity are not just buzzwords here, they are the foundation of how we operate.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              No matter your reason for joining, whether to progress, take part or simply experience a supportive environment, Central East RPC stands for serious roleplay backed by a committed community.
            </p>
          </div>
        </Container>
      </StorySection>
      
      {/* Simple divider between sections */}
      <Divider />

      {/* Values Section */}
      <ValuesSection>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Values</h2>
          <ValuesGrid>
            <ValueCard>
              <FaShieldAlt className="icon" />
              <h3>Professional Standards</h3>
              <p>We expect all members to conduct themselves properly, whether in character or out. Respect, realism and accountability are core to how we operate.</p>
            </ValueCard>
            <ValueCard>
              <FaUsers className="icon" />
              <h3>Experienced Community</h3>
              <p>Our members bring real knowledge of UK policing and emergency services, helping to create believable, well-run scenarios across all departments.</p>
            </ValueCard>
            <ValueCard>
              <FaGavel className="icon" />
              <h3>Structured Operations</h3>
              <p>Every role has purpose and direction. Our departments follow organised procedures, rank systems and clear expectations to keep RP smooth and focused.</p>
            </ValueCard>
            <ValueCard>
              <FaHandshake className="icon" />
              <h3>Adaptability</h3>
              <p>We listen, we adjust and we move forward. From map changes to organisational updates, we improve based on what the community needs.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>
      
      {/* Simple divider between sections */}
      <Divider />

      {/* Leadership Section */}
      <LeadershipSection>
        <Container>
          <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '2rem' }}>Leadership Team</h2>
          <LeadershipGrid>
            <LeaderCard>
              <div className="avatar" style={{ overflow: 'hidden', background: 'none' }}>
                <img src="/assets/JoefInian.png" alt="Joe Finan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Joe Finan</h3>
              <div className="position">Chief Superintendent<br />Community Operations</div>
              <p>Motivated by a sense of purpose and based on honesty, I try to infuse everything I do with intention, clarity, and focus. I firmly think that meaningful connections and ongoing development can transform ideas into tangible, long-lasting effects by fusing innovative thinking with logical application. I'm dedicated to adding value that extends beyond the task at hand, and I have a strong work ethic and a sincere passion for advancement.</p>
            </LeaderCard>
            <LeaderCard>
              <div className="avatar" style={{ overflow: 'hidden', background: 'none' }}>
                <img src="/assets/gray.png" alt="Commander - Community Oversight" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Robert Gray</h3>
              <div className="position">Commander<br />Community Oversight</div>
              <p>I take pride in upholding fairness, structure and accountability within the community. With a focus on oversight and consistency, I work to ensure that all members have a clear, supportive and well managed environment to grow in. I believe in leading by example, promoting mutual respect, and making decisions that serve the long term stability of the server. My aim is to maintain a strong foundation where quality roleplay and community trust go hand in hand.</p>
            </LeaderCard>
            <LeaderCard>
              <div className="avatar" style={{ overflow: 'hidden', background: 'none' }}>
                <img src="/assets/lucas.png" alt="Lucas Johnson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Lucas Johnson</h3>
              <div className="position">Chief Superintendent<br />Policing Operations</div>
              <p>As Chief Superintendent for Policing Operations, I’m committed to building a professional, enjoyable, and immersive roleplay experience for all players. With many years of involvement in FiveM roleplay, I bring a wealth of experience, leadership, and a deep understanding of what makes a community thrive. My core focus is on player enjoyment—ensuring that every interaction, patrol, and scenario is both engaging and authentic. I take pride in supporting a team that values realism, respect, and fun, and I’m always looking for new ways to enhance our operations and create a space where everyone feels welcome and involved.</p>
            </LeaderCard>
          </LeadershipGrid>
        </Container>
      </LeadershipSection>
    </AboutContainer>
  );
};

export default About;