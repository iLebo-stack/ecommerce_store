import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Pdp } from '../Pdp/Pdp';

interface Props {
  selectedCurrency: string;
  product: Product[];
  selectProductHandle: (newProduct: Product) => void;
  selectedSize: string;
  selectedColor: string;
  selectSizeHandle: (newSelectedSize: string) => void;
  selectColorHandle: (newSelectedColor: string) => void;
}

interface State {
  isProductClicked: boolean;
  selectedProduct: Product | null;
}

export class ProductList extends React.Component<Props, State> {
  state = {
    isProductClicked: false,
    selectedProduct: null,
  }

  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.handleClickedProduct = this.handleClickedProduct.bind(this);
  }

  handleClickedProduct(selectedProduct: Product) {
    this.setState({
      isProductClicked: true,
      selectedProduct,
    });
  }

  render() {
    const {
      selectedCurrency,
      product,
      selectProductHandle,
      selectedColor,
      selectedSize,
      selectColorHandle,
      selectSizeHandle,
    } = this.props;
    const { isProductClicked, selectedProduct } = this.state;

    return (
      isProductClicked
        ? (
            <Pdp
              product={selectedProduct}
              selectedCurrency={selectedCurrency}
              selectProductHandle={selectProductHandle}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              selectColorHandle={selectColorHandle}
              selectSizeHandle={selectSizeHandle}
            />
        )
        : (
            <section className="products">
              {product.map(product => (
                <React.Fragment key={product.id}>
                  <ProductCard 
                    product={product}
                    selectedCurrency={selectedCurrency}
                    handleClickedProduct={this.handleClickedProduct}
                  />
                </React.Fragment>
              ))}
            </section>
        )
    );
  }
};
