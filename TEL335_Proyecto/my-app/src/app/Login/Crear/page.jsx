"use client";
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar
import Link from 'next/link';
import { supabase } from '@/utils/supabase/client';

const Crear = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    rol: '',
    correo: '',
    contrasena: '',
    repetirContrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar datos
    const { nombre, apellidoP, apellidoM, rol, correo, contrasena, repetirContrasena } = formData;

    if (!correo.endsWith('@usm.cl') && !correo.endsWith('@sansano.usm.cl')) {
      alert('El correo debe ser @usm.cl o @sansano.usm.cl');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{9,}$/;
    if (contrasena !== repetirContrasena || !passwordRegex.test(contrasena)) {
      alert('Las contraseñas deben ser iguales y cumplir con los requisitos.');
      return;
    }

    const rolRegex = /^\d{9}-\d{1}$/;
    if (!rolRegex.test(rol)) {
      alert('El rol debe tener 8 números, un guion y otro número.');
      return;
    }

    // Insertar datos en Supabase
    try {
      const { error } = await supabase
      .from('Usuarios') // Nombre de la tabla en minúsculas
      .insert([{ Nombre: nombre, Apellido_P: apellidoP, Apellido_M: apellidoM, Rol: rol, Correo: correo, Contraseña: contrasena }]);

      if (error) {
        throw error;
      }

      alert('Usuario creado exitosamente');
    } catch (error) {
      console.error('Error al crear el usuario:', error.message);
      alert('Error al crear el usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <section className="hero is-fullheight">
      <Navbar /> {/* Agrega la barra de navegación */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: '#008452' }}>Crear Usuario</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Apellido Paterno</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="apellidoP"
                  value={formData.apellidoP}
                  onChange={handleChange}
                  placeholder="Apellido Paterno"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Apellido Materno</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="apellidoM"
                  value={formData.apellidoM}
                  onChange={handleChange}
                  placeholder="Apellido Materno"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">ROL</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  placeholder="ROL"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Correo electrónico</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Contraseña</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleChange}
                  placeholder="Contraseña"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Repetir Contraseña</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="repetirContrasena"
                  value={formData.repetirContrasena}
                  onChange={handleChange}
                  placeholder="Repetir Contraseña"
                  required
                />
              </div>
            </div>
            <div className="control has-text-centered">
              <button type="submit" className="button is-primary">Crear</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Crear;

