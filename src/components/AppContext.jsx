import { createContext, useState } from "react";
import { doctors } from "../utils/assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [doctorSpeciality, setDoctorSpeciality] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date
  const [selectedSlot, setSelectedSlot] = useState(null); // Track selected slot
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [appointments, setAppointments] = useState([]); // Store all appointments

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  //console.log(userDetails);
  console.log(appointments)

  const value = {
    doctors, 
    doctorSpeciality, 
    setDoctorSpeciality,
    userDetails,
    setUserDetails,
    selectedDate,
    setSelectedDate,
    selectedSlot,
    setSelectedSlot,
    doctorDetails,
    setDoctorDetails,
    appointments,
    setAppointments,
    addAppointment

  };

  console.log(selectedDate,selectedSlot)

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
