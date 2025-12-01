import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e]  text-gray-300 py-10 mt-12">
      <div className="w-11/12 md:w-5/6 lg:w-3/4 mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div data-aos="fade-up">
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-400" /> 
              D-12,Zakir Hossain Road, Mohammadpur, Dhaka-1207
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" /> 
              +880 1580334337
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" /> 
              support@warmpaws.com
            </li>
          </ul>
        </div>

        {/*Social Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <p className="text-sm mb-4">Stay connected with our pet-loving community </p>
          <div className="flex items-center gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/*  Privacy & Policy */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold text-white mb-3">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <p className="hover:text-orange-400 transition">Privacy Policy</p>
            </li>
            <li>
              <p  className="hover:text-orange-400 transition">Terms & Conditions</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t  mt-10 pt-5  text-center text-sm ">
        © {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
