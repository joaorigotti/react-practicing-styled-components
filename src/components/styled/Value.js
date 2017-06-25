import styled from 'styled-components';
import color from './colors';

const ValueContainer = styled.p`
  font-size: 1.875em;
  font-weight: 500;
  color: ${color.gray};
  text-align: center;
  margin-bottom: 0;
`;

const Value = styled.span`
  font-size: 1.6666em;
  color: ${color.black};
`;

export { Value, ValueContainer }