import React from 'react';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Who from './components/Who';

import { Container } from './styles';
const App = () => {
  return (
    <Container>
      <Navbar/>
      <Presentation/>
      <Who/>
      
    </Container>
  );
}

export default App;