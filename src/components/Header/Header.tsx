import React from 'react';
import { currencies } from "../../mock_apis/currency-converter-content";
import { Tabs } from "../Tabs/Tabs";
import shoppingBag from '../../images/shopping-bag-icon.svg';
import cartIcon from '../../images/cart-icon.svg';
import './Header.scss';

export class Header extends React.Component {
  render() {
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
            <select name="" id="">
              {currencies.map(({ id, content, symbol }) => (
                <option value={id} key={id}>{`${symbol} ${content}`}</option>
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
