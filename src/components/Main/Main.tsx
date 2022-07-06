import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';

export class Main extends React.Component {
  render() {
    return (
      <main>
        <h1 className="title">Category name</h1>
  
        <ProductList />
      </main>
    )
  }
};
