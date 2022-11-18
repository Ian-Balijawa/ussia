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
const CreatePlan = Loadable(lazy(() => import('../pages/create-plan')));
const NotFound = Loadable(lazy(() => import('../pages/404')));
const ToWork = Loadable(lazy(() => import('../pages/to-work')));
const EditPlan = Loadable(lazy(() => import('../pages/edit-plan')));
const Videos = Loadable(lazy(() => import('../pages/videos')));
const Tookit = Loadable(lazy(() => import('../pages/toolkit')));
const Idea = Loadable(lazy(() => import('../pages/idea')));
const Pitch = Loadable(lazy(() => import('../pages/idea/pitch')));
const StrengthsAndWeaknesses = Loadable(
  lazy(() => import('../pages/idea/strengths-and-weaknesses'))
);
const Description = Loadable(lazy(() => import('../pages/idea/description')));

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
    path: ROUTES.CREATE,
    element: <CreatePlan />
  },
  {
    path: ROUTES.IDEA,
    element: <Idea />
  },
  {
    path: ROUTES.IDEA_PITCH,
    element: <Pitch />
  },
  {
    path: ROUTES.IDEA_DESCRIPTION,
    element: <Description />
  },
  {
    path: ROUTES.IDEA_SW,
    element: <StrengthsAndWeaknesses />
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
