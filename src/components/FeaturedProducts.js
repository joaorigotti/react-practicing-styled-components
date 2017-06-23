import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { List, ListItem } from './styled/ProductList';

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  _isOk(response) {
    if (response.ok) {
      return response;
    }
    else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  }

  _makeProductCardItem() {
    return (
      this.state.data.map(props => 
        <ListItem key={props.key}>
          <ProductCard {...props} />
        </ListItem>
      )
    );
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => this._isOk(response))
      .then(response => response.json())
      .then(data =>  this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <List>
        {this._makeProductCardItem()}
      </List>
    );
  }
}

export default FeaturedProducts