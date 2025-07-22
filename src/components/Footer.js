import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--background-secondary);
  padding: 3rem 0 1rem;
  border-top: 1px solid var(--border-color);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Central East Roleplay Community</h3>
          <p>Realistic UK roleplay made for players who take it seriously. Whether you're new or experienced, you'll find a focused, supportive environment here.</p>
          <SocialLinks>
            <SocialIcon href="https://discord.gg/YkBj8hMfqz" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord />
            </SocialIcon>
            <SocialIcon href="https://x.com/CentralEast_RPC" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@centraleast_rpc?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@CentralEast_RPC" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/structure">Structure</a></li>

          </ul>
        </FooterSection>

        <FooterSection>
          <h3>FMS</h3>
          <ul>
            <li><Link to="/join-us">Join Us</Link></li>
            <li><a href="https://cerpc.uk/login" target="_blank" rel="noopener noreferrer">Member Login</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://x.com/CentralEast_FL" target="_blank" rel="noopener noreferrer">Frontline Policing</a></li>
            <li><a href="https://x.com/CentralEast_MO" target="_blank" rel="noopener noreferrer">Met Operations</a></li>
            <li><a href="https://x.com/CentralEast_LAS" target="_blank" rel="noopener noreferrer">London Ambulance Service</a></li>
            <li><a href="https://x.com/CentralEast_LFB" target="_blank" rel="noopener noreferrer">London Fire Brigade</a></li>
          </ul>
        </FooterSection>

      </FooterContent>

      <FooterBottom>
        <p>&copy; 2025 Central East Roleplay Community. All rights reserved.</p>
        <p>This community is not affiliated with Rockstar Games or Take-Two Interactive.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
