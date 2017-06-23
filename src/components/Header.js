import React from 'react';
import Container from './styled/Container';
import { H1 } from './styled/Titles';
import { Background, HeaderContainer } from './styled/HeaderContainer';

const Header = () => {
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <header>
            <H1>Styled Components</H1>
            <p>Exemplo de galeria de produtos utilizando styled components.</p>
          </header>
        </HeaderContainer>
      </Container>
    </Background>
  );
};

export default Header