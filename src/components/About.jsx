import React from "react";
import { assets } from "../utils/assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-gray-500 text-2xl">ABOUT <span className="font-bold text-black">US</span></h1>
      </div>
      <div className="flex justify-center w-full p-6 mt-10 gap-4">
        <div className="mb-6 w-[30%]">
          <img
            src={assets.about_image}
            alt="About Prescripto"
            className="w-full max-w-4xl"
          />
        </div>

        <div className="text-sm max-w-4xl mt-6 ml-10 w-[50%]">
          <p className="mb-4 text-sm">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-sm mb-4">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
          <p className="text-sm mb-4">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
