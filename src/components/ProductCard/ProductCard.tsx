import React from 'react';
import './ProductCard.scss';

interface Props {
  product: Product;
  selectedCurrency: string;
  handleClickedProduct: (product: Product) => void;
}

export class ProductCard extends React.Component<Props, {}> { 
  render() {
    const {
      selectedCurrency,
      product,
      handleClickedProduct,
    } = this.props;
    const { image, name, price } = product;

    return (
      <article className="products__card">
        <img src={image} alt={name} className="products__card-image" />
        <p className="products__card-label">{name}</p>
        <p className="products__card-price">{`${selectedCurrency} ${price.toFixed(2)}`}</p>
        <button
          type="button"
          className="products__card-button"
          onClick={() => {
            handleClickedProduct(product);
          }}
        >
          {false}
        </button>
      </article>
    );
  }
};
