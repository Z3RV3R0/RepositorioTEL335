"use client";
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '@/css/menuUser.css'; // Importa los estilos CSS para el menú
import NavbarUser from '@/components/NavbarAdmin/NavbarAdmin'; // Importa el componente Navbar
import Link from 'next/link';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment);

const Calendario = () => {
    const [events, setEvents] = useState([]);

    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('Nuevo evento');
        if (title) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title,
                },
            ]);
        }
    };

    // Establecer las horas mínimas y máximas para mostrar en el calendario
    const minTime = new Date();

    minTime.setHours(8, 0, 0);

    const maxTime = new Date();

    maxTime.setHours(20, 0, 0);

    const handleSelectEvent = (event) => {
        if (window.confirm(`¿Quieres eliminar el evento "${event.title}"?`)) {
            setEvents(events.filter(e => e !== event));
        }
    };

    const timeslots = 2; // Intervalos de 30 minutos

    return (
        <div className="container">
            <NavbarUser />
            <section className='section mt-6'>
                <div className='box box-transparente pb-6'>
                    <div className="box has-background-light mb-6">
                        <h3 className="is-size-4">Calendario de Reservas</h3>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                            selectable
                            view={['week']}
                            min={minTime}
                            max={maxTime}
                            timeslots={timeslots}
                            onSelectSlot={handleSelectSlot}
                            onSelectEvent={handleSelectEvent}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Calendario;