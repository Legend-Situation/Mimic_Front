import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Splash from 'pages/Splash';
import Auth from 'pages/Auth';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Main /> },
        { path: '/splash', element: <Splash /> },
        { path: '/auth', element: <Auth /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
