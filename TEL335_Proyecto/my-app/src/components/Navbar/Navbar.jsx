"use client";

import Icon from '@mdi/react';
import { useState } from 'react';
import "@/css/components.css";

const Navbar = () => {
    return (
        <nav className="navbar color-nabvar is-fixed-top p-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-start">
                    <p className="navbar-item has-text-centered">
                        USM
                    </p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;