import React, { useContext } from 'react';
import { specialityData } from '../utils/assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const Specality = () => {
  const navigate = useNavigate();
  const {doctorSpeciality,setDoctorSpeciality} = useContext(AppContext);

  const handleSpecalityClick = (speciality) => {
    setDoctorSpeciality(speciality)
    console.log(doctorSpeciality)
    navigate('/alldoctors');
  };

  return (
    <div id="specality" className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl">Find by Speciality</h1>
      <p className="text-sm">
        Simply browse through our extensive list of trusted doctors,
        <span className="text-sm flex justify-center items-center">
          schedule your appointment hassle-free.
        </span>
      </p>
      <div className="flex gap-4 mt-3">
        {specialityData.map((each) => (
          <div
            key={each.speciality}
            className="flex flex-col gap-3 justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={() => handleSpecalityClick(each.speciality)}
          >
            <img src={each.image} alt={each.speciality} className="w-34" />
            <p className="text-sm">{each.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specality;
