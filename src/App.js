import React from 'react';

import Navbar from './sections/Navbar';
import Presentation from './sections/Presentation';
import Who from './sections/Who';
import Skills from './sections/Skills'
import Portifolio from './sections/Portifolio'
import Blog from './sections/Blog'
import Footer from './sections/Footer'

import { Container } from './styles';
const App = () => {
  return (
    <Container>
      <Navbar/>
      <Presentation/>
      <Who/>
      <Skills/>
      <Portifolio/>
      <Blog/>
      <Footer/>
    </Container>
  );
}

export default App;