import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5em;
  font-weight: 100;
  margin: 0;
`;

const H1 = Title;
const H2 = Title.withComponent('h2').extend`
  font-size: 3.2em;
`;

export { H1, H2 }
