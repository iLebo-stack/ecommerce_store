import React from 'react';
import './index_styles/reset.scss';
import './index_styles/normalize.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

interface State {
  selectedCurrency: string;
  cartOverlayIsHidden: boolean;
  clickedProduct: Product | null;
  productsInTheBag: Product[];
}

class  App extends React.Component<{}, State> {
  state: State = {
    selectedCurrency: '$',
    cartOverlayIsHidden: true,
    clickedProduct: null,
    productsInTheBag: [],
  }

  constructor(props: {} | Readonly<{}>) {
    super(props)

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleToggleCartOvarlay = this.handleToggleCartOvarlay.bind(this);
    this.handleShowPdp = this.handleShowPdp.bind(this);
    this.handleHidePdp = this.handleHidePdp.bind(this);
    this.handleAddProductsInTheBag = this.handleAddProductsInTheBag.bind(this);
    this.handleRemoveProductInTheBag = this.handleRemoveProductInTheBag.bind(this);
  }

  handleCurrencyChange(value: string) {
    this.setState({ selectedCurrency: value });
  }

  handleToggleCartOvarlay() {
    this.setState(prevState => ({
      ...prevState,
      cartOverlayIsHidden: !prevState.cartOverlayIsHidden,
    }));
  }

  handleShowPdp(clickedProduct: Product) {
    this.setState({ clickedProduct });
  }

  handleHidePdp() {
    this.setState({ clickedProduct: null });
  }

  handleAddProductsInTheBag(newProduct: Product) {
    if (this.state.productsInTheBag.some(product => newProduct.id === product.id)) {
      this.setState(prevState => ({
        ...prevState,
        productsInTheBag: prevState.productsInTheBag.map(product => {
          if (product.id === newProduct.id && product.quantityInStock > 0) {
            return {
              ...product,
              quantityInCart: product.quantityInCart + 1,
              quantityInStock: product.quantityInStock - 1,
            }
          }

          return product;
        }),
      }))

      return;
    }

    this.setState(prevState => ({
      ...prevState,
      productsInTheBag: [...prevState.productsInTheBag, newProduct].map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantityInCart: product.quantityInCart + 1,
            quantityInStock: product.quantityInStock - 1,
          }
        }

        return product;
      }),
    }))
  }

  handleRemoveProductInTheBag(tobeRemovedProduct: Product) {
    if (this.state.productsInTheBag.some(product => product.id === tobeRemovedProduct.id)) {
      this.setState(prevState => {
        if (prevState.productsInTheBag.find(({ id }) => id === tobeRemovedProduct.id)?.quantityInCart === 1) {
          return {
            ...prevState,
            productsInTheBag: prevState.productsInTheBag.filter(product => product.id !== tobeRemovedProduct.id)
          }
        }

        return {
          ...prevState,
          productsInTheBag: prevState.productsInTheBag.map(product => {
            if (product.id === tobeRemovedProduct.id) {
              return {
                ...product,
                quantityInCart: product.quantityInCart - 1,
                quantityInStock: product.quantityInStock + 1,
              }
            }

            return product;
          })
        }
      })
    }
  }

  render() {
    const {
      selectedCurrency,
      cartOverlayIsHidden,
      clickedProduct,
      productsInTheBag,
    } = this.state;

    console.log(this.state.productsInTheBag);

    return (
      <div className="App">
        <Header
          handleCurrencyChange={this.handleCurrencyChange}
          selectedCurrency={selectedCurrency}
          handleToggleCartOvarlay={this.handleToggleCartOvarlay}
          handleHidePdp={this.handleHidePdp}
          productsInTheBag={productsInTheBag}
        />
  
        <Main
          selectedCurrency={selectedCurrency}
          cartOverlayIsHidden={cartOverlayIsHidden}
          clickedProduct={clickedProduct}
          handleShowPdp={this.handleShowPdp}
          handleAddProductsInTheBag={this.handleAddProductsInTheBag}
          handleRemoveProductInTheBag={this.handleRemoveProductInTheBag}
          productsInTheBag={productsInTheBag}
        />
      </div>
    );
  }
}

export default App;
