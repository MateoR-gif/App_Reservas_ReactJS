import React from 'react'
import avion from './avion.svg';
import Asientos from '../asientos/Asientos';

export default function Avion() {
  return (
    <div className='avion__contenedor'>
      <div className='controles'>
        <img src={avion} className="avion__svg" alt="logo" />
      </div>
      <div className='asientos'>
        <Asientos></Asientos>
      </div>
    </div>
  )
}
