'use client';

import { supabase } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importa Link desde 'next/link' para la navegación
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar

const Main = () => {
    const [reservas, setReservas] = useState([]);  // Estado para almacenar los datos de la tabla

    // Función para cargar datos desde Supabase
    const fetchReservas = async () => {
        let { data, error } = await supabase
            .from('reserva')  // Nombre de la tabla en Supabase
            .select('id, bloque, cancha');

        if (error) {
            console.log('Error fetching data:', error);
        } else {
            console.log('Data fetched:', data);
            // Ordenar los datos por id
            const sortedData = data.sort((a, b) => a.id - b.id);
            setReservas(sortedData);
        }
    };

    // useEffect para cargar los datos cuando el componente se monte
    useEffect(() => {
        fetchReservas();
    }, []);

    return (
        <div className="container">
            <NavbarUser />
            <section className='section mt-6'>
                <div className='box box-transparente pb-6'>
                    <h2 className="is-size-2 has-text-centered mb-4">Reservas Deportivas</h2>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Bloque</th>
                                <th>Cancha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.length > 0 ? (
                                reservas.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.bloque}</td>
                                        <td>{item.cancha}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="has-text-centered">
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Main;
