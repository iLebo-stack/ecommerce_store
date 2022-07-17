import React from 'react';
import './index_styles/reset.scss';
import './index_styles/normalize.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

interface State {
  selectedCurrency: string;
  cartOverlayIsHidden: boolean;
  clickedProduct: Product | null;
}

class  App extends React.Component<{}, State> {
  state: State = {
    selectedCurrency: '$',
    cartOverlayIsHidden: true,
    clickedProduct: null,
  }

  constructor(props: {} | Readonly<{}>) {
    super(props)

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleToggleCartOvarlay = this.handleToggleCartOvarlay.bind(this);
    this.handleShowPdp = this.handleShowPdp.bind(this);
    this.handleHidePdp = this.handleHidePdp.bind(this);
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

  render() {
    const {
      selectedCurrency,
      cartOverlayIsHidden,
      clickedProduct,
    } = this.state;

    return (
      <div className="App">
        <Header
          handleCurrencyChange={this.handleCurrencyChange}
          selectedCurrency={selectedCurrency}
          handleToggleCartOvarlay={this.handleToggleCartOvarlay}
          handleHidePdp={this.handleHidePdp}
        />
  
        <Main
          selectedCurrency={selectedCurrency}
          cartOverlayIsHidden={cartOverlayIsHidden}
          clickedProduct={clickedProduct}
          handleShowPdp={this.handleShowPdp}
        />
      </div>
    );
  }
}

export default App;
