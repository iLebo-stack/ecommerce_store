import React from 'react';
import cn from 'classnames';
import './Pdp.scss';

interface Props {
  product: Product | null;
  selectedCurrency: string;
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleSelectSize: (productToChangeSize: Product, newSize: string) => void;
  handleSelectColor: (productToChangeColor: Product, newSize: string) => void;
}

export class Pdp extends React.Component<Props, {}> {
  render() {
    const {
      product,
      selectedCurrency,
      handleAddProductsInTheBag,
      handleSelectSize,
      handleSelectColor,
    } = this.props;

    return (
      product && (
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
                {product.sizes.map(sizeSelector => (
                  <button
                    key={sizeSelector}
                    type="button"
                    onClick={() => {
                      handleSelectSize(product, sizeSelector)
                    }}
                    className={cn(
                      'product_preview__size_button',
                      { 'product_preview__size_button--selected': product.selectedSize === sizeSelector }
                    )}
                  >
                    {sizeSelector}
                  </button>
                ))}
              </div>
            </div>

            <div className="product_preview__color_controls">
              <p className="product_preview__details__label">COLOR:</p>

              <div className="product_preview__color_buttons">
                {product.colors.map(colorSelector => (
                  <button
                    key={colorSelector}
                    type="button"
                    style={ { backgroundColor: colorSelector } }
                    onClick={() => {
                      handleSelectColor(product, colorSelector)
                    }}
                    className={cn(
                      'product_preview__color_button',
                      { 'product_preview__color_button--selected': product.selectedColor === colorSelector },
                    )}
                  >
                  </button>
                ))}
              </div>
            </div>

            <div className="product_preview__price_wrapper">
              <p className="product_preview__price_label">PRICE:</p>
              <p className="product_preview__price">{selectedCurrency + product.price.toFixed(2)}</p>
            </div>

            <button
              className="product_preview__button"
              type="button"
              onClick={() => {
                handleAddProductsInTheBag(product);
              }}
            >
              ADD TO CART
            </button>

            <p className="product_preview__promotion">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </article>
        </section>
      )
    );
  }
}
