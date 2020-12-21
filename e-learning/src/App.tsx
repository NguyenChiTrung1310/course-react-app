import React from 'react';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter,Route, Switch} from 'react-router-dom';  
import './App.scss';
import './constants';
import { LOGIN_PAGE } from './constants';
function App() {
  return ( 
      <BrowserRouter>  
      <AppMenu>
      </AppMenu>
        {/* <HomePage /> */} 
      <Switch>
        {/* <LoginPage/> */}
        <Route 
          component={LoginPage}
          exact
          path={LOGIN_PAGE}
         />
      </Switch>
      </BrowserRouter> 
  );
}

export default App;
