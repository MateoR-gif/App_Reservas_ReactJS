import React from 'react'
import avion from './avion.svg';
import Asientos from './Asientos';

export default function Avion() {
  return (
    <div>
        <img src={avion} className="App-logo" alt="logo" />
        <Asientos></Asientos>
    </div>
  )
}
