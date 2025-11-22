import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session on mount
        const checkSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) {
                    console.error("Error checking session:", error);
                }
                console.log("Session checked:", session);
                setUser(session?.user ?? null);
            } catch (err) {
                console.error("Unexpected error checking session:", err);
            } finally {
                setLoading(false);
            }
        };
        checkSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth state changed:", event, session);
            if (event === 'PASSWORD_RECOVERY') {
                console.log("Password recovery event detected");
            }
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data.user;
    };

    const signup = async (name, email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });
        if (error) throw error;
        return data.user;
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    };

    const resetPassword = async (email) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
    };

    const updatePassword = async (password) => {
        console.log("Attempting to update password...");
        const { data: { session } } = await supabase.auth.getSession();
        console.log("Current session for update:", session);

        if (!session) {
            throw new Error('Auth session missing! Please try clicking the reset link again.');
        }

        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
            console.error("Error updating password:", error);
            throw error;
        }
        console.log("Password updated successfully");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout, resetPassword, updatePassword }}>
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
