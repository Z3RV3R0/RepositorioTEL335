"use client";

import Icon from '@mdi/react';
import { mdiBellOutline } from '@mdi/js'; // Añade el ícono de campana
import { useState } from 'react';
import "@/css/components.css";

const Navbar = () => {
    return (
        <nav className="navbar color-navbar is-fixed-top p-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-start">
                    <p className="navbar-item has-text-centered">
                        DEFIDER
                    </p>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <button className="button is-primary">Calendario</button>
                </div>
                <div className="navbar-item">
                    <button className="button is-primary">Reservas</button>
                </div>
                <div className="navbar-item">
                    <Icon path={mdiBellOutline} size={1} className="has-text-white" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

