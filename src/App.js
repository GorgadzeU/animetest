import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Pages from './pages/pages.container';

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
    </div>
  );
}

export default App;
