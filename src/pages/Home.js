import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUsers, FaShieldAlt, FaGavel, FaServer, FaClock, FaAward, FaPlay, FaChevronDown } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: var(--background-primary);
`;

// Main Hero Section with parallax effect
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  ), url('/images/gallery/placeholder-1.svg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(21, 87, 153, 0.1) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  .badge {
    display: inline-block;
    background: rgba(255, 215, 0, 0.2);
    border: 2px solid #FFD700;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #FFD700;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    .highlight {
      color: #FFD700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }
  }

  .tagline {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    font-weight: 400;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;

  .btn {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &.primary {
      background: linear-gradient(135deg, #1557a0 0%, #0f4080 100%);
      color: white;
      border: 2px solid #1557a0;
      box-shadow: 0 4px 15px rgba(21, 87, 160, 0.3);
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(21, 87, 160, 0.4);
      }
    }
    
    &.secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    color: #FFD700;
    transform: translateX(-50%) translateY(-5px);
  }

  .scroll-text {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scroll-icon {
    font-size: 1.2rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

// About Section
const AboutSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    var(--background-primary) 0%,
    var(--background-secondary) 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/gallery/placeholder-2.svg');
    background-size: cover;
    background-position: center;
    opacity: 0.03;
    z-index: 1;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #1557a0, #FFD700);
      border-radius: 2px;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  background: var(--background-primary);
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1557a0, #FFD700);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 3rem;
    color: #1557a0;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
  }
`;

// Community Activity/Stats Section
const StatsSection = styled.section`
  padding: 4rem 0;
  background: var(--background-secondary);
  border-bottom: 1px solid var(--border-color);
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  h2 {
    color: var(--text-primary);
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 1.1rem;
  }
`;

// Why Choose Us Section
const WhyChooseSection = styled.section`
  padding: 4rem 0;
  background: var(--background-primary);
  border-bottom: 1px solid var(--border-color);
`;

const WhyChooseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .subtitle {
    color: var(--text-secondary);
    font-size: 1.2rem;
    margin-bottom: 3rem;
    line-height: 1.6;
  }
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const WhyChooseCard = styled.div`
  background: var(--background-secondary);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
`;

// Application Process Section
const ApplicationSection = styled.section`
  padding: 4rem 0;
  background: var(--background-secondary);
  border-bottom: 1px solid var(--border-color);
`;

const ApplicationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .subtitle {
    color: var(--text-secondary);
    font-size: 1.2rem;
    margin-bottom: 3rem;
    line-height: 1.6;
  }
`;

const ApplicationSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ApplicationStep = styled.div`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .step-number {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <div className="badge">ESTABLISHED 2024</div>
          <h1>
            Central East <span className="highlight">RPC</span>
          </h1>
          <p className="tagline">
            Bringing together realism, structure and a proper community led approach to UK policing and emergency services roleplay.
          </p>
          <HeroButtons>
            <a href="https://cerpc.uk/apply" className="btn primary" target="_blank" rel="noopener noreferrer">Join the Community</a>
            <Link to="/site/structure" className="btn secondary">View Structure</Link>
          </HeroButtons>
        </HeroContent>
        <ScrollIndicator>
          <div className="scroll-text">Scroll Down</div>
          <FaChevronDown className="scroll-icon" />
        </ScrollIndicator>
      </HeroSection>

      <AboutSection>
        <AboutContainer>
          <h2>About CERPC</h2>
          <p className="subtitle">
            We are a dedicated community of roleplay enthusiasts committed to delivering 
            the most authentic UK police experience in FiveM. Our focus is on professionalism, 
            realism, and creating meaningful interactions within our virtual community.
          </p>
          <FeatureGrid>
            <FeatureCard>
              <FaShieldAlt className="icon" />
              <h3>Professional Standards</h3>
              <p>
                We maintain the highest standards of professionalism, following authentic UK police procedures, 
                protocols, and conduct expectations in all our operations and interactions.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FaUsers className="icon" />
              <h3>Experienced Community</h3>
              <p>
                Our community consists of dedicated members with extensive knowledge of UK policing, 
                ensuring realistic and immersive roleplay experiences for all participants.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FaGavel className="icon" />
              <h3>Structured Operations</h3>
              <p>
                Clear Structure, standard operating procedures, and realistic department 
                divisions create an authentic law enforcement environment.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </AboutContainer>
      </AboutSection>
    </HomeContainer>
  );
};

export default Home;
