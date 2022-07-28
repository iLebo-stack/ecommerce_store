import React from 'react';
import cn from 'classnames';
import { tabs } from '../../mock_apis/navigation-content';
import './Tabs.scss';

interface Props {
  handleFilterCategoryByActiveTab: (value: string) => void;
  handleHidePdp: () => void;
  handleHideCart: () => void;
  handleHideCarOverlay: () => void;
  activeTab: Tab;
  handleSelectActiveTab: (tab: Tab) => void;
}

export class Tabs extends React.Component<Props, {}> {
  render() {
    const {
      handleFilterCategoryByActiveTab,
      handleHideCarOverlay,
      handleHideCart,
      handleHidePdp,
      activeTab,
      handleSelectActiveTab,
    } = this.props;

    function toggleMenu() {
      document
        .getElementById('nav-list')
        ?.classList
        .toggle('list--hidden');
    }

    return (
      <>
        <div
          className="tabs-toggler tabs-toggler--hidden"
          id="hamburger-menu"
          onClick={toggleMenu}
        >
          <div className="tabs-toggler__bar" />
          <div className="tabs-toggler__bar" />
          <div className="tabs-toggler__bar" />
        </div>

        <ul className="list list--hidden" id="nav-list">
          {tabs.map(({ id, title }) => (
            <li className="list__item" key={id}>
              <a
                href="#"
                className={
                  cn('nav__link', { 'nav__link--active': activeTab.id === id })
                }
                onClick={() => {
                  handleSelectActiveTab({ id, title });
                  handleFilterCategoryByActiveTab(title);
                  handleHideCarOverlay();
                  handleHideCart();
                  handleHidePdp();
                }}
              >
                  {title}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
};
