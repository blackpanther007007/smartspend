import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Container from './container/Container';
import { fetchUser } from './utils/fetchUser';
import Home from './Components/Home/Home';
import AuthProvider from './context/AuthProvider';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser();
    if (!User) navigate('/home');
  }, []);

  return (
    <div className='app'>
      <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="/*" element={<Container />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;