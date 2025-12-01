import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthContext';
import userLogo from '../../assets/user.png'
import toast, { Toaster } from 'react-hot-toast';



const Navbar = () => {
    const { user, logout } = use(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success(`You've Successfully Logout`)
            }).catch((error) => {
                console.log(error)
            });
    }



    const links = <>
        <NavLink className='text-semibold text-gray-600 ml-4' to='/'><li>  Home</li></NavLink>
        <NavLink className='text-semibold text-gray-600 ml-4' to='/services'><li>Services</li></NavLink>
        <NavLink className='text-semibold text-gray-600 ml-4' to='/profile'><li>My Profile</li></NavLink>
    </>
    return (
        <div className="  navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link to='/'><p className='font-bold flex text-[#2C1B0E] items-center text-xl'> <img className='lg:w-15 h-12' src={logo} alt="logo" /> WarmPaws</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">


                <div className='relative group cursor-pointer'>
                    <Link to={'/profile'}><img className="w-12 lg:mr-4 mr-1 rounded-full h-10" src={`${user ? user.photoURL : userLogo}`} alt="" /></Link>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {user?.displayName || 'User'}
                    </span>
                </div>





                {
                    user ? (<button onClick={handleLogout} className="btn text-white rounded-xl hover:bg-[#5e3810] w-[70px] bg-[#c78947]  ">LogOut</button>) : (<Link to={'/login'}>  <button className="btn bg-[#c78947] text-white rounded-xl hover:bg-[#5e3810] w-[70px]   ">Login</button></Link>)
                }
            </div>
            <Toaster></Toaster>
        </div >
    );
};

export default Navbar;