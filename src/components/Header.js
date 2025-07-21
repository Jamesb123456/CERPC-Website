import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
// Using logo from public folder

const HeaderContainer = styled.header`
  background: linear-gradient(
    135deg,
    rgba(10, 26, 46, 0.85) 0%,
    rgba(22, 33, 62, 0.85) 50%,
    rgba(21, 87, 160, 0.85) 100%
  );
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border-bottom: 3px solid #FFD700;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  

  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  position: relative;
  min-height: 80px;
  
  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 70px;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  left: 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    position: relative;
    left: auto;
  }
`;

const LogoIcon = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
  }
  
  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    transition: filter 0.3s ease;
  }
  
  &:hover .logo-img {
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
  }
  
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

const LogoText = styled.div`
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: white;
    margin: 0;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6),
                 0 0 20px rgba(255, 215, 0, 0.2);
    letter-spacing: -0.8px;
    font-family: 'Arial Black', Arial, sans-serif;
    line-height: 1;
  }
  
  .subtitle {
    font-size: 0.8rem;
    color: #FFD700;
    margin: 0;
    margin-top: 2px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    opacity: 0.95;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 1.6rem;
      letter-spacing: -0.5px;
    }
    
    .subtitle {
      font-size: 0.7rem;
      letter-spacing: 2px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 0.25rem;
  }

  @media (max-width: 900px) {
    gap: 0.15rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      135deg, 
      #0a1a2e 0%, 
      #16213e 50%, 
      #1557a0 100%
    );
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    gap: 1.5rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
    }
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  backdrop-filter: blur(5px);

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 80%;
    }
    
    &::after {
      opacity: 1;
    }
  }

  &.active {
    color: #FFD700;
    background: rgba(255, 215, 0, 0.15);
    font-weight: 700;
    
    &::before {
      width: 90%;
      background: linear-gradient(90deg, #FFD700, #FFED4E);
    }
  }

  @media (max-width: 1200px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1.2rem 2.5rem;
    width: 280px;
    text-align: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.2);
    margin: 0.25rem 0;
    
    &:hover {
      background: rgba(255, 215, 0, 0.2);
      transform: scale(1.02);
    }
  }
`;

const ExternalNavLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  display: block;
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 80%;
    }
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1.2rem 2.5rem;
    width: 280px;
    text-align: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.2);
    margin: 0.25rem 0;
    
    &:hover {
      background: rgba(255, 215, 0, 0.2);
      transform: scale(1.02);
    }
  }
`;



const MobileMenuToggle = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 215, 0, 0.4);
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.6rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #FFD700;
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoIcon>
            <img 
              src="/assets/logo.png" 
              alt="CERPC Police Badge" 
              className="logo-img"
              onError={(e) => {
                console.error('Logo failed to load: /assets/logo.png');
                e.target.style.display = 'none';
              }}
            />

          </LogoIcon>
          <LogoText>
            <div className="title">CERPC</div>
            <div className="subtitle">FiveM RPC</div>
          </LogoText>
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/command-structure" className={location.pathname === '/command-structure' ? 'active' : ''} onClick={closeMenu}>Structure</NavLink></li>
          <li><ExternalNavLink href="https://cerpc.uk/apply" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Join Us</ExternalNavLink></li>

          <li><ExternalNavLink href="https://cerpc.uk/login" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Members Login</ExternalNavLink></li>
        </NavLinks>



        <MobileMenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
