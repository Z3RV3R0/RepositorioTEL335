"use client";
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { useState } from 'react';
import "@/css/components.css";

const Navbar = () => {
    return (
        <nav className="navbar color-nabvar is-fixed-top p-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <p className="navbar-item">
                    Hola que tal
                </p>
            </div>
        </nav>
    );
}

export default Navbar;