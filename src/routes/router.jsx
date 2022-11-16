import { FC, Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import { PATH } from './paths';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
const SignIn = Loadable(lazy(() => import('../pages/signin')));
const Home = Loadable(lazy(() => import('../pages/home')));
const SignUp = Loadable(lazy(() => import('../pages/signup')));
const CreateProfile = Loadable(lazy(() => import('../pages/create-plan')));
const NotFound = Loadable(lazy(() => import('../pages/404')));

export default createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <Home />
  },
  {
    path: PATH.SIGNIN,
    element: <SignIn />
  },
  {
    path: PATH.SIGNUP,
    element: <SignUp />
  },
  {
    path: PATH.CREATE_PLAN,
    element: <CreateProfile />
  },
  {
    path: PATH.NOT_FOUND,
    element: <NotFound />
  },
  {
    path: PATH.ALL,
    element: <Navigate to={PATH.NOT_FOUND} />
  }
]);
