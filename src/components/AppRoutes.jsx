import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Profile from './Profile';
import {PrivateRoutes} from './privateRoutes';
import {UserProvider} from '../context/UserProvider'

//import Suggestion from './components/Suggestion';

export const App =() => {
  return (
    <Router>
      <UserProvider > 
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/main" element={
            <PrivateRoutes>
              <Main />
            </PrivateRoutes>
          } />
          <Route path="/perfil" element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          } />
          
        </Routes>
      </UserProvider>
    </Router>
  );
}