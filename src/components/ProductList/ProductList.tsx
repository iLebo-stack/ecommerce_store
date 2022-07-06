import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../mock_apis/products';
import './ProductList.scss';


export class ProductList extends React.Component {
  render() {
    return (
      <section className="products">
        {products.map(product => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </section>
    );
  }
};
