import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {

    const [input, setInput] = useState({
        identity: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    })

    const hdlChange = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }


    const hdlRegister = async (e) => {
        try {
            e.preventDefault()
            if (!(input.identity.trim() && input.firstName.trim() && input.lastName.trim() && input.password.trim() && input.confirmPassword.trim()))
                return alert('Please fill all input')

            const result = await axios.post("http://localhost:8000/auth/register", input)
            console.log(result.data)
            e.target.closest('dialog').close()
            setInput({
                identity: '',
                firstName: '',
                lastName: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            const errMsg = error.response?.data.error || error.message
            console.log(errMsg)
        }
    }


    return (
        <form className='flex flex-col gap-3 p-4 pt-10' onSubmit={hdlRegister}> 
            <div className="flex gap-2">
                <input name='firstName' value={input.firstName} type='text' placeholder='First name' className='input input-bordered w-full' onChange={hdlChange} />
                <input name='lastName' value={input.lastName}  type='text' placeholder='Surname' className='input input-bordered w-full' onChange={hdlChange} />
            </div>

            <input name='identity' value={input.identity}  type='text' placeholder='Email or Phone number' className='input input-bordered w-full' onChange={hdlChange} />
            <input name='password' value={input.password}  type='password' placeholder='password' className='input input-bordered w-full' onChange={hdlChange} />
            <input name='confirmPassword' value={input.confirmPassword}  type='password' placeholder='confirm password' className='input input-bordered w-full' onChange={hdlChange} />

            <button className='btn btn-secondary text-xl text-white'>Sign up</button>
        </form>
    )
}
