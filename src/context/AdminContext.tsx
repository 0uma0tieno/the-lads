import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// This file defines the context for managing admin authentication state.
// It allows any component in the app to know if a user is logged in as an admin
// and provides functions to log in and out.
// UPDATED: Password checking logic is now removed from the client-side.

interface AdminContextType {
    isAdmin: boolean;
    login: () => void; // Login function no longer takes a password
    logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_STATUS_KEY = 'isAdminLoggedIn';

// REMOVED: No longer need the password on the client-side.
// const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123';

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedStatus = sessionStorage.getItem(ADMIN_STATUS_KEY);
            if (storedStatus === 'true') {
                setIsAdmin(true);
            }
        } catch (error) {
            console.error("Could not access session storage:", error);
        }
    }, []);

    /**
     * UPDATED: Sets the admin status to true.
     * This function is now called by the LoginPage AFTER the backend has successfully verified the password.
     */
    const login = () => {
        sessionStorage.setItem(ADMIN_STATUS_KEY, 'true');
        setIsAdmin(true);
    };

    /**
     * Logs the user out, clears their session, and navigates to the home page.
     */
    const logout = () => {
        sessionStorage.removeItem(ADMIN_STATUS_KEY);
        setIsAdmin(false);
        navigate('/'); // Redirect to home on logout
    };

    return (
        <AdminContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = (): AdminContextType => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
