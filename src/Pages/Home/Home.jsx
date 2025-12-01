import React from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import WinterCareTips from './WinterCareTips';
import VetsSection from './VetsSection';
import PetProducts from './PetProducts';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <HeroSlider></HeroSlider>

            <div>
                <h1 className='font-bold text-2xl items-center, text-center my-10'>Popular Winter Care Services</h1>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>

                    {
                        data.map(service => <ServiceCard key={service.serviceId} service={service} ></ServiceCard>)
                    }
                </div>
                <div>
                    <WinterCareTips></WinterCareTips>
                </div>

                <div>
                    <VetsSection></VetsSection>
                </div>
                <div>
                    <PetProducts></PetProducts>
                </div>
            </div>

        </div>
    );
};

export default Home;