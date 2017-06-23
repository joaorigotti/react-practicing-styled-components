import React, { PropTypes } from 'react';
import { LinkButton } from './styled/Button';
import { 
  Card, 
  CardTitle, 
  Image, 
  ProductDescription, 
  ProductPaymentPlan 
} from './styled/Card';
import Price from './Price';

const CardImage = props => {
  return (
    <a href={props.href}>
      <Image src={props.src} alt={props.alt} />
    </a>
  );
};

CardImage.defaultProps = {
  href: '#',
  alt: ''
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired
}

const ProductCard = props => {
  return (
    <Card>
      <CardImage src={props.imagePath} />
      <CardTitle>{props.name}</CardTitle>

      <ProductDescription>
        {props.description}
      </ProductDescription>
      
      <Price>{props.price}</Price>
      
      <ProductPaymentPlan>
        {props.paymentPlan}
      </ProductPaymentPlan>

      <LinkButton href={props.href}>Detalhes</LinkButton>
    </Card>
  );
};

export default ProductCard