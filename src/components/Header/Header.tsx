import React from 'react';
import { currencies } from "../../mock_apis/currency-converter-content";
import { Tabs } from "../Tabs/Tabs";
import shoppingBag from '../../images/shopping-bag-icon.svg';
import cartIcon from '../../images/cart-icon.svg';
import './Header.scss';

interface Props {
  handleCurrencyChange: (value: string) => void;
  selectedCurrency: string;
}

export class Header extends React.Component<Props, {}> {
  render() {
    const { handleCurrencyChange, selectedCurrency } = this.props;

    return (
      <header className="header">
        <nav className="nav">
          <Tabs />
        </nav>
  
        <div className="logo">
          <img src={shoppingBag} alt="" className="logo__image" />
        </div>
  
        <div className="header-controls">
          <div className="currency-converter">
            <select
              className="currency-converter__selector"
              value={selectedCurrency}
              onChange={(event) => {
                handleCurrencyChange(event.target.value)
              }}
            >
              {currencies.map(({ id, content, symbol }) => (
                <option
                  value={symbol}
                  key={id}
                  className="currency-converter__selector__option"
                >
                  {`${symbol} ${content}`}
                </option>
              ))}
            </select>
          </div>
          
          <div className="cart">
            <img src={cartIcon} alt="" className="cart__image" />
          </div>
        </div>
      </header>
    )
  }
};
