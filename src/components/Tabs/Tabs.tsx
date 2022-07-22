import React from 'react';
import cn from 'classnames';
import { tabs } from '../../mock_apis/navigation-content';
import './Tabs.scss';

interface Props {
  handleFilterCategoryByActiveTab: (value: string) => void;
}

interface State {
  selectedTab: string;
}

export class Tabs extends React.Component<Props, State> {
  state = {
    selectedTab: 'tab-1',
  }

  render() {
    const { selectedTab } = this.state;
    const { handleFilterCategoryByActiveTab } = this.props;

    return (
      <ul className="list">
        {tabs.map(({ id, title }) => (
          <li className="list__item" key={id}>
            <a
              href="#"
              className={
                cn('nav__link', { 'nav__link--active': selectedTab === id })
              }
              onClick={() => {
                this.setState({ selectedTab: id});
                handleFilterCategoryByActiveTab(title);
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
