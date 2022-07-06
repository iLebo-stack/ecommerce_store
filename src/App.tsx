import React from 'react';
import './index_styles/reset.scss';
import './index_styles/normalize.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

class  App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
  
        <Main />
      </div>
    );
  }
}

export default App;
