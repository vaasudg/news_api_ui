import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import IndexComponent from './components';
import Store from './context/Store'

function App() {
  return (
    <Router>
      <Store>
        <IndexComponent />
      </Store>
    </Router>
  );
}

export default App;
