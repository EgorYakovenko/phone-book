import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Registration'));
const LoginPage = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing ...</p>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
