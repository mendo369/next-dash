import React, { useState } from 'react'
import axios from 'axios'

function login() {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await (await axios.post('/api/auth/login', user)).data
        // const response = await fetch('/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ email: user.email, password: user.password })
        // })
        console.log('Res Api: ', response)
    }

    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-white grid grid-flow-row gap-4 p-4 rounded-lg'>
                <input type="text" placeholder='User' name='email' onChange={handleChange} className='my-4 bg-gray-100 rounded-md p-2 placeholder:text-center outline-none focus:outline-teal-600' />
                <input type="password" name="password" placeholder='Password' onChange={handleChange} className='my-4 bg-gray-100 rounded-md p-2 placeholder:text-center outline-none focus:outline-teal-600' />
                <button className='btn-primary'>Login</button>
                <button className='btn-danger'>Cancelar</button>
            </form>
        </div>
    )
}

export default login