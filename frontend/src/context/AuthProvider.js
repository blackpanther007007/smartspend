import React, { createContext, useState } from 'react';
import { signIn, signUp } from '../api/index';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const [authData, setAuthData] = useState(initialState);
  const navigate = useNavigate();

  const login = async (formData, navigate) => {
    try {
      const { data } = await signIn(formData);
      localStorage.setItem('profile', JSON.stringify(data));
      setAuthData(data);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const register = async (formData, navigate) => {
    try {
      const { data } = await signUp(formData);
      localStorage.setItem('profile', JSON.stringify(data));
      setAuthData(data);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuthData(null);
    navigate('/home', { replace: true })
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, login, register, logout, initialState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
