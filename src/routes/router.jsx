import { Navigate, useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from '../components/LoadingScreen';
import { ROUTES } from './routes';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
const Login = Loadable(lazy(() => import('../pages/auth/login')));
const Home = Loadable(lazy(() => import('../pages/home')));
const Landing = Loadable(lazy(() => import('../pages/landing')));
const Register = Loadable(lazy(() => import('../pages/auth/register')));
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
const Strategy = Loadable(lazy(() => import('../pages/strategy')));
const Mission = Loadable(lazy(() => import('../pages/strategy/mission')));
const Vision = Loadable(lazy(() => import('../pages/strategy/vision')));
const ActionPlan = Loadable(
  lazy(() => import('../pages/strategy/action-plan'))
);
const Podcast = Loadable(lazy(() => import('../pages/podcast')));
const MarketAnalysis = Loadable(lazy(() => import('../pages/market-analysis')));
const TargetGroupDetermination = Loadable(
  lazy(() => import('../pages/market-analysis/target-group-determination'))
);
const Suppliers = Loadable(
  lazy(() => import('../pages/market-analysis/suppliers'))
);
const Partners = Loadable(
  lazy(() => import('../pages/market-analysis/partners'))
);
const Competitors = Loadable(
  lazy(() => import('../pages/market-analysis/competitors'))
);
const TrendAnalysis = Loadable(
  lazy(() => import('../pages/market-analysis/trend-analysis'))
);

const PeopleAndOrganisation = Loadable(
  lazy(() => import('../pages/people-and-organisation'))
);
const EnterpreneurCompetencies = Loadable(
  lazy(() =>
    import('../pages/people-and-organisation/enterprenuer-competencies')
  )
);
const FormAndSocialStatus = Loadable(
  lazy(() => import('../pages/people-and-organisation/form-and-social-status'))
);
const Schedule = Loadable(
  lazy(() => import('../pages/people-and-organisation/schedule'))
);
const Marketing = Loadable(lazy(() => import('../pages/marketing')));
const Financial = Loadable(lazy(() => import('../pages/financial')));
const Startup = Loadable(lazy(() => import('../pages/startup')));

export default () => {
  return useRoutes([
    {
      path: ROUTES.ROOT,
      element: <Landing />
    },
    {
      path: ROUTES.HOME,
      element: <Home />
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
      path: ROUTES.PODCASTS,
      element: <Podcast />
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
      path: ROUTES.LOGIN,
      element: <Login />
    },
    {
      path: ROUTES.REGISTER,
      element: <Register />
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
      path: ROUTES.STRATEGY,
      element: <Strategy />
    },
    {
      path: ROUTES.STRATEGY_MISSION,
      element: <Mission />
    },
    {
      path: ROUTES.STRATEGY_VISION,
      element: <Vision />
    },
    {
      path: ROUTES.STRATEGY_ACTION_PLAN,
      element: <ActionPlan />
    },
    {
      path: ROUTES.MARKET_ANALYSIS,
      element: <MarketAnalysis />
    },
    {
      path: ROUTES.TARGET_GROUP_DETERMINATION,
      element: <TargetGroupDetermination />
    },
    {
      path: ROUTES.SUPPLIERS,
      element: <Suppliers />
    },
    {
      path: ROUTES.PARTNERS,
      element: <Partners />
    },
    {
      path: ROUTES.COMPETITORS,
      element: <Competitors />
    },
    {
      path: ROUTES.TREND_ANALYSIS,
      element: <TrendAnalysis />
    },
    {
      path: ROUTES.PEOPLE_AND_ORGANISATION,
      element: <PeopleAndOrganisation />
    },
    {
      path: ROUTES.ENTERPRENEUR_COMPETENCIES,
      element: <EnterpreneurCompetencies />
    },
    {
      path: ROUTES.FORM_AND_SOCIAL_STATUS,
      element: <FormAndSocialStatus />
    },
    {
      path: ROUTES.SCHEDULE,
      element: <Schedule />
    },
    {
      path: ROUTES.MARKETING,
      element: <Marketing />
    },
    {
      path: ROUTES.FINANCIAL,
      element: <Financial />
    },
    {
      path: ROUTES.STARTUP,
      element: <Startup />
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
};
