import classNames from 'classnames';
import React from 'react';
import './ProductCard.scss';

interface Props {
  product: Product;
  selectedCurrency: string;
  handleShowPdp: (clickedProduct: Product) => void;
}

interface State {
  isProductImageLoading: boolean;
}

export class ProductCard extends React.Component<Props, State> {
  state = {
    isProductImageLoading: true,
  }

  render() {
    const {
      selectedCurrency,
      product,
      handleShowPdp,
    } = this.props;

    const {
      image,
      name,
      price,
    } = product;

    const { isProductImageLoading } = this.state;

    return (
      <article className="products__card">
        <div className={classNames('preloader', { 'preloader--disabled': !isProductImageLoading })}>
          <div className="preloader-image" />
        </div>
        <img
          src={image}
          alt={name}
          className="products__card-image"
          onLoad={() => {
            this.setState({ isProductImageLoading: false });
          }}
        />
        <p className="products__card-label">{name}</p>
        <p className="products__card-price">{`${selectedCurrency} ${price.toFixed(2)}`}</p>
        <button
          type="button"
          className="products__card-button"
          onClick={() => {
            handleShowPdp(product);
          }}
        >
          <span className="products__card-button-text">Add to cart</span>
        </button>
      </article>
    );
  }
};
