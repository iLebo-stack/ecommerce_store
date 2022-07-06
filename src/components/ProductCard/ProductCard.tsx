import React from 'react';
import './ProductCard.scss';

interface Props {
  product: Product;
}

export class ProductCard extends React.Component<Props, {}> { 
  render() {
    const { image, name, price } = this.props.product;

    return (
      <article className="products__card">
        <img src={image} alt={name} className="products__card-image" />
        <p className="products__card-label">{name}</p>
        <p className="products__card-price">{price}</p>
        <button
          type="button"
          className="products__card-button"
        >
          {false}
        </button>
      </article>
    );
  }
};
