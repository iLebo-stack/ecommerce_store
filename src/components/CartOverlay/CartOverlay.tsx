import React from 'react';
import cn from 'classnames';
import './CartOverlay.scss';

interface Props {
  selectedProducts: Product[];
  selectedColor: string;
  selectedSize: string;
  selectSizeHandle: (newSelectedSize: string) => void;
  selectColorHandle: (newSelectedColor: string) => void;
}

export class CartOverly extends React.Component<Props, {}> {
  render() {
    const {
      selectedProducts,
      selectedColor,
      selectedSize,
      selectSizeHandle,
      selectColorHandle,
    } = this.props;

    const displayedProducts = selectedProducts
      .filter((selectedProduct, i, array) => array.lastIndexOf(selectedProduct) === i)
      .slice(0, 2);
  
    return (
      <section className="cart_overlay">
        <h2 className="cart_overlay__title">
          My Bag
          {selectedProducts.length > 0 && `${selectedProducts.length}, items`}
        </h2>

        {displayedProducts.map( displayedProduct => (
          <article className="item" key={displayedProduct.id}>
            <div className="item__details">
              <p className="item__title">{displayedProduct.name}</p>

              <p className="item__description">{displayedProduct.description}</p>

              <p className="item__price">{`${displayedProduct.price.toFixed(2)}`}</p>

              <div className="item__size">
                <p className="item__size-label">Size:</p>

                <div className="item__size-buttons">
                  {displayedProduct.sizes.map(sizeSelector => (
                    <button
                      key={displayedProduct.id}
                      type="button"
                      className={
                        cn(
                          'item__size-button',
                          { 'item__size-button--selected': sizeSelector === selectedSize},
                        )
                      }
                      onClick={() => {
                        selectSizeHandle(sizeSelector);
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
                      key={displayedProduct.id}
                      className={
                        cn(
                          'item__color-button',
                          { 'item__color-button--selected': colorSelector === selectedColor }
                        )
                      }
                      onClick={() => {
                        selectColorHandle(colorSelector);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="item__quantity-controls">
                <button type="button" className="item__quantity-button">+</button>

                <p className="item__quantity">{selectedProducts.length}</p>

                <button type="button" className="item__quantity-button">-</button>
              </div>
            </div>
            
            <div className="item__image">
              <img src={displayedProduct.image} alt={displayedProduct.name} />
            </div>
          </article>
        ))}
      </section>
    );
  }
}
