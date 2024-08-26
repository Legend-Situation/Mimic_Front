import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Splash from 'pages/Splash';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Main /> },
        { path: '/splash', element: <Splash /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
