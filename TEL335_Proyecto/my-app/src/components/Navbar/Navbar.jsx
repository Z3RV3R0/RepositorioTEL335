"use client";
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { useState } from 'react';
import "@/css/components.css";

const Navbar = () => {
    return (
      <nav className="navbar color-navbar is-fixed-top is-centered p-3" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <p className="navbar-item">
            USM
          </p>
        </div>
      </nav>
    );
  };

export default Navbar;