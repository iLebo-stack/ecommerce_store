import classNames from 'classnames';
import React from 'react';
import './ProductCard.scss';
import cartIcon from '../../images/cart-icon.svg';
import cartWheels from '../../images/wheels-cart-icon.svg';

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
      <article
        className="products__card"
        onClick={() => {
          handleShowPdp(product);
        }}
      >
        <div className={classNames('preloader', { 'preloader--disabled': !isProductImageLoading })}>
          <div className="preloader-image"></div>
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
        <button type="button" className="products__card-button">
          <span className="products__card-button-text">Add to cart</span>
        </button>
      </article>
    );
  }
};
