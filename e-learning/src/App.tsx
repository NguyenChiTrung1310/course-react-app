import React from 'react';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import { CssBaseline } from '@material-ui/core';
import './App.scss';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <AppMenu>
        {/* <HomePage /> */}
        <LoginPage/>
      </AppMenu>
    </div>
  );
}

export default App;
