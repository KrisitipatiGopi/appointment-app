import React from "react";
import { assets } from "../utils/assets/assets_frontend/assets";
import Specality from "./Specality";
import { useNavigate } from "react-router-dom";
import Doctors from "./Doctors";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16">
      <div className="flex bg-indigo-500 mt-5 rounded-md">
        <div className="flex flex-col justify-center items-center w-[50%] text-white gap-4 ml-10 p-4 font-semibold">
          <h1 className="text-5xl">
            Book Appointment <br className="mt-4" />
            With Trusted Doctors
          </h1>
          <div className="flex justify-center items-center p-2 gap-3">
            <img src={assets.group_profiles} alt="group" className="" />
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div className="flex justify-start">
            <a href="#specality">
              <button className="flex items-center text-sm bg-white gap-2 text-black py-4 px-4 rounded-3xl">
                <p>Book Appointment</p>
                <img src={assets.arrow_icon} />
              </button>
            </a>
          </div>
        </div>
        <div className="w-[50%] mr-16">
          <img src={assets.header_img} alt="banner" className="h-full" />
        </div>
      </div>
      <Specality />
      <Doctors />
      <div className="flex justify-center items-center">
        <button
          className="bg-gray-500 text-white font-semibold p-4 rounded-xl w-32 transform transition-all duration-300 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/alldoctors");
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Home;
