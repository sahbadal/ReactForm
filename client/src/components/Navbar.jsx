import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='shadow'>
            <div className='flex items-center justify-between max-w-7xl m-auto p-4 '>
                <div>
                    <Link to={'/'}><h1 className='text-3xl font-semibold text-blue-600'>ReactForm</h1></Link>
                </div>
                <div className='flex items-center gap-x-10'>
                    <p className='hover:text-blue-600 duration-300 font-semibold'><Link to={'/'}>Home</Link></p>
                    <p className='bg-blue-600 px-8 py-2 rounded-full text-white hover:bg-blue-700 duration-300'><Link to={'/login'}>Login</Link></p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar