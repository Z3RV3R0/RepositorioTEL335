"use client";

import Icon from '@mdi/react';
import { mdiBellOutline } from '@mdi/js'; // Añade el ícono de campana
import { useState } from 'react';
import "@/css/components.css";
import Link from 'next/link';

const NavbarAdmin = () => {


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
                    <div className="column is-one-third">
                            <Link href="/Admin/Reservas">
                                <button className="button is-info is-fullwidth">Reserva</button>
                            </Link>
                    </div>
                    <div className="column is-one-third">
                        <Link href="/Admin/Calendario">
                            <button className="button is-info is-fullwidth">Calendario</button>
                        </Link>
                    </div>
                
                <div className="navbar-item">
                    <Icon path={mdiBellOutline} size={1} className="has-text-white" />
                </div>
            </div>
        </nav>
    );
};

export default NavbarAdmin;