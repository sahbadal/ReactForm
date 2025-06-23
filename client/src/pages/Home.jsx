import React from 'react'

const Home = () => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {}

    return (
        <div className='h-[90vh] flex items-center justify-center flex-col'>
            <h1 className='text-3xl font-semibold'>Welcome <span className='text-blue-500'>{userInfo.name || "Coder"}</span> !</h1>
            <p className='text-xl font-semibold mt-5'>You Logged in with this <span className='text-blue-500'>{userInfo.email || "coder@gmail.com"}</span> Email Id</p>
        </div>
    )
}

export default Home