import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './navbar.css'; 
import { useAppStore } from '../../store/app.store';
import { supabase } from '../../supabase/supabase';

const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const { isLoggedIn, clearSession } = useAppStore();
    const SignOutHandler = async() => {
        let { error } = await supabase.auth.signOut();
        if (error) {    
            console.error('Error during sign out:', error);
            return
        }
        clearSession();
        console.log('User signed out successfully');
        navigate('/');
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ShopEase</Link>
            </div>
            <ul className="navbar-links">
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    {isLoggedIn ? (
                        <div onClick={SignOutHandler} className="sign-out-button">
                            Sign Out
                        </div>
                    ) : (
                        <Link to="/log-in">Sign In / Sign Up</Link>
                    )}
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;