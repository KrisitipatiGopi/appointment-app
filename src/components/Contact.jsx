import React from 'react'
import { assets } from '../utils/assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div>
    <div className="flex justify-center items-center mt-10">
      <h1 className="text-gray-500 text-2xl">CONTACT <span className="font-bold text-black">US</span></h1>
    </div>
    <div className="flex justify-center w-full p-6 mt-10 gap-4">
      <div className="mb-6 w-[30%]">
        <img
          src={assets.contact_image}
          alt="About Prescripto"
          className="w-full max-w-4xl"
        />
      </div>

      <div className="flex flex-col gap-1 text-sm max-w-4xl mt-6 ml-10 w-[50%] p-2 ">
        <p className="mb-4 text-lg font-semibold">
          OUR OFFICE
        </p>
        <p className="text-sm mb-4">
        00000 Willms Station<br />
        Suite 000, Washington, USA
        </p>
        <p className="text-sm mb-4">
        Tel: (000) 000-0000<br />
        Email: gopikristipati@gmail.com
        </p>


        <h2 className="text-2xl font-semibold mt-6 mb-2">CAREERS AT PRESCRIPTO</h2>
        <p className="text-sm mb-4">
        Learn more about our teams and job openings.
        </p>
        <button className='w-[150px] p-4 border hover:bg-black hover:text-white'>Explore Jobs</button>
      </div>
    </div>
  </div>
  )
}

export default Contact;