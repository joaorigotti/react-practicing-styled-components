import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FeaturedProducts from './FeaturedProducts';
import Container from './styled/Container';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <FeaturedProducts />
      </Container>
      <Footer />
    </div>
  );
};

export default App