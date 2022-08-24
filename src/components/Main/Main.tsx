import React from 'react';
import cn from 'classnames';
import { CartModal } from '../CartModal/CartModal';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';
import { Cart } from '../Cart/Cart';
import { CheckoutModal } from '../CheckoutModal/CheckoutModal';
import { Warning } from '../Warning/Warning';

interface Props {
  selectedCurrency: string;
  cartOverlayIsHidden: boolean;
  clickedProduct: Product | null;
  handleShowPdp: (clickedProduct: Product) => void;
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleRemoveProductInTheBag: (tobeRemovedProduct: Product) => void;
  productsInTheBag: Product[];
  handleSelectSize: (productToChangeSize: Product, newSize: string) => void;
  handleSelectColor: (productToChangeColor: Product, newSize: string) => void;
  isCartHidden: boolean;
  handleShowCart: () => void;
  products: Product[];
  handleHideCarOverlay: () => void;
  activeTab: Tab;
  checkedOut: boolean;
  checkout: () => void;
  hideCheckoutModal: () => void;
  showWarning: boolean;
  handleHideCart: () => void;
  handleHidePdp: () => void;
}

export class Main extends React.Component<Props, {}> {
  render() {
    const {
      selectedCurrency,
      cartOverlayIsHidden,
      clickedProduct,
      handleShowPdp,
      handleAddProductsInTheBag,
      handleRemoveProductInTheBag,
      productsInTheBag,
      handleSelectSize,
      handleSelectColor,
      isCartHidden,
      handleShowCart,
      products,
      handleHideCarOverlay,
      activeTab,
      checkedOut,
      checkout,
      hideCheckoutModal,
      showWarning,
      handleHideCart,
      handleHidePdp,
    } = this.props;

    return (
      <main>
        <div className={cn(
          'checkout-modal-wrapper',
          {'checkout-modal-wrapper--hidden': !checkedOut},
        )}>
          <CheckoutModal checkedOut={checkedOut} hideCheckoutModal={hideCheckoutModal} />
        </div>

        <div className={cn(
          'warning-wrapper',
          { 'warning-wrapper--active': showWarning }
        )}>
          <Warning />
        </div>

        {isCartHidden
          ? (
            <>
              <h1
                className={
                  cn(
                    'title',
                    { 'title--hidden': Boolean(clickedProduct)}
                  )
                }
              >
                {`Fashion for ${activeTab.title.toLowerCase()}`}
              </h1>
      
              <div
                className={
                  cn(
                    'cart-overlay',
                    { 'cart-overlay--hidden' : cartOverlayIsHidden}
                  )
                }
                onClick={handleHideCarOverlay}
              />

              <div
                className={
                  cn(
                    'cart-modal-wrapper',
                    { 'cart-modal-wrapper--hidden': cartOverlayIsHidden }
                  )
                }
              >
                <CartModal
                  handleAddProductsInTheBag={handleAddProductsInTheBag}
                  handleRemoveProductInTheBag={handleRemoveProductInTheBag}
                  productsInTheBag={productsInTheBag}
                  handleSelectSize={handleSelectSize}
                  handleSelectColor={handleSelectColor}
                  selectedCurrency={selectedCurrency}
                  handleShowCart={handleShowCart}
                  checkout={checkout}
                />
              </div>
      
              <ProductList
                selectedCurrency={selectedCurrency}
                product={products}
                clickedProduct={clickedProduct}
                handleShowPdp={handleShowPdp}
                handleAddProductsInTheBag={handleAddProductsInTheBag}
                handleSelectSize={handleSelectSize}
                handleSelectColor={handleSelectColor}
                handleHidePdp={handleHidePdp}
                handleHideCart={handleHideCart}
                handleHideCarOverlay={handleHideCarOverlay}
              />
            </>
          )
          : (
            <Cart
              productsInTheBag={productsInTheBag}
              selectedCurrency={selectedCurrency}
              handleAddProductsInTheBag={handleAddProductsInTheBag}
              handleRemoveProductInTheBag={handleRemoveProductInTheBag}
              handleSelectSize={handleSelectSize}
              handleSelectColor={handleSelectColor}
              isCartHidden={isCartHidden}
              checkout={checkout}
              handleHidePdp={handleHidePdp}
              handleHideCart={handleHideCart}
              handleHideCarOverlay={handleHideCarOverlay}
            />   
          )}

      </main>
    )
  }
};
