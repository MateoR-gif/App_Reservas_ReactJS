import React from 'react'
import avionIMG from '../assets/avion.svg';
import Asientos from '../components/avion/Asientos';

export default function Avion() {

  return (
    <div className='avion__contenedor'>
      <div className='controles'>
        <img src={avionIMG} className="avion__svg" alt="logo" />
      </div>
      <div className='asientos'>
        <Asientos></Asientos>
      </div>
    </div>
  )
}
