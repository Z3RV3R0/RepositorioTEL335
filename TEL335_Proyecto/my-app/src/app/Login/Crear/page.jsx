"use client ";

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

const Crear = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    rol: '',
    correo: '',
    contraseña: '',
    repetirContraseña: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos del formulario al servidor
      await axios.post('/crearUsuario', formData);
      history.push('/login'); // Redirige al usuario después de crear
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <section className="hero is-fullheight">
      {/* Agrega la barra de navegación */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: '#008452' }}>Crear Usuario</h1>
          <form onSubmit={handleSubmit}>
            {/* Resto del formulario */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Crear;