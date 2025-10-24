import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false, requireDoctor = false }) => {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && userRole !== 'admin') {
    // Redirect to home if not admin
    return <Navigate to="/" replace />;
  }

  if (requireDoctor && userRole !== 'doctor' && userRole !== 'admin') {
    // Redirect to home if not doctor or admin
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
