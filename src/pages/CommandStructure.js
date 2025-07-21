import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';

// Hero Image Container
const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 800px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

// Main container
const CommandStructureContainer = styled.div`
  min-height: 100vh;
  background-image: url('/assets/hero4.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  padding: 0 0 2rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(248, 250, 252, 0.3) 0%, rgba(226, 232, 240, 0.3) 100%);
    backdrop-filter: blur(3px);
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PageSubtitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 3rem;
  font-weight: 500;
`;

// Header container for logo and title
const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;
`;

// Logo styling
const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

// Chart container with custom styling to match reference image
const ChartContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  background: transparent;
  padding: 3rem;
  overflow: auto;
  
  /* Custom OrgChart styling to match reference exactly */
  .orgchart {
    background: transparent;
    font-family: Arial, sans-serif;
  }
  
  .orgchart .node {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 8px;
    border: 2px solid #000;
    text-align: center;
    font-family: Arial, sans-serif;
    width: 150px;
    height: 55px;
    cursor: pointer;
  }
  
  /* Rank/Title styling */
  .orgchart .node .title {
    font-size: 11px;
    font-weight: bold;
    margin: 0 0 3px 0;
    line-height: 1.1;
    color: #000;
  }
  
  /* Department styling */
  .orgchart .node .content {
    font-size: 9px;
    margin: 0;
    line-height: 1.1;
    color: #000;
  }
  
  /* Color scheme matching reference image */
  .orgchart .node.commander {
    background-color: #F1C40F;
    color: #000;
  }
  
  .orgchart .node.chief-superintendent {
    background-color: #7F8C8D;
    color: #fff;
  }
  
  .orgchart .node.chief-superintendent .title,
  .orgchart .node.chief-superintendent .content {
    color: #fff;
  }
  
  .orgchart .node.superintendent {
    background-color: #7F8C8D;
    color: #fff;
  }
  
  .orgchart .node.superintendent .title,
  .orgchart .node.superintendent .content {
    color: #fff;
  }
  
  .orgchart .node.operations-manager {
    background-color: #7F8C8D;
    color: #fff;
  }
  
  .orgchart .node.operations-manager .title,
  .orgchart .node.operations-manager .content {
    color: #fff;
  }
  
  .orgchart .node.inspector {
    background-color: #D68910;
    color: #fff;
  }
  
  .orgchart .node.inspector .title,
  .orgchart .node.inspector .content {
    color: #fff;
  }
  
  .orgchart .node.chief-inspector {
    background-color: #D68910;
    color: #fff;
  }
  
  .orgchart .node.chief-inspector .title,
  .orgchart .node.chief-inspector .content {
    color: #fff;
  }
  
  .orgchart .node.sergeant {
    background-color: #3498DB;
    color: #fff;
  }
  
  .orgchart .node.sergeant .title,
  .orgchart .node.sergeant .content {
    color: #fff;
  }
  
  .orgchart .node.constable {
    background-color: #85C1E9;
    color: #000;
  }
  
  .orgchart .node.ambulance {
    background-color: #27AE60;
    color: #fff;
  }
  
  .orgchart .node.ambulance .title,
  .orgchart .node.ambulance .content {
    color: #fff;
  }
  
  .orgchart .node.fire-brigade {
    background-color: #8B4513;
    color: #fff;
  }
  
  .orgchart .node.fire-brigade .title,
  .orgchart .node.fire-brigade .content {
    color: #fff;
  }
  
  .orgchart .node.civilian {
    background-color: #27AE60;
    color: #fff;
  }
  
  .orgchart .node.civilian .title,
  .orgchart .node.civilian .content {
    color: #fff;
  }
  
  /* Connection lines styling */
  .orgchart .lines .downLine {
    border-left: 2px solid #000;
  }
  
  .orgchart .lines .leftLine {
    border-top: 2px solid #000;
  }
  
  .orgchart .lines .rightLine {
    border-top: 2px solid #000;
  }
  
  .orgchart .lines .topLine {
    border-left: 2px solid #000;
  }
`;

// Command Structure Image Display Component
const CommandStructureImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;




const CommandStructure = () => {
  return (
    <CommandStructureContainer>
      <HeroContainer>
        <HeroImage src="/assets/NLRPC_-_1224.png" alt="Central East RPC Command Structure Hero" />
        <HeroOverlay>
          <HeroTitle>Command Structure</HeroTitle>
          <HeroSubtitle>Central East RPC - Metropolitan Police Service Structure</HeroSubtitle>
        </HeroOverlay>
      </HeroContainer>
      
      <ChartContainer>
        <CommandStructureImage 
          src="/assets/CERPCorg.png" 
          alt="CERPC Organizational Chart - Metropolitan Police Service Structure"
          loading="lazy"
        />
      </ChartContainer>
    </CommandStructureContainer>
  );
};

export default CommandStructure;
