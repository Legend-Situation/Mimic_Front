import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Routes from './router';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/splash') {
      const timer = setTimeout(() => {
        navigate('/auth');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
