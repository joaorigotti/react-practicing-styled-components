import styled from 'styled-components';
import { H2 } from './Titles';
import color from './colors';

const Image = styled.img`
  display: block;
  margin-top: -0.625em;
  margin-left: -0.625em;
  margin-bottom: 1em;
`;

const ProductDescription = styled.p`
  margin-top: 0;
  line-height: 1.6;
`;

const ProductPaymentPlan = styled.p`
  font-size: 0.875em;
  text-align: center;
  margin: 0;
  margin-bottom: 2em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 0 10px #eee;
  border-top: 2px solid ${color.darkBlue};
  border-radius: 2px;
  padding: 0.625em;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 15px #ddd;
  }
`;

const CardTitle = H2.extend`
  font-size: 2.25em;
  border-bottom: 1px solid ${color.grey};
  margin-top: 0;
  margin-bottom: 0.5555em;
`;

export {
  ProductDescription,
  ProductPaymentPlan,
  Card,
  CardTitle,
  Image
}