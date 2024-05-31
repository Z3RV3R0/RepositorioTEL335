'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Asegúrate de importar Link desde 'next/link' si usas Next.js
import { mdiTriangleDown } from '@mdi/js'; // Asegúrate de tener este ícono instalado
import Icon from '@mdi/react'; // Asegúrate de tener el componente Icon instalado
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarUser/NavbarUser'; // Importa el componente Navbar

const UserMain = () => {
	const [categories, setCategories] = useState({});  // Estado para almacenar los datos agrupados por categorías
	const [expandedCategory, setExpandedCategory] = useState(null);  // Estado para manejar qué categoría está expandida

	// Función para simular la carga de datos
	const fetchData = async () => {
		// Datos simulados
		const data = [
			{ nombre: 'Futbol', sede: 'Vitacura' },
			{ nombre: 'Voleibol', sede: 'Vitacura' },
			{ nombre: 'Basketball', sede: 'Vitacura' },
			{ nombre: 'Tenis', sede: 'Vitacura' },
			{ nombre: 'Fútbol', sede: 'San Joaquín' },
			{ nombre: 'Tenis', sede: 'San Joaquín' },
			{ nombre: 'Padel', sede: 'Casa Central' },
			{ nombre: 'VoleyPlaya', sede: 'San Joaquín' },
			{ nombre: 'Basketball', sede: 'San Joaquín' },
			{ nombre: 'Fútbol', sede: 'Viña' },
			{ nombre: 'Basketball', sede: 'Viña' },
			{ nombre: 'Natación', sede: 'Casa Central' },
			{ nombre: 'Fútball', sede: 'Casa Central' },
			{ nombre: 'Tenis', sede: 'Casa Central' },
			{ nombre: 'Basketball', sede: 'Casa Central' },
			{ nombre: 'Voleyball', sede: 'Casa Central' },
			{ nombre: 'Futball', sede: 'Conce' },
			{ nombre: 'Basket', sede: 'Conce' }
		];

		const grouped = data.reduce((acc, item) => {
			acc[item.sede] = acc[item.sede] || [];
			acc[item.sede].push(item);
			return acc;
		}, {});

		setCategories(grouped);
	};

	// useEffect para cargar los datos cuando el componente se monte
	useEffect(() => {
		fetchData();
	}, []);

	const toggleCategory = (category) => {
		setExpandedCategory(expandedCategory === category ? null : category);
	};

	return (
		<div className="container">
			<NavbarUser />
			<section className='section mt-6'>
				<div className='box box-transparente pb-6'>
					<aside className="menu">
						<p className="menu-label is-size-2 texto has-text-centered mb-1">Canchas Disponibles</p>
						<div className='section'>
							{Object.keys(categories).map(category => (
								<ul key={category} className="menu-list m-1 p-0">
									<li>
										<a className={`fondo-gris ${expandedCategory === category ? "is-active" : ""}`}
											onClick={() => toggleCategory(category)}
											role='button'>
											{category} <Icon className='is-pulled-right is-hidden-touch' path={mdiTriangleDown} size={1} />
										</a>
										{expandedCategory === category && (
											<ul>
												{categories[category].map((item) => (
													<li key={item.nombre}>
														<Link href={`/Sedes/Vitacura/${item.nombre}`} className='fondo-boton-blanco'>
															{item.nombre}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								</ul>
							))}
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
};

export default UserMain;
