import React from 'react'

const InputFields = ({ label, type, value, name, onChange, error }) => {
    return (
        <div>
            <label className='block font-semibold'>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className={`w-full p-2 mb-3 border outline-0  ${error ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}

export default InputFields