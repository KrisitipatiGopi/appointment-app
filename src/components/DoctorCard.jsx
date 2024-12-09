import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({doctors}) => {
    const navigate = useNavigate();

  const handleCardClick = (id) => {
        window.scrollTo(0,0)
        navigate(`/doctor-details/${id}`)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="flex flex-col gap-2 border border-blue-300 rounded-lg transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            onClick={() => handleCardClick(doctor._id)}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-56 bg-slate-300 rounded-t-lg"
            />
            <div className="flex flex-col gap-1 p-2">
              <p className="flex items-center text-green-700">
                <span className="text-xs">🟢</span>
                Available
              </p>
              <p className="text-lg">{doctor.name}</p>
              <p className="text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
