'use client';

import React from 'react';
import Link from 'next/link'; // Importa Link desde 'next/link' para la navegación
import 'bulma/css/bulma.min.css';
import '@/css/menu.css'; // Importa los estilos CSS para el menú
import Navbar from '@/components/Navbar/Navbar'; // Importa el componente Navbar

const Main = () => {
    return (
        <div className="container">
            <Navbar/>
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
};

export default Main;
