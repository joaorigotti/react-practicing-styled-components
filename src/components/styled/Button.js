import styled from 'styled-components';
import color from './colors';

const Button = styled.button`
  display: block;
  width: 60%;
  color: ${color.white};
  cursor: pointer;
  font-size: 1.125em;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: ${color.blue};
  border: none;
  border-radius: 2px;
  border-bottom: 4px solid ${color.darkBlue};
  padding: 0.6em 2.2em;
  margin: 0 auto;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${color.darkBlue};
  }
`;

const LinkButton = Button.withComponent('a');

LinkButton.defaultProps = {
  href: '#'
};

export { LinkButton };
export default Button
