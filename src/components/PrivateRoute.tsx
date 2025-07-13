import React, { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

// This component protects routes that should only be accessible to administrators.
// If the user is an admin, it renders the child components (the protected page).
// If not, it redirects them to the login page.

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Get the current admin status from the AdminContext.
  const { isAdmin } = useAdmin();
  const location = useLocation();

  if (!isAdmin) {
    // If the user is not an admin, redirect them to the /login page.
    // We also pass the current location in the state, so after logging in,
    // they can be redirected back to the page they were trying to access.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user is an admin, render the requested component.
  return children;
};

export default PrivateRoute;
