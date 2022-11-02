import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { crearReserva } from '../../utils/APIRoutes'
import avionIMG from '../../assets/avion.svg';

export default function Reservas(props) {

    const [reservas, setReservas] = useState([])
    const [misReservas, setMisReservas] = useState([])
    const currentUser = props.currentUser

    const getReservas = async () => {
        try {
            const response = await axios.get(crearReserva)
            setReservas(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    /* const getSillas = useCallback(async () => {
        try {
            const response = await axios.get(sillas)
            setAllSillas(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [sillas]) */

    useEffect(() => {
        getReservas()
        /* getSillas() */
    }, [])

    useEffect(() => {
        setMisReservas(reservas.filter((reserva) => reserva.id_Cedula === currentUser.Cedula))
    }, [reservas, currentUser])


    /* useEffect(() => {
        console.log(misReservas)
        misReservas.forEach(reserva => {
            let temp_silla = allSillas.filter((silla) => silla.idSilla === reserva.id_Silla)
            sillasMiReserva.push(temp_silla)
        });
        console.log(sillasMiReserva)
    }, [misReservas, allSillas]) */

    return (
        <>
            <h2>Mis Reservas</h2>
            <div className='mis__reservas__container'>
                {misReservas.length === 0 ? 'Aún no tienes reservas' : misReservas.map((reserva, index) => {
                    return (
                        <div className='reserva' key={index}>
                            <div className='info__reserva'>
                                <h4>Reserva: {currentUser.Nombre}</h4>
                                <h4>Cédula: {reserva.id_Cedula}</h4>
                                <h4>Nro Silla: {reserva.id_Silla}</h4>
                                <hr></hr>
                                <h5>ID RESERVA: {reserva.idReserva}</h5>
                            </div>
                            <div className='img__reserva'>
                                <img src={avionIMG} alt='avion_img'></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
