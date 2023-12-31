import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Parsing = Loadable(lazy(() => import('pages/components-overview/Parsing')));
const Extract = Loadable(lazy(() => import('pages/components-overview/Extract')));
const Visual = Loadable(lazy(() => import('pages/components-overview/Visual')));
const Nlp = Loadable(lazy(() => import('pages/components-overview/Nlp')));
const ApiChecker = Loadable(lazy(() => import('pages/components-overview/ApiChecker')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'parsing',
      element: <Parsing />
    },
    {
      path: 'extract',
      element: <Extract />
    },
    {
      path: 'visual',
      element: <Visual />
    },
    {
      path: 'nlp',
      element: <Nlp />
    },
    {
      path: 'api',
      element: <ApiChecker />
    },
  ]
};

export default MainRoutes;
