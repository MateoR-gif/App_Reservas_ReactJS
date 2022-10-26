import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { sillas } from '../../utils/APIRoutes'
import asientoIMG from '../../assets/asiento.svg'

var numSillasSeleccionadas = 0
var valorEstaCompra = 0

export default function Asientos() {

  const [asientos, setAsientos] = useState([])
  const [ejecutivas, setEjecutivas] = useState([])
  const [economicas, setEconomicas] = useState([])
  const [error, setError] = useState([])


  const getAsientos = useCallback(async () => {
    try {
      const response = await axios.get(sillas)
      console.log(response)
      setAsientos(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleSelect = (tipoSilla, index) => {
    setError('')
    if (tipoSilla === 'Ejecutiva') {
      let sillas = [...ejecutivas]
      let silla = { ...sillas[index] }
      if (silla.Estado === true) {
        silla.Estado = false
        numSillasSeleccionadas -= 1
        valorEstaCompra -= silla.Precio
        sillas[index] = silla
        setEjecutivas(sillas)
      } else {
        if (numSillasSeleccionadas < 3) {
          silla.Estado = true
          numSillasSeleccionadas += 1
          valorEstaCompra += silla.Precio
          sillas[index] = silla
          setEjecutivas(sillas)
        } else {
          setError(['No puede seleccionar más de 3 asientos por compra'])
        }
      }
    } else {
      let sillas = [...economicas]
      let silla = { ...sillas[index] }
      if (silla.Estado === true) {
        silla.Estado = false
        numSillasSeleccionadas -= 1
        valorEstaCompra -= silla.Precio
        sillas[index] = silla
        setEconomicas(sillas)
      } else {
        if (numSillasSeleccionadas < 3) {
          silla.Estado = true
          numSillasSeleccionadas += 1
          valorEstaCompra += silla.Precio
          sillas[index] = silla
          setEconomicas(sillas)
        } else {
          setError(['No puede seleccionar más de 3 asientos por compra'])
        }
      }
    }


  }

  useEffect(() => {
    setEjecutivas(asientos.filter((asiento) => asiento.Clase === 'Ejecutiva'))
    setEconomicas(asientos.filter((asiento) => asiento.Clase === 'Economica'))
  }, [asientos])

  useEffect(() => {
    getAsientos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='asientos__contenedor'>
      <div className='info__container'>
        <fieldset>
          <legend>
            Info
          </legend>
          <div className='error__container'>
            <h3 className='red'>{error}</h3>
          </div>
          <div className='esta__compra'>
            <h4>Valor de esta compra: {valorEstaCompra}</h4>
            <h4>Cantidad de Sillas: {numSillasSeleccionadas}</h4>
          </div>
          <div className='info__sillas'>
            <img src={asientoIMG} alt="asiento" className='asiento__ejemplo red__filter'></img>
            <h4 className='red'>Silla Ocupada</h4>
            <img src={asientoIMG} alt="asiento" className='asiento__ejemplo green__filter'></img>
            <h4 className='green'>Silla Disponible</h4>
          </div>
          <h3 className='blue'>Sillas Ejecutivas</h3>
          <h3 className='green'>Sillas Normales</h3>
        </fieldset>
      </div>
      <div className='ejecutivas'>
        {
          ejecutivas.map((ejecutiva, index) => {
            return (
              <div className='asiento__contenedor' key={index}>
                {
                  ejecutiva.Estado === false
                    ?
                    <img
                      src={asientoIMG}
                      alt="asiento"
                      className='asiento green__filter'
                      onClick={() => handleSelect('Ejecutiva', index)}
                    />
                    :
                    <img
                      src={asientoIMG}
                      alt="asiento"
                      className='asiento red__filter'
                      onClick={() => handleSelect('Ejecutiva', index)}
                    />
                }
              </div>
            )
          })
        }
      </div>
      <div className='economicas'>
        {
          economicas.map((economica, index) => {
            return (
              <div className='asiento__contenedor' key={index}>
                {
                  economica.Estado === false
                    ?
                    <img
                      src={asientoIMG}
                      alt="asiento"
                      className='asiento green__filter'
                      onClick={() => handleSelect('Economica', index)}
                    />
                    :
                    <img
                      src={asientoIMG}
                      alt="asiento"
                      className='asiento red__filter'
                      onClick={() => handleSelect('Economica', index)}
                    />
                }
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