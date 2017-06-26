import styled from 'styled-components';

const ValueContainer = styled.p`
  font-size: 1.875em;
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
  text-align: center;
  margin-bottom: 0;
`;

const Value = styled.span`
  font-size: 1.6666em;
  color: ${({ theme }) => theme.black};
`;

export { Value, ValueContainer }