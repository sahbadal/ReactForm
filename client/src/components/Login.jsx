import React, { useState } from 'react'
import InputFields from './InputFields.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""

    })

    const [errors, setErrors] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const userInfo = {
                name: formData.name,
                email: formData.email
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            console.log("Form submitted", formData)
            navigate('/')
        }

    }

    const validate = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"

        if (!formData.email.includes('@')) newErrors.email = "Invalid Email"

        if (formData.password.length < 6) newErrors.password = "Password must be atleast 6 characters"

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    return (
        <div className='h-[80vh] flex justify-center items-center flex-row'>
            <form onSubmit={handleSubmit} className='w-[370px] h-[450px] shadow rounded p-10 hover:shadow-gray-100 duration-300'>
                <div className='flex items-center justify-between mb-6'>
                    <h1 className='text-2xl font-semibold text-blue-600'>Login Form</h1>
                    <button type='button' onClick={() => navigate('/')} className='text-2xl font-semibold cursor-pointer'>X</button>
                </div>
                <div>
                    <InputFields
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                </div>
                <div>
                    <InputFields
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                </div>
                <div>
                    <InputFields
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                </div>
                <button type='submit' className='text-white font-semibold bg-blue-500 px-10 py-2 rounded w-full cursor-pointer hover:bg-blue-600 duration-300'>Submit</button>
            </form>
        </div>
    )
}

export default Login