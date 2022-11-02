import React from 'react'
import avionIMG from '../assets/avion.svg';
import Asientos from '../components/avion/Asientos';
import Reservas from '../components/avion/Reservas';

export default function Avion() {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const logOut = () => {
    localStorage.removeItem('user')
    window.location.reload(false)
  }
  return (
    <div className='avion__contenedor'>
      <div className='controles'>
        <div className='controles__reservas'>
          <div>
            <h3>Bienvenido, {currentUser.Nombre}</h3>
          </div>
          <img src={avionIMG} className="avion__svg" alt="logo" />
          <button onClick={logOut}>Salir</button>
        </div>
        <div className='reservas'>
          <Reservas currentUser={currentUser}></Reservas>
        </div>
      </div>
      <div className='asientos'>
        <Asientos></Asientos>
      </div>
    </div>
  )
}
