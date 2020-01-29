import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Online, Offline } from "react-detect-offline";
import Btc from './Btc/Btc'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Real Time BTC tracker from blockchain.info
        </p>
        <div>
          You are <Online>online</Online><Offline>offline</Offline>
        </div>
        <Btc />
      </header>
    </div>
  );
}

export default App;
