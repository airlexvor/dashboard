import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../lib/db';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session on mount
        const checkSession = async () => {
            const { user } = await db.auth.getSession();
            setUser(user);
            setLoading(false);
        };
        checkSession();
    }, []);

    const login = async (email, password) => {
        const { user, error } = await db.auth.signIn(email, password);
        if (error) throw new Error(error);
        setUser(user);
        return user;
    };

    const signup = async (name, email, password) => {
        const { user, error } = await db.auth.signUp(name, email, password);
        if (error) throw new Error(error);
        setUser(user);
        return user;
    };

    const logout = async () => {
        await db.auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
