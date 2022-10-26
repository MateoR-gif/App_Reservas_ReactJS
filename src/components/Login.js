import React, { useState } from 'react'

export default function Login({ children }) {
    const [formIsValid, setFormIsValid] = useState(false)
    //CONSTANTE DE MENSAJES DE ERROR
    const [error, setError] = useState('')
    //CONSTANTE PARA LOS DATOS DEL USUARIO
    const [user, setUser] = useState({
        Cedula: '',
        Email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        if (user.Cedula === '' || user.Email === '') {
            setError('Por favor rellene los campos')
        } else {
            setFormIsValid(true)
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setError('') //LIMPIA EL MENSAJE DE ERROR
        setUser({ ...user, [name]: value })
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
                <input
                    className='email__input'
                    type='text'
                    name='Email'
                    onChange={handleChange}
                    placeholder='E-Mail'
                    autoComplete='off'
                />
                <button>Enviar</button>
                <div className='error__container'>
                    <h3>{error}</h3>
                </div>
            </form>
        </div>
    )
}
