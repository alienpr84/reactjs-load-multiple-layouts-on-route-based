import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import ProductsList from './pages/products/list';
import Register from './pages/register';
import UsersList from './pages/users/list';
import AdminTemplate from './template/admin-template';
import AuthTemplate from './template/auth-template';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/:path?" exact>
          <AuthTemplate>
            <Switch>
              <Route path="/auth/login" component={Login} exact />
              <Route path="/auth/register" component={Register} />
              <Route path="/auth/*">
                <Redirect to="/auth/login" />
              </Route>
            </Switch>
          </AuthTemplate>
        </Route>
        <Route path="/admin/:path?">
          <AdminTemplate>
            <Switch>
              <Route path="/admin/users" component={UsersList} />
              <Route path="/admin/products" component={ProductsList} />
              <Route path="/admin/" component={Home} exact />
              <Route path="/admin/*">
                <Redirect to="/admin/" />
              </Route>
            </Switch>
          </AdminTemplate>
        </Route>
        <Redirect to="/admin/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
