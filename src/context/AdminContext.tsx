import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// This file defines the context for managing admin authentication state.
// It allows any component in the app to know if a user is logged in as an admin
// and provides functions to log in and out.

interface AdminContextType {
    isAdmin: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// The key for storing admin status in sessionStorage.
// sessionStorage is used so the login status persists on page refresh but not when the tab is closed.
const ADMIN_STATUS_KEY = 'isAdminLoggedIn';

// The admin password should be stored securely in environment variables.
// Using a fallback for local development is okay, but it should be set in production.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123';

/**
 * Provides the admin context to its children components.
 * Manages the isAdmin state and provides login/logout functions.
 */
export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const navigate = useNavigate();

    // On initial component mount, check sessionStorage to see if the user was already logged in.
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
     * Attempts to log the user in by checking the provided password.
     * @param password The password entered by the user.
     * @returns {boolean} True if login was successful, false otherwise.
     */
    const login = (password: string): boolean => {
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem(ADMIN_STATUS_KEY, 'true');
            setIsAdmin(true);
            return true;
        }
        return false;
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

/**
 * Custom hook to easily consume the AdminContext in components.
 * @returns {AdminContextType} The admin context values.
 */
export const useAdmin = (): AdminContextType => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
