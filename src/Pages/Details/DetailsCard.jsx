import React from "react";
import {
    FaStar,
    FaEnvelope,
    FaCheckCircle,
    FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const DetailsCard = ({ detail }) => {
    const {
        serviceName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category,
    } = detail || {};

    if (!detail) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto my-10">
            {/* Card container */}
            <div className="bg-linear-to-br from-white/80 to-base-200/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-base-300 hover:shadow-primary/30 transition-all duration-500">
                {/* Top image */}
                <div className="relative">
                    <img
                        src={image}
                        alt={serviceName}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-[#2C1B0E] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        {category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Left section */}
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold text-[#2C1B0E]">{serviceName}</h1>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaStar className="text-yellow-400 text-lg" />
                            <span className="font-semibold">{rating}</span>
                            <span className="text-gray-400">•</span>
                            <FaCheckCircle className="text-green-500 text-lg" />
                            <span>{slotsAvailable} slots available</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed">{description}</p>

                        <div className="bg-base-200/50 p-4 rounded-2xl space-y-2 border border-base-300">
                            <h3 className="font-semibold text-lg text-[#2C1B0E]">
                                Service Provider
                            </h3>
                            <p className="text-gray-800">{providerName}</p>
                            <p className="flex items-center gap-2 text-gray-600">
                                <FaEnvelope className="text-[#2C1B0E]" /> {providerEmail}
                            </p>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col justify-between bg-base-100/70 border border-base-300 rounded-2xl p-6 shadow-inner">
                        <div className="space-y-4">
                            <p className="text-gray-600 font-medium">Price</p>
                            <h2 className="text-4xl font-bold text-secondary">{price}</h2>

                            <div className="divider"></div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <FaCalendarAlt className="text-[#2C1B0E] text-lg" />
                                <span>Book your preferred slot now</span>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to='/booking'><button className="btn btn-ghost bg-[#2C1B0E] flex-1 text-white">
                                Book Now
                            </button></Link>
                          <Link to='/'>  <button className="btn btn-ghost bg-amber-100 flex-1">
                               Back To Home
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
