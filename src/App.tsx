import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Routes from './router';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
