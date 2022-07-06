import React from 'react';
import './index_styles/reset.scss';
import './index_styles/normalize.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

interface State {
  selectedCurrency: string;
}

class  App extends React.Component<{}, State> {
  state: State = {
    selectedCurrency: '$',
  }

  constructor(props: {} | Readonly<{}>) {
    super(props)

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange(value: string) {
    this.setState({ selectedCurrency: value});
  }

  render() {
    const { selectedCurrency } = this.state;

    return (
      <div className="App">
        <Header
          handleCurrencyChange={this.handleCurrencyChange}
          selectedCurrency={selectedCurrency}
        />
  
        <Main selectedCurrency={selectedCurrency} />
      </div>
    );
  }
}

export default App;
