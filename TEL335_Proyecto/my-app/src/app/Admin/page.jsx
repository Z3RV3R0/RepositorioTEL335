'use client';

import { supabase } from '@/utils/supabase/client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Asegúrate de importar Link desde 'next/link' si usas Next.js
import { mdiTriangleDown } from '@mdi/js'; // Asegúrate de tener este ícono instalado
import Icon from '@mdi/react'; // Asegúrate de tener el componente Icon instalado
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarAdmin/NavbarAdmin'; // Importa el componente Navbar


const Admin = () => {



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
                    <div className="columns is-multiline is-centered">
                        <div className="column is-one-third">
                            <Link href="/User/casacentral">
                                <button className="button is-primary is-fullwidth mt-4">Casa Central</button>
                            </Link>
                        </div>
                        <div className="column is-one-third">
                            <Link href="/User/concepcion">
                                <button className="button is-primary is-fullwidth mt-4">Concepcion</button>
                            </Link>
                        </div>
                        <div className="column is-one-third">
                            <Link href="/User/sanjoaquin">
                                <button className="button is-primary is-fullwidth mt-4">San Joaquin</button>
                            </Link>
                        </div>
                        <div className="column is-one-third">
                            <Link href="/User/vina">
                                <button className="button is-primary is-fullwidth mt-4">Viña del mar</button>
                            </Link>
                        </div>
                        <div className="column is-one-third">
                            <Link href="/User/vitacura">
                                <button className="button is-primary is-fullwidth mt-4">Vitacura</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Admin;