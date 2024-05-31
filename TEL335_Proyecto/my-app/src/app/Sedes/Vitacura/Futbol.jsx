import React from 'react';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/router';

const Futbol = () => {
	const router = useRouter();
	const { sede } = router.query;

	return (
		<div className="container">
			<section className="section">
				<div className="box">
					<div className="columns is-vcentered">
						<div className="column">
							<h1 className="title">Cancha Fútbol</h1>
						</div>
						<div className="column has-text-right">
							<button className="button is-primary is-rounded">Reserva</button>
						</div>
					</div>
					<div className="columns">
						<div className="column is-one-third">
							<figure className="image is-4by3">
								<img src="/path/to/football-outdoor.jpg" alt="Outdoor Football" />
							</figure>
							<div className="content">
								<p><strong>Ubicación</strong>: {sede || 'Vitacura'}</p>
								<p><strong>Disponibilidad</strong>: 8:00 - 18:00</p>
							</div>
						</div>
						<div className="column is-one-third">
							<figure className="image is-4by3">
								<img src="/path/to/football-indoor.jpg" alt="Indoor Football" />
							</figure>
							<div className="content">
								<p><strong>Ubicación</strong>: {sede || 'Vitacura'}</p>
								<p><strong>Disponibilidad</strong>: 9:00 - 20:00</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Futbol;