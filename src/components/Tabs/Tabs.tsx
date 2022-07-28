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

interface State {
  selectedTab: string;
}

export class Tabs extends React.Component<Props, State> {
  render() {
    const {
      handleFilterCategoryByActiveTab,
      handleHideCarOverlay,
      handleHideCart,
      handleHidePdp,
      activeTab,
      handleSelectActiveTab,
    } = this.props;

    return (
      <ul className="list">
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
    );
  }
};
