"use client";
import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar

const Login = () => {
  return (
    <section className="hero is-fullheight">
      <Navbar /> {/* Agrega la barra de navegación */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: '#008452' }}>Iniciar Sesión</h1>
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
          <div className="field">
            <label className="label"></label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div className="field">
            <label className="label"></label>
            <div className="control has-text-centered">
              {/* Utiliza el componente Link de Next.js para crear el enlace */}
              <Link href="/Login/Recuperar" style={{ color: '#008452' }}>Recuperar Contraseña</Link>
            </div>
          </div>
          <div className="control has-text-centered">
            {/* Utiliza el componente Link de Next.js para el botón "Crear usuario" */}
            <Link href="/Login/Crear" className="button is-primary">Crear usuario</Link>
            <button className="button is-primary ml-3">Iniciar Sesión</button> {/* ml-3 para agregar margen a la izquierda */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;


