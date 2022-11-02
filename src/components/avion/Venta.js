import axios from 'axios';
import React from 'react'
import avionIMG from '../../assets/avion.svg';
import { crearReserva, sillas } from '../../utils/APIRoutes';

export default function Venta(props) {
  const venta = props.venta
  const valorCompra = props.valorCompra
  const handleReserva = () => {
    venta.forEach(async (venta) => {
      try {
        console.log(Date.now())
        console.log(venta.asiento[0].idSilla)
        console.log(venta.usuario.Cedula)
        await axios.post(crearReserva, {
          "idReserva": (Date.now() % 100000),
          "idSilla": venta.asiento[0].idSilla,
          "idCedula": venta.usuario.Cedula
        })
        await axios.put(`${sillas}/${venta.asiento[0].idSilla}`, {
          "estado": true
        })
      } catch (error) {
        console.log(error)
      }
    });
    setTimeout(() => {
      window.location.reload(false)
    }, 1500)
  }
  return (
    <div className='venta__container'>
      <div className='reservas__container'>
        {venta.map((venta, index) => {
          return (
            <div className='reserva' key={index}>
              <div className='info__reserva'>
                <h4>Reserva: {venta.usuario.Nombre}</h4>
                <h4>Cédula: {venta.usuario.Cedula}</h4>
                <hr></hr>
                <h4>Clase: {venta.asiento[0].Clase}</h4>
                <h4>Precio: {venta.asiento[0].Precio}</h4>
                <h4>Ubicación: {venta.asiento[0].Ubicacion}</h4>
                <h4>Número de Silla: {venta.asiento[0].idSilla}</h4>
              </div>
              <div className='img__reserva'>
                <img src={avionIMG} alt='avion_img'></img>
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={handleReserva}>Confirmar Reserva (${valorCompra})</button>
      <button onClick={() => window.location.reload(false)}>Cancelar</button>
    </div>
  )
}
