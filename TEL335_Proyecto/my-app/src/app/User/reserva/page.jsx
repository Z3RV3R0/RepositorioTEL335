"use client";
import React from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar
import Link from 'next/link';

const Reserva = () => {
  return (
    <div className="container">
        <NavbarUser/>
        <section className='section mt-6'>
            <div className='box box-transparente pb-6'>
                <h2 className="is-size-2 has-text-centered mb-4">Bienvenidos al Centro de Reservas de Fidel</h2>
                <div className="box has-background-light has-text-centered mb-6">
                    <h3 className="is-size-4">Información</h3>
                    <p>Aquí van avisos importantes.</p>
                    <p>Para reservar , por favor hacer click en el siguiente botón</p>
                    <Link href="/Login" className="button is-primary mt-4">
                        Reservar
                    </Link>
                </div>
            </div>
        </section>
    </div>
);
}

export default Reserva;