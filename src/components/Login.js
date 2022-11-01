import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUserById, registerUser } from '../utils/APIRoutes'

export default function Login({ children }) {

    const currentUser = localStorage.getItem('user')
    const [formIsValid, setFormIsValid] = useState(false)
    //CONSTANTE DE MENSAJES DE ERROR
    const [error, setError] = useState('')
    //CONSTANTE PARA LOS DATOS DEL USUARIO
    const [isNewUser, setIsNewUser] = useState(false)
    const [user, setUser] = useState({
        Cedula: '',
        Nombre: '',
    })

    useEffect(() => {
        if(currentUser){
            setFormIsValid(true)
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleValidate()) {
            if(isNewUser){
                Register()
            }else{
                Login()
            }
        }
    }

    const handleValidate = () => {
        if (user.Cedula === '' || user.Email === '') {
            setError('Por favor rellene los campos')
            return false
        } else if (user.Cedula.length < 4 || user.Cedula.length > 12) {
            setError('La cédula debe estar entre 4 y 12')
            return false
        } else if (isNewUser && user.Nombre.length < 3) {
            setError('Mínimo 3 letras para el nombre')
            return false
        }
        return true
    }

    const handleChange = ({ target: { name, value } }) => {
        setError('') //LIMPIA EL MENSAJE DE ERROR
        setUser({ ...user, [name]: value })
    }

    const Login = async () => {
        try {
            const login = await axios.get(`${getUserById}${user.Cedula}`)
            localStorage.setItem('user', JSON.stringify(login.data))
            setFormIsValid(true)
        } catch (error) {
            if (error.response.data.msg === 'No se encontró el usuario') {
                /* const register = await axios.post(registerUser, user)
                console.log(register)
                setFormIsValid() */
                setError('Nuevo Usuario, por favor regístrese')
                setIsNewUser(true)
            }
        }
    }

    const Register = async () => {
        try {
            const register = await axios.post(registerUser, user)
            localStorage.setItem('user', JSON.stringify(register.data))
            setFormIsValid(true)
        } catch (error) {
            console.log(error)
        }
    }

    if (formIsValid) {
        return (
            <>{children}</>
        )
    }

    return (
        <div className='login__container'>
            <form onSubmit={handleSubmit} className='login__form'>
                <input
                    className='cedula__input'
                    type='text'
                    name='Cedula'
                    onChange={handleChange}
                    placeholder='Cédula'
                    autoComplete='off'
                />
                {
                    isNewUser ?
                        <input
                            className='email__input'
                            type='text'
                            name='Nombre'
                            onChange={handleChange}
                            placeholder='Nombre'
                            autoComplete='off'
                        />
                        :
                        null
                }
                <button>{isNewUser ? 'Registrarse' : 'Ingresar'}</button>
                <div className='error__container'>
                    <h3>{error}</h3>
                </div>
            </form>
        </div>
    )
}
