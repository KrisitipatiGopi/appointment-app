import React, { useState, useEffect, useContext } from 'react';
import { specialityData, doctors } from '../utils/assets/assets_frontend/assets';
import DoctorCard from './DoctorCard';
import { AppContext } from './AppContext';

const AllDoctors = () => {
  const {doctorSpeciality,setDoctorSpeciality} = useContext(AppContext);

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    if (doctorSpeciality) {
      filterDoctors(doctorSpeciality);
    }
  }, []);

  const filterDoctors = (speciality) => {
    const matchedDoctors = doctors.filter((doctor) => doctor.speciality === speciality);
    setFilteredDoctors(matchedDoctors);
  };

  const handleSpecialityClick = (speciality) => {
    setDoctorSpeciality(speciality);
    filterDoctors(speciality);
  };

  return (
    <div className="mt-5">
      <p className="text-lg font-semibold">Browse through the doctors' specialties</p>
      <div className="flex gap-4">
        <div className="w-[15%] flex flex-col gap-2 mt-5 cursor-pointer">
          {specialityData.map((special,index) => (
            <div
              key={index}
              className={`p-2 border border-gray-400 rounded transition-all ${
                doctorSpeciality === special.speciality ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleSpecialityClick(special.speciality)}
            >
              <p>{special.speciality}</p>
            </div>
          ))}
        </div>

        <div className="w-[85%]">
          <DoctorCard doctors={filteredDoctors.length > 0 ? filteredDoctors : doctors} />
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
