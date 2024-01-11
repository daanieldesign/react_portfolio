import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;