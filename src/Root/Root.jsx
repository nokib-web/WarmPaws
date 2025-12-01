import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto lg:min-h-screen object-cover my-10'><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;