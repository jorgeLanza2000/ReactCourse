import React, { use, type JSX } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router';

interface Props {
  element: JSX.Element; //REact.REactNode, es lo mismo
}

export const PrivateRoute = ({ element }: Props) => {
  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading...</div>;
  }

  if (authStatus === 'authenticated') {
    return element;
  }

  //el replace no crea un historial en el navegador web
  return <Navigate to={'/login'} replace />;
};
