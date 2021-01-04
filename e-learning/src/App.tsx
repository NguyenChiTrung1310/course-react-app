import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfileUser from './pages/ProfileUser';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import {
  LOGIN_PAGE,
  REGISTER_PAGE,
  HOME_PAGE,
  LOCAL_STORAGE_CREDENTIALS_KEY,
  PROFILE_USER,
  COURSE_CATEGORY_PAGE,
} from './constants';
import { toast } from 'react-toastify';
import { getDataFromCredentials } from './utils/LocalStorage/LocalStorage';
import { loginSucess } from './features/login/LoginSlice';
import CourseCategory from './pages/CourseCategory';
import CourseDetail from './pages/CourseCategory/Detail';

toast.configure({
  autoClose: 2000,
});
function App() {
  const dispatch = useDispatch();

  const credentialsStr: any = getDataFromCredentials(
    LOCAL_STORAGE_CREDENTIALS_KEY
  );
  const newCredentials = JSON.parse(credentialsStr);
  const loginStatus = newCredentials ? newCredentials.status : '';
  const action = loginSucess(newCredentials);

  useEffect(() => {
    if (newCredentials) {
      dispatch(action);
    }
  });

  return (
    <AppMenu>
      <Switch>
        <Route component={LoginPage} exact path={LOGIN_PAGE} />
        <Route component={RegisterPage} exact path={REGISTER_PAGE}>
          {loginStatus === '' ? <RegisterPage /> : <Redirect to={HOME_PAGE} />}
        </Route>
        <Route component={ProfileUser} exact path={PROFILE_USER} />
        <Route component={HomePage} exact path={HOME_PAGE} />
        <Route
          component={CourseCategory}
          exact
          path={`${COURSE_CATEGORY_PAGE}/:maDanhMuc`}
        />
        <Route
          component={CourseDetail}
          exact
          path={`${COURSE_CATEGORY_PAGE}/:maDanhMucKhoahoc/:maKhoaHoc`}
        />
      </Switch>
    </AppMenu>
  );
}

export default App;
