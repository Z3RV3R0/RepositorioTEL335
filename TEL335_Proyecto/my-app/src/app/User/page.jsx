'use client';

import { supabase } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Asegúrate de importar Link desde 'next/link' si usas Next.js
import { mdiTriangleDown } from '@mdi/js'; // Asegúrate de tener este ícono instalado
import Icon from '@mdi/react'; // Asegúrate de tener el componente Icon instalado
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar

const Main = () => {
    const [data, setData] = useState([]);  // Estado para almacenar los datos de la tabla

    // Función para cargar datos desde Supabase
    const fetchData = async () => {
        let { data, error } = await supabase
            .from('Canchas')  // Nombre de la tabla en Supabase
            .select('Campus, Tipo');

        if (error) {
            console.log('Error fetching data:', error);
        } else {
            console.log('Data fetched:', data);
            // Ordenar los datos por Campus
            const sortedData = data.sort((a, b) => a.Campus.localeCompare(b.Campus));
            setData(sortedData);
        }
    };

    // useEffect para cargar los datos cuando el componente se monte
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <NavbarUser />
            <section className='section mt-6'>
                <div className='box box-transparente pb-6'>
                    <h2 className="is-size-2 has-text-centered mb-4">Espacios Deportivos</h2>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>Campus</th>
                                <th>Tipo de Cancha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Campus}</td>
                                        <td>{item.Tipo}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="has-text-centered">
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