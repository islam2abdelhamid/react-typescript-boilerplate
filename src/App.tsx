import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import i18n from './i18n';
import AppLayout from './Layouts/AppLayout';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import Categories from './pages/Categories';
import CategoriesForm from './pages/CategoriesForm';
import Profile from './pages/Profile';
import Merchants from './pages/Merchants';
import MerchantsForm from './pages/MerchantsForm';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Redirect exact from="/" to="/categories" />
          <Route path={['/', '/profile', '/categories', '/change_password']}>
            <AppLayout>
              <Route path="/categories" component={Categories} exact />
              <Route path="/categories/add" component={CategoriesForm} exact />
              <Route path="/merchants" component={Merchants} exact />
              <Route path="/merchants/add" component={MerchantsForm} exact />
              <Route path="/profile" component={Profile} exact />
              <Route path="/change_password" component={ChangePassword} exact />
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
