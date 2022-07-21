import React from 'react';
import cn from 'classnames';
import './CartModal.scss';

interface Props {
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleRemoveProductInTheBag: (tobeRemovedProduct: Product) => void;
  productsInTheBag: Product[];
  handleSelectSize: (productToChangeSize: Product, newSize: string) => void;
  handleSelectColor: (productToChangeColor: Product, newSize: string) => void;
  selectedCurrency: string;
}

export class CartModal extends React.Component<Props, {}> {
  render() {
    const {
      handleAddProductsInTheBag,
      handleRemoveProductInTheBag,
      productsInTheBag,
      handleSelectSize,
      handleSelectColor,
      selectedCurrency
    } = this.props;

    const displayedProducts = productsInTheBag
      .filter((selectedProduct, i, array) => array.lastIndexOf(selectedProduct) === i)
      .slice(0, 2);
  
    return (
      <section className="cart-modal"
      >
        <h2 className="cart-modal__title">
          My Bag,
          <span style={{ fontWeight: 400 }}>{` ${productsInTheBag.reduce((a, b) => a + b.quantityInCart, 0)} items`}</span>
        </h2>

        <div className="items-wrapper">
          {displayedProducts.map( displayedProduct => (
            <article className="item" key={displayedProduct.id}>
              <div className="item__details">
                <p className="item__title">{displayedProduct.name}</p>

                <p className="item__description">{displayedProduct.description}</p>

                <p className="item__price">{selectedCurrency + displayedProduct.price.toFixed(2)}</p>

                <div className="item__size">
                  <p className="item__size-label">Size:</p>

                  <div className="item__size-buttons">
                    {displayedProduct.sizes.map(sizeSelector => (
                      <button
                        key={sizeSelector}
                        type="button"
                        className={
                          cn(
                            'item__size-button',
                            { 'item__size-button--selected': sizeSelector === displayedProduct.selectedSize},
                          )
                        }
                        onClick={() => {
                          handleSelectSize(displayedProduct, sizeSelector)
                        }}
                      >
                        {sizeSelector}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="item__color">
                  <p className="item__color-label">Color:</p>

                  <div className="item__color-buttons">
                    {displayedProduct.colors.map(colorSelector => (
                      <button
                        type="button"
                        style={{ backgroundColor: colorSelector }}
                        key={colorSelector}
                        className={
                          cn(
                            'item__color-button',
                            { 'item__color-button--selected': colorSelector === displayedProduct.selectedColor }
                          )
                        }
                        onClick={() => {
                          handleSelectColor(displayedProduct, colorSelector)
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="item__quantity-controls">
                  <button
                    type="button"
                    className="item__quantity-button"
                    onClick={() => {
                      handleAddProductsInTheBag(displayedProduct);
                    }}
                  >
                    +
                  </button>

                  <p className="item__quantity">{displayedProduct.quantityInCart}</p>

                  <button
                    type="button"
                    className="item__quantity-button"
                    onClick={() => {
                      handleRemoveProductInTheBag(displayedProduct);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              
              <div className="item__image">
                <img
                  src={displayedProduct.image}
                  alt={displayedProduct.name}
                  className="item__preview-image"
                />
              </div>
            </article>
          ))}
        </div>

        <article className="item__total">
          <p className="item__total-label">Total</p>

          <p className="item__total-price">
            {selectedCurrency + productsInTheBag.reduce((a, b) => a + (b.price * b.quantityInCart), 0)}
          </p>
        </article>

        <article className="cart-modal-controls">
          <button
            type="button"
            className="cart-modal-controls__view-bag-button"
          >
            VIEW BAG
          </button>

          <button
            type="button"
            className="cart-modal-controls__check-out-button"
          >
            CHECK OUT
          </button>
        </article>
      </section>
    );
  }
}
