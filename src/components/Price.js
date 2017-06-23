import React, { PropTypes } from 'react';
import { Value, ValueContainer } from './styled/Value';

const Price = ({ prefix, children }) => {
  return (
    <ValueContainer>
      {prefix} <Value>{children}</Value>
    </ValueContainer>
  );
};

Price.defaultProps = {
  prefix: 'R$',
  value: '0,00'
};

Price.propTypes = {
  value: PropTypes.string.isRequired
};

export default Price
