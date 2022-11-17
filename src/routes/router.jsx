import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from '../components/LoadingScreen';
import { ROUTES } from './paths';

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
const CreatPlan = Loadable(lazy(() => import('../pages/create-plan')));
const NotFound = Loadable(lazy(() => import('../pages/404')));
const ToWork = Loadable(lazy(() => import('../pages/to-work')));
const EditPlan = Loadable(lazy(() => import('../pages/edit-plan')));
const Videos = Loadable(lazy(() => import('../pages/videos')));
const Tookit = Loadable(lazy(() => import('../pages/toolkit')));
export default createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Home />
  },
  {
    path: ROUTES.SIGNIN,
    element: <SignIn />
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignUp />
  },
  {
    path: ROUTES.CREATE_PLAN,
    element: <CreatPlan />
  },
  {
    path: ROUTES.TO_WORK,
    element: <ToWork />
  },
  {
    path: ROUTES.EDIT_PLAN,
    element: <EditPlan />
  },
  {
    path: ROUTES.VIDEOS,
    element: <Videos />
  },
  {
    path: ROUTES.TOOLKIT,
    element: <Tookit />
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />
  },
  {
    path: ROUTES.ALL,
    element: <Navigate to={ROUTES.NOT_FOUND} />
  }
]);
