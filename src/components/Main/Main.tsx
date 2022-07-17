import React from 'react';
import cn from 'classnames';
import { products } from '../../mock_apis/products';
import { CartOverly } from '../CartOverlay/CartOverlay';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';

interface Props {
  selectedCurrency: string;
  cartOverlayIsHidden: boolean;
  clickedProduct: Product | null;
  handleShowPdp: (clickedProduct: Product) => void;
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleRemoveProductInTheBag: (tobeRemovedProduct: Product) => void;
  productsInTheBag: Product[];
}

interface State {
  products: Product[];
  selectedProducts: Product[];
  selectedColor: string;
  selectedSize: string;
  numberOfItemsInBag: number;
}

export class Main extends React.Component<Props, State> {
  state = {
    products,
    selectedProducts: [],
    selectedColor: '',
    selectedSize: 'S',
    numberOfItemsInBag: 0,
  }
  
  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.selectProductHandle = this.selectProductHandle.bind(this);
    this.selectColorHandle = this.selectColorHandle.bind(this);
    this.selectSizeHandle = this.selectSizeHandle.bind(this);
    this.handleDecreaseInCartItems = this.handleDecreaseInCartItems.bind(this);
    this.handleIncreaseInCartItems = this.handleIncreaseInCartItems.bind(this);
  }

  selectColorHandle = (newSelectedColor: string) => {
    this.setState({ selectedColor: newSelectedColor })
  }

  selectSizeHandle = (newSelectedSize: string) => {
    this.setState({ selectedSize: newSelectedSize })
  }

  selectProductHandle(newProduct: Product) {
    this.setState(prevState => ({
      ...prevState,
      selectedProducts: [...prevState.selectedProducts, newProduct],
    }));
  }

  handleIncreaseInCartItems = () => {
    this.setState(prevState => ({
      ...prevState,
      numberOfItemsInBag: prevState.numberOfItemsInBag + 1,
    }))
  }

  handleDecreaseInCartItems = () => {
    this.setState(prevState => ({
      ...prevState,
      numberOfItemsInBag: prevState.numberOfItemsInBag - 1,
    }))
  }

  render() {
    const {
      products,
      selectedProducts,
      selectedColor,
      selectedSize,
      numberOfItemsInBag,
    } = this.state;

    const {
      selectedCurrency,
      cartOverlayIsHidden,
      clickedProduct,
      handleShowPdp,
      handleAddProductsInTheBag,
      handleRemoveProductInTheBag,
      productsInTheBag,
    } = this.props;

    return (
      <main>
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

        <CartOverly
          selectedProducts={selectedProducts}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColorHandle={this.selectColorHandle}
          selectSizeHandle={this.selectSizeHandle}
          selectProductHandle={this.selectProductHandle}
          numberOfItemsInBag={numberOfItemsInBag}
          handleIncreaseInCartItems={this.handleIncreaseInCartItems}
          handleDecreaseInCartItems={this.handleDecreaseInCartItems}
          cartOverlayIsHidden={cartOverlayIsHidden}
          handleAddProductsInTheBag={handleAddProductsInTheBag}
          handleRemoveProductInTheBag={handleRemoveProductInTheBag}
          productsInTheBag={productsInTheBag}
        />
  
        <ProductList
          selectedCurrency={selectedCurrency}
          product={products}
          selectProductHandle={this.selectProductHandle}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColorHandle={this.selectColorHandle}
          selectSizeHandle={this.selectSizeHandle}
          clickedProduct={clickedProduct}
          handleShowPdp={handleShowPdp}
          handleAddProductsInTheBag={handleAddProductsInTheBag}
        />
      </main>
    )
  }
};
