import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import {
  LOGIN_PAGE,
  REGISTER_PAGE,
  HOME_PAGE,
  LOCAL_STORAGE_CREDENTIALS_KEY,
  COURSE_CATEGORY_PAGE,
  LOCAL_STORAGE_CART,
  LOCAL_STORAGE_COURSE_ID,
} from './constants';
import { toast } from 'react-toastify';
import { getDataFromCredentials } from './utils/LocalStorage/LocalStorage';
import { loginSucess } from './features/login/LoginSlice';
import CourseCategory from './pages/CourseCategory';
import CourseDetail from './pages/CourseCategory/Detail';
import { addToCart, courseIDs } from './features/cart/CartSlice';

toast.configure({
  autoClose: 2000,
});
function App() {
  const dispatch = useDispatch();

  const credentialsStr: any = getDataFromCredentials(
    LOCAL_STORAGE_CREDENTIALS_KEY
  );
  const cartStr: any = localStorage.getItem(LOCAL_STORAGE_CART);
  const courseID: any = localStorage.getItem(LOCAL_STORAGE_COURSE_ID);

  const newCredentials = JSON.parse(credentialsStr);
  const newCart = JSON.parse(cartStr);
  const newCourseID = JSON.parse(courseID);

  const loginStatus = newCredentials ? newCredentials.status : '';
  const action = loginSucess(newCredentials);

  const dispatchCart = () => {
    newCart.map((item: object) => {
      const cartAction = addToCart(item);
      return dispatch(cartAction);
    });

    newCourseID.map((item: string) => {
      const courseIdAction = courseIDs(item);
      return dispatch(courseIdAction);
    });
  };

  useEffect(() => {
    if (newCredentials) {
      dispatch(action);
    }
    if (newCart && newCourseID) {
      dispatchCart();
    }
  });

  return (
    <AppMenu>
      <Switch>
        <Route component={LoginPage} exact path={LOGIN_PAGE} />
        <Route component={RegisterPage} exact path={REGISTER_PAGE}>
          {loginStatus === '' ? <RegisterPage /> : <Redirect to={HOME_PAGE} />}
        </Route>
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
