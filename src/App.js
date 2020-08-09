import React from 'react';
import logo from './logo.svg';
import EthLogo from './eth-animation.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SVG animation done with SVGator!!!
        </p>
        <object type="image/svg+xml" data={EthLogo} className="eth-logo">svg-animation</object>
      </header>
    </div>
  );
}

export default App;
