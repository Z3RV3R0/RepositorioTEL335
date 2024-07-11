'use client';

import { supabase } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menuJoaquin.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar

const CasaCentral = () => {
    const [tipoCancha, setTipoCancha] = useState('');
    const [horario, setHorario] = useState('');
    const [canchas, setCanchas] = useState([]);
    const [bloques, setBloques] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch data from Supabase
        const fetchCanchas = async () => {
            let { data, error } = await supabase
                .from('Canchas')
                .select('Tipo')
                .eq('Campus', 'San Joaquin');
            
            if (error) {
                console.error('Error fetching canchas:', error);
            } else {
                console.log('Canchas fetched:', data);
                setCanchas(data);
            }
        };

        const fetchBloques = async () => {
            let { data, error } = await supabase
                .from('bloques')
                .select('*');
            
            if (error) {
                console.error('Error fetching bloques:', error);
            } else {
                console.log('Bloques fetched:', data);
                setBloques(data);
            }
        };

        fetchCanchas();
        fetchBloques();
    }, []);

    const handleTipoCanchaChange = (e) => {
        setTipoCancha(e.target.value);
    };

    const handleHorarioChange = (e) => {
        setHorario(e.target.value);
    };

    const handleReserve = async () => {
        if (!tipoCancha || !horario) {
            alert('Por favor, selecciona el tipo de cancha y el horario.');
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase
                .from('reserva')
                .insert([{ bloque: horario, cancha: tipoCancha }]);

            if (error) {
                throw error;
            }

            alert('Reserva creada exitosamente');
        } catch (error) {
            console.error('Error al crear la reserva:', error.message);
            alert('Error al crear la reserva. Por favor, intenta nuevamente.');
        } finally {
            setLoading(false);
        }
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
                                                    <option value="" disabled>Tipo de cancha</option>
                                                    {canchas.length > 0 ? (
                                                        canchas.map((cancha, index) => (
                                                            <option key={index} value={cancha.Tipo}>{cancha.Tipo}</option>
                                                        ))
                                                    ) : (
                                                        <option disabled>Cargando...</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select value={horario} onChange={handleHorarioChange}>
                                                    <option value="" disabled>Horario</option>
                                                    {bloques.length > 0 ? (
                                                        bloques.map((bloque, index) => (
                                                            <option key={index} value={bloque.bloque}>{bloque.bloque}</option>
                                                        ))
                                                    ) : (
                                                        <option disabled>Cargando...</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <button onClick={handleReserve} className="button is-primary mt-4" disabled={loading}>
                            {loading ? 'Reservando...' : 'Reservar'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CasaCentral;
