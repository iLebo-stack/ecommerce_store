import cn from 'classnames';
import React from 'react';
import './Cart.scss';

interface Props {
  productsInTheBag: Product[];
  selectedCurrency: string;
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleRemoveProductInTheBag: (tobeRemovedProduct: Product) => void;  
  handleSelectSize: (productToChangeSize: Product, newSize: string) => void;
  handleSelectColor: (productToChangeColor: Product, newColor: string) => void;
}

export class Cart extends React.Component<Props, {}>  {
  render() {
    const {
      productsInTheBag,
      selectedCurrency,
      handleAddProductsInTheBag,
      handleRemoveProductInTheBag,
      handleSelectColor,
      handleSelectSize,
    } = this.props;

    const totalCost = productsInTheBag.reduce((a, b) => a + (b.price * b.quantityInCart), 0);
    const quantity = productsInTheBag.reduce((a, b) => a + b.quantityInCart, 0);
    const tax = 0.21 * totalCost;

    return (
      <section className="cart">
        <h2 className="cart__title">CART</h2>

        <div className="cart__items-wrapper">
          {productsInTheBag.map(product => (
            <article className="cart__item" key={product.id}>
              <ul>
                <li>
                  <p className="cart__item-name"><strong>{product.name}</strong></p>

                  <p className="cart__item-description">{product.description}</p>

                  <p className="cart__item-price">{selectedCurrency + product.price}</p>

                  <div className="cart__item-size">
                    <p className="cart__item-size-label">SIZE:</p>

                    <ul className="cart__item-size-selectors">
                      {product.sizes.map(size => (
                        <li key={size}>
                          <button
                            type="button"
                            onClick={() => {
                              handleSelectSize(product, size);
                            }}
                            className={
                              cn(
                                'cart__item-size-button',
                                { 'cart__item-size-button--selected': size === product.selectedSize }
                              )
                            }
                          >
                            {size}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="cart__item-color">
                    <p className="cart__item-color-label">COLOR:</p>

                    <ul className="cart__item-color-selectors">
                      {product.colors.map(color => (
                        <li key={color}>
                          <button
                            type="button"
                            style={{ backgroundColor: color }}
                            onClick={() => {
                              handleSelectColor(product, color);
                            }}
                            className={
                              cn(
                                'cart__item-color-button',
                                { 'cart__item-color-button--selected': color === product.selectedColor }
                              )
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="cart__item-preview">
                <div className="cart__item-preview-controls">
                  <button
                    type="button"
                    className="cart__item-quantity-button"
                    onClick={() => {
                      handleAddProductsInTheBag(product);
                    }}
                  >
                    +
                  </button>
    
                  <p>{product.quantityInCart}</p>
    
                  <button
                    type="button"
                    className="cart__item-quantity-button"
                    onClick={() => {
                      handleRemoveProductInTheBag(product);
                    }}
                  >
                    -
                  </button>
                </div>

                <div className="cart__item-preview-image">
                  <img
                    src={product.image}
                    alt={product.name + product.description}
                    className="cart__item-image"
                  />

                  <div className="cart__item-scroll">
                    <button
                      type="button"
                      className="cart__item-scroll-button cart__item-scroll--left"
                    >
                      {'<'}
                    </button>

                    <button
                      type="button"
                      className="cart__item-scroll-button cart__item-scroll--right"
                    >
                      {'>'}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="cart__cost">
          <p className="cart__cost-tax">{`Tax 21%: ${tax.toFixed(2)}`}</p>
          <p className="cart__cost-quantity">{`Quantity: ${quantity.toFixed(2)}`}</p>
          <p className="cart__cost-total">{`Total: ${selectedCurrency}${totalCost.toFixed(2)}`}</p>
        </article>

        <button type="button" className="cart__button">ORDER</button>
      </section>
    )
  }
}
