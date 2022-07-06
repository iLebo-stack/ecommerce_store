import cn from 'classnames';
import { useState } from 'react';
import { tabs } from '../../mock_apis/navigation-content';
import './Tabs.scss';

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

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
              setSelectedTab(id);
            }}
          >
              {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
