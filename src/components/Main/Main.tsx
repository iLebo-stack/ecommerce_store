import React from 'react';
import cn from 'classnames';
import { products } from '../../mock_apis/products';
import { CartModal } from '../CartModal/CartModal';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';
import { Cart } from '../Cart/Cart';

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
}

interface State {
  products: Product[];
}

export class Main extends React.Component<Props, State> {
  state = {
    products,
  }

  render() {
    const {
      products,
    } = this.state;

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
    } = this.props;

    return (
      <main>
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
                Category name
              </h1>
      
              <div
                className={
                  cn(
                    'cart-overlay',
                    { 'cart-overlay--hidden' : cartOverlayIsHidden}
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
            />   
          )}

      </main>
    )
  }
};
