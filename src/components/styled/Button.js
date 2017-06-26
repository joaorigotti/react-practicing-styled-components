import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 60%;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1.125em;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 2px;
  border-bottom: 4px solid ${({ theme }) => theme.darkBlue};
  padding: 0.6em 2.2em;
  margin: 0 auto;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.darkBlue};
  }
`;

const LinkButton = Button.withComponent('a');

LinkButton.defaultProps = {
  href: '#'
};

export { LinkButton };
export default Button
