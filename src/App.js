import React from 'react';

import Navbar from './sections/Navbar';
import Presentation from './sections/Presentation';
import Who from './sections/Who';
import Skills from './sections/Skills'

import { Container } from './styles';
const App = () => {
  return (
    <Container>
      <Navbar/>
      <Presentation/>
      <Who/>
      <Skills/>
      
    </Container>
  );
}

export default App;