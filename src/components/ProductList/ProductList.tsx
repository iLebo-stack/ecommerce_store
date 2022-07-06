import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../mock_apis/products';
import './ProductList.scss';

interface Props {
  selectedCurrency: string;
}

export class ProductList extends React.Component<Props, {}> {
  render() {
    return (
      <section className="products">
        {products.map(product => (
          <React.Fragment key={product.id}>
            <ProductCard 
              product={product}
              selectedCurrency={this.props.selectedCurrency}
            />
          </React.Fragment>
        ))}
      </section>
    );
  }
};
