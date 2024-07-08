"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar
import { supabase } from '@/utils/supabase/client';



const Login = () => {
    return (
    <div className="container">
      <Navbar /> {/* Agrega la barra de navegación */}
      
        <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title" style={{ color: '#008452' }}>Iniciar Sesión</h1>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="correo"
                  
                  placeholder="Correo electrónico"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="contrasena"
                  
                  placeholder="Contraseña"
                  required
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
              <Link href="/User" className="button is-primary m-2">Iniciar sesión</Link>
              <Link href="/Login/Crear" className="button is-primary m-2">Crear usuario</Link>
            </div>
          </div>
        </div>
        </section>
    </div>
  );
};

export default Login;


