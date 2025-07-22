import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Structure from './pages/Structure';
import JoinUs from './pages/JoinUs';

import './styles/App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/site/about" element={<About />} />
          <Route path="/site/structure" element={<Structure />} />
          <Route path="/site/join-us" element={<JoinUs />} />

        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
