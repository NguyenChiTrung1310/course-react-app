import React from 'react';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import { CssBaseline } from '@material-ui/core';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <CssBaseline />

      <AppMenu />
      <HomePage />
    </div>
  );
}

export default App;
