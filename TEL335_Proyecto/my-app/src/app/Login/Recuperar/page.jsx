"use client";
import React from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar
import Link from 'next/link';

const Recuperar = () => {
  return (
    <section className="hero is-fullheight">
      <Navbar /> {/* Agrega la barra de navegación */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: '#008452' }}>Recuperar Contraseña</h1>
          <div className="field">
            <label className="label"></label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
          </div>
          <div className="control has-text-centered">
            <Link href="/Login" className="button is-primary">Recuperar</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recuperar;
