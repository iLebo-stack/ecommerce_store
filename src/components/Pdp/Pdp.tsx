import React from 'react';
import './Pdp.scss';

interface Props {
  product: Product;
  selectedCurrency: string;
}

interface State {
  isColorSelected: boolean;
  isSizeSelected: boolean;
}

export class Pdp extends React.Component<Props, State> {
  state = {
    isColorSelected: false,
    isSizeSelected: false,
  }

  render() {
    const { product, selectedCurrency } = this.props;

    return (
      <section className="product_preview">
        <article className="product_preview__side_images">
          <img
            src={product.image}
            alt={product.name}
            className="product_preview__side_image"
          />
          <img
            src={product.image}
            alt={product.name}
            className="product_preview__side_image"
          />
          <img
            src={product.image}
            alt={product.name}
            className="product_preview__side_image"
          />
        </article>

        <article className="product_preview__main_image">
          <img
            src={product.image}
            alt={product.name}
            className="product_preview__image"
          />
        </article>

        <article className="product_preview__details">
          <h2 className="product_preview__title">{product.name}</h2>

          <p className="product_preview__description">{product.description}</p>

          <div className="product_preview__size_control">
            <p className="product_preview__details__label">SIZE:</p>

            <div className="product_preview__size_buttons">
              <button className="product_preview__size_button">XS</button>
              <button className="product_preview__size_button">S</button>
              <button className="product_preview__size_button">M</button>
              <button className="product_preview__size_button">L</button>
            </div>
          </div>

          <div className="product_preview__color_controls">
            <p className="product_preview__details__label">COLOR:</p>

            <div className="product_preview__color_buttons">
              <button className="product_preview__color_button product_preview__color_button--gray"></button>
              <button className="product_preview__color_button product_preview__color_button--black"></button>
              <button className="product_preview__color_button product_preview__color_button--green"></button>
            </div>
          </div>

          <div className="product_preview__price_wrapper">
            <p className="product_preview__price_label">PRICE:</p>
            <p className="product_preview__price">{selectedCurrency + product.price.toFixed(2)}</p>
          </div>

          <button className="product_preview__button">ADD TO CART</button>

          <p className="product_preview__promotion">
            Find stunning women's cocktail dresses and party dresses. Stand
            out in lace and metallic cocktail dresses and party dresses from
            all your favorite brands.
          </p>
        </article>
      </section>
    );
  }
}
