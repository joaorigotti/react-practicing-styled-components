import styled from 'styled-components';
import Container from './Container';
import color from './colors';

const Background = styled.div`
  background: ${color.darkBlue};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${color.white};
  min-height: 12em;
`;

export { Background, HeaderContainer }