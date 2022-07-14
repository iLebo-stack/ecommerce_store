import React from 'react';
import { products } from '../../mock_apis/products';
import { CartOverly } from '../CartOverlay/CartOverlay';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';

interface Props {
  selectedCurrency: string;
}

interface State {
  products: Product[];
  selectedProducts: Product[];
  selectedColor: string;
  selectedSize: string;
}

export class Main extends React.Component<Props, State> {
  state = {
    products,
    selectedProducts: [],
    selectedColor: '',
    selectedSize: 'S',
  }
  
  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.selectProductHandle = this.selectProductHandle.bind(this);
    this.selectColorHandle = this.selectColorHandle.bind(this);
    this.selectSizeHandle = this.selectSizeHandle.bind(this);
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

  render() {
    const {
      products,
      selectedProducts,
      selectedColor,
      selectedSize,
    } = this.state;

    return (
      <main>
        <h1 className="title">Category name</h1>

        <CartOverly
          selectedProducts={selectedProducts}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColorHandle={this.selectColorHandle}
          selectSizeHandle={this.selectSizeHandle}
        />
  
        <ProductList
          selectedCurrency={this.props.selectedCurrency}
          product={products}
          selectProductHandle={this.selectProductHandle}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColorHandle={this.selectColorHandle}
          selectSizeHandle={this.selectSizeHandle}
        />
      </main>
    )
  }
};
