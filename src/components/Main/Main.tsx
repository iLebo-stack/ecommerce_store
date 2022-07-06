import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './Main.scss';

interface Props {
  selectedCurrency: string;
}

export class Main extends React.Component<Props, {}> {
  render() {
    return (
      <main>
        <h1 className="title">Category name</h1>
  
        <ProductList selectedCurrency={this.props.selectedCurrency} />
      </main>
    )
  }
};
