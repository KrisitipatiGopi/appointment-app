import React from "react";
import { doctors } from "../utils/assets/assets_frontend/assets";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const tenDoctors = doctors.slice(0, 10);
  return (
    <div className="mt-15">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl">Top Doctors To Book</h1>
        <p className="text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <DoctorCard doctors={tenDoctors}/>
    </div>
  );
};

export default Doctors;
