import React, { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../services/api-client';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (apiClient.auth.isAuthenticated()) {
          const user = await apiClient.auth.getCurrentUser();
          setCurrentUser(user);
          setUserRole(user.role);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setCurrentUser(null);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign up with email and password
  const signup = async (email, password, userData) => {
    const response = await apiClient.auth.signup(
      email,
      password,
      userData.name,
      userData.phone
    );
    
    setCurrentUser(response.user);
    setUserRole(response.user.role);
    
    return response;
  };

  // Sign in with email and password
  const login = async (email, password) => {
    const response = await apiClient.auth.login(email, password);
    
    setCurrentUser(response.user);
    setUserRole(response.user.role);
    
    return response;
  };

  // Logout
  const logout = async () => {
    await apiClient.auth.logout();
    setCurrentUser(null);
    setUserRole(null);
  };

  // Reset password (placeholder - needs backend implementation)
  const resetPassword = async (email) => {
    // TODO: Implement password reset endpoint in Workers
    throw new Error('Password reset not yet implemented');
  };

  // Update user profile (placeholder - needs backend implementation)
  const updateUserProfile = async (updates) => {
    // TODO: Implement user profile update endpoint in Workers
    throw new Error('Profile update not yet implemented');
  };

  const value = {
    currentUser,
    userRole,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    isAdmin: userRole === 'admin',
    isDoctor: userRole === 'doctor',
    isPatient: userRole === 'patient'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

