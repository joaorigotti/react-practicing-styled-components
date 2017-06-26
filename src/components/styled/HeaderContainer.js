import styled from 'styled-components';

const Background = styled.div`
  background: ${({ theme }) => theme.darkBlue};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  min-height: 12em;
`;

export { Background, HeaderContainer }