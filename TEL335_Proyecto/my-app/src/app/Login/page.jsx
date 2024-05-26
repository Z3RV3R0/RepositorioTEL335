import React from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar

const Login = () => {
  return (
    <section className="hero is-fullheight">
      <Navbar /> {/* Agrega la barra de navegación */}
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Iniciar Sesión</h1>
          <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <label className="label">Recuperar Contraseña</label>
          <div className="control">
            <button className="button is-primary">Iniciar Sesión</button>
            <button className="button is-primary ml-3">Crear usuario</button> {/* ml-3 para agregar margen a la izquierda */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;


