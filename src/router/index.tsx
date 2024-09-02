import { useRoutes } from 'react-router-dom';

import Splash from 'pages/Splash';
import Auth from 'pages/Auth';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ChatList from 'pages/ChatList';
import Chatting from 'pages/Chatting';
import AddPartner from 'pages/AddPartner';
import UserDetails from 'pages/UserDetails';
import UserProfile from 'pages/UserProfile';
import MyPage from 'pages/MyPage';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <ChatList /> },
        { path: '/splash', element: <Splash /> },
        { path: '/auth', element: <Auth /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '/chatList', element: <ChatList /> },
        { path: '/chatting/:id', element: <Chatting /> },
        { path: '/addpartner', element: <AddPartner /> },
        { path: '/userdetails', element: <UserDetails /> },
        { path: '/Userprofile', element: <UserProfile /> },
        { path: '/mypage', element: <MyPage /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
