import React from 'react';
import './reset.scss';
import './App.scss';
import { Header } from './components/Header/Header';

const  App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
