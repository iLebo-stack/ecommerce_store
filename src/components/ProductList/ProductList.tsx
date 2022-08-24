import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Pdp } from '../Pdp/Pdp';

interface Props {
  selectedCurrency: string;
  product: Product[];
  clickedProduct: Product | null;
  handleShowPdp: (clickedProduct: Product) => void;
  handleAddProductsInTheBag: (newProduct: Product) => void;
  handleSelectSize: (productToChangeSize: Product, newSize: string) => void;
  handleSelectColor: (productToChangeColor: Product, newSize: string) => void;
  handleHideCart: () => void;
  handleHidePdp: () => void;
  handleHideCarOverlay: () => void;
}

export class ProductList extends React.Component<Props, {}> {
  render() {
    const {
      selectedCurrency,
      product,
      clickedProduct,
      handleShowPdp,
      handleAddProductsInTheBag,
      handleSelectSize,
      handleSelectColor,
      handleHideCart,
      handleHidePdp,
      handleHideCarOverlay,
    } = this.props;

    return (
      Boolean(clickedProduct)
        ? (
            <Pdp
              product={clickedProduct}
              selectedCurrency={selectedCurrency}
              handleAddProductsInTheBag={handleAddProductsInTheBag}
              handleSelectSize={handleSelectSize}
              handleSelectColor={handleSelectColor}
              handleHidePdp={handleHidePdp}
              handleHideCart={handleHideCart}
              handleHideCarOverlay={handleHideCarOverlay}
            />
        )
        : (
            <section className="products">
              {product.map(product => (
                <React.Fragment key={product.id}>
                  <ProductCard 
                    product={product}
                    selectedCurrency={selectedCurrency}
                    handleShowPdp={handleShowPdp}
                  />
                </React.Fragment>
              ))}
            </section>
        )
    );
  }
};
