import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Home/ServiceCard';


const AllServices = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1 className='font-bold text-2xl items-center, text-center my-10'>Popular Winter Care Services</h1>
            <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>

                {
                    data.map(service => <ServiceCard key={service.serviceId} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;