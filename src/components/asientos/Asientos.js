import React from 'react'
import asiento from './asiento.svg'

export default function Asientos() {

  const ejecutivas = [1, 2, 3, 4, 5, 6, 7, 8]
  const normales = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

  return (
    <div className='asientos__contenedor'>
      <div className='info__container'>
        <fieldset>
          <legend>
            Info
          </legend>
          <div className='info__sillas'>
            <img src={asiento} alt="asiento" className='asiento__ejemplo red__filter'></img>
            <h4 className='red'>Silla Ocupada</h4>
            <img src={asiento} alt="asiento" className='asiento__ejemplo green__filter'></img>
            <h4 className='green'>Silla Disponible</h4>
          </div>
          <h3 className='blue'>Sillas Ejecutivas</h3>
          <h3 className='green'>Sillas Normales</h3>
        </fieldset>

      </div>
      <div className='ejecutivas'>
        {
          ejecutivas.map((ejecutiva) => {
            return (
              <div className='asiento__contenedor' key={ejecutiva}>
                <img src={asiento} alt="asiento" className='asiento red__filter'></img>
              </div>
            )
          })
        }
      </div>
      <div className='normales'>
        {
          normales.map((normal) => {
            return (
              <div className='asiento__contenedor' key={normal}>
                <img src={asiento} alt="asiento" className={normal === 30 ? 'asiento red__filter' : 'asiento green__filter'}></img>
              </div>
            )
          })
        }
      </div>
      <div className='separador'></div>
      <div className='pasillo__contenedor'>
        <h3>Pasillo</h3>
      </div>
    </div>
  )
}
