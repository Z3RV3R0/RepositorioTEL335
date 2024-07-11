"use client";
import React from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menuVita.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar
import Link from 'next/link';
import { useState } from 'react';

const Vitacura = () => {
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
                                                <option value="" disabled selected>tipo de cancha</option>
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
                                                    <option value=""disabled selected>horario</option>
                                                    <option value="Bloque1">8:00 AM</option>
                                                    <option value="Bloque2">9:00 AM</option>
                                                    <option value="Bloque3">10:00 AM</option>
                                                    <option value="Bloque4">11:00 AM</option>
                                                    <option value="Bloque5">12:00 AM</option>
                                                    <option value="Bloque6">1:00 AM</option>
                                                    <option value="Bloque7">2:00 AM</option>
                                                    <option value="Bloque8">3:00 AM</option>
                                                    <option value="Bloque9">4:00 AM</option>
                                                    <option value="Bloque10">5:00 AM</option>
                                                    <option value="Bloque11">6:00 AM</option>
                                                    <option value="Bloque12">7:00 AM</option>
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

export default Vitacura;