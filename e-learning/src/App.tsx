import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE } from './constants';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 2000,
});
function App() {
  return (
    <AppMenu>
      <Switch>
        <Route component={LoginPage} exact path={LOGIN_PAGE} />
        <Route component={RegisterPage} exact path={REGISTER_PAGE} />
        <Route component={HomePage} exact path={HOME_PAGE} />
      </Switch>
    </AppMenu>
  );
}

export default App;
