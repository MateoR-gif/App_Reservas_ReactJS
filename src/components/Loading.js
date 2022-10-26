import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import loadingGIF from '../assets/loading.gif'
import { sillas } from '../utils/APIRoutes'

export default function Loading({ children }) {
    //CONSTATE QUE GUARDA EL MENSAJE DE ERROR
    const [error, setError] = useState('Cargando...')
    //CONSTANTE QUE GUARDA EL GIF
    const gif = loadingGIF
    //CONSTANTE QUE CONTROLA EL ESTADO CARGANDO
    const [isLoading, setIsLoading] = useState(true)
    //METODO QUE VERIFICA LA CONEXION
    const getGlobalMessages = useCallback(async () => {
        try {
            await axios.get(sillas)
            setError("Listo")
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        } catch (error) {
            setError("Nuestros servicios no están disponibles")
        }
    }, [])
    //USE EFFECT QUE EJECUTA EL GET GLOBAL AL CARGAR LA PAGINA
    useEffect(() => {
        getGlobalMessages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <div className='charger__container'>
                <h1>{error}</h1>
                <img src={gif} alt='loading.gif'></img>
            </div>
        )
    }
    return (
        <div>{children}</div>
    )
}
