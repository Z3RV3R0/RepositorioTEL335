"use client";
import React from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar
import Link from 'next/link';
import { useState } from 'react';

const CasaCentral = () => {

    const [tipoCancha, setTipoCancha] = useState('');
    const [horario, setHorario] = useState('');

    const handleTipoCanchaChange = (e) => {
        setTipoCancha(e.target.value);
    };

    const handleHorarioChange = (e) => {
        setHorario(e.target.value);
    };

    return (
        <div className="container">
            <NavbarUser />
            <section className='section mt-6'>
                <div className='box box-transparente pb-6'>
                    <h2 className="is-size-2 has-text-centered mb-4">Bienvenidos al Centro de Reservas de Fidel</h2>
                    <div className="columns is-centered mb-4">
                        <div className="column is-half">
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field is-expanded">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select value={tipoCancha} onChange={handleTipoCanchaChange}>
                                                    <option value="">tipo de cancha</option>
                                                    <option value="futbol">Fútbol</option>
                                                    <option value="tenis">Tenis</option>
                                                    <option value="basketball">Basketball</option>
                                                    <option value="voley">Voley</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select value={horario} onChange={handleHorarioChange}>
                                                    <option value="">horario</option>
                                                    <option value="morning">Mañana</option>
                                                    <option value="afternoon">Tarde</option>
                                                    <option value="evening">Noche</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <Link href="/User" className="button is-primary mt-4">
                            Reservar
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CasaCentral;