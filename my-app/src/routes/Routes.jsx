import React from 'react';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import Contacts from '../pages/contacts/Contacts';

const Routes = () => {
  const { token } = useAuth();
  const protectedRoutes = [{ path: '/contacts', element: <Contacts /> }];
  const routes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Registration /> },
  ];

  const router = createBrowserRouter([
    ...(token ? protectedRoutes : []),
    ...routes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
