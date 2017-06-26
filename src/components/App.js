import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FeaturedProducts from './FeaturedProducts';
import { ThemeProvider } from 'styled-components';
import Container from './styled/Container';
import color from './styled/colors';
import './styled/global';

const App = () => {
  return (
    <ThemeProvider theme={color}>
      <div>
        <Header />
        <Container>
          <FeaturedProducts />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App