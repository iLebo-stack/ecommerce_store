import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../mock_apis/products';
import './ProductList.scss';
import { Pdp } from '../Pdp/Pdp';

interface Props {
  selectedCurrency: string;
}

interface State {
  product: Product;
  isProductClicked: boolean;
}

export class ProductList extends React.Component<Props, State> {
  state = {
    product: {
      id: 0,
      image: '',
      price: 0,
      name: '',
      description: '',
      colors: [],
      sizes: [],
    },
    isProductClicked: false,
  }

  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.handleClickedProduct = this.handleClickedProduct.bind(this);
  }

  handleClickedProduct(product: Product) {
    this.setState({
      product,
      isProductClicked: true,
    });
  }

  render() {
    const { selectedCurrency } = this.props;
    const { isProductClicked, product } = this.state;

    return (
      isProductClicked
        ? (
            <Pdp
              product={product}
              selectedCurrency={selectedCurrency}
            />
        )
        : (
            <section className="products">
              {products.map(product => (
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
