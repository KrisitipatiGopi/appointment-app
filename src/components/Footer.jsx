import React from 'react';
import { assets } from '../utils/assets/assets_frontend/assets';

const Footer = () => {
  return (
    <footer className="py-8 mt-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* About Section */}
        <div className="text-center lg:text-left max-w-lg">
            <img src={assets.logo} className='w-32 mb-2' />
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Company Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-2">COMPANY</h3>
          <p className="text-sm">Home</p>
          <p className="text-sm">About us</p>
          <p className="text-sm">Delivery</p>
          <p className="text-sm">Privacy policy</p>
        </div>
        {/* Get in Touch Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-2">GET IN TOUCH</h3>
          <p className="text-sm">+0-000-000-000</p>
          <p className="text-sm">greatstackdev@gmail.com</p>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
        <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
