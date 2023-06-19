import React, { createContext, useState } from 'react';
import { signIn, signUp } from '../api/index';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const [authData, setAuthData] = useState(initialState);

  const login = async (formData) => {
    try {
      const { data } = await signIn(formData);
      localStorage.setItem('profile', JSON.stringify(data));
      setAuthData(data);
      // router.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const register = async (formData) => {
    try {
      const { data } = await signUp(formData);
      localStorage.setItem('profile', JSON.stringify(data));
      setAuthData(data);
      // router.push('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, login, register, logout, initialState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
