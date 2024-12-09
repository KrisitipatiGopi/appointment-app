import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Appointments = () => {
  const { appointments, setAppointments } = useContext(AppContext);

  // Function to handle cancellation
  const handleCancelAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    alert("Appointment canceled successfully.");
  };

  if (appointments.length === 0) {
    return <div>No appointments booked yet!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Your Appointments</h1>
      {appointments.map((appointment, index) => (
        <div
          key={index}
          className="border p-4 rounded mb-4 shadow-lg flex gap-4 items-center justify-between"
        >
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20">
              <img
                src={appointment.doctor.image}
                alt={appointment.doctor.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-lg">{appointment.doctor.name}</h2>
              <p>
                <strong>Date:</strong> {appointment.date}
              </p>
              <p>
                <strong>Time Slot:</strong> {appointment.slot}
              </p>
              <p>
                <strong>Speciality:</strong> {appointment.doctor.speciality}
              </p>
              <p>
                <strong>Fees:</strong> ${appointment.doctor.fees}
              </p>
            </div>
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => handleCancelAppointment(index)}
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
