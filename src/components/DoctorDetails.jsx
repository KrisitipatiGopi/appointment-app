import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../utils/assets/assets_frontend/assets";
import { assets } from "../utils/assets/assets_frontend/assets";
import { AppContext } from "./AppContext";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { selectedDate, setSelectedDate, selectedSlot, setSelectedSlot, doctorDetails, setDoctorDetails,appointments,setAppointments,addAppointment } =
    useContext(AppContext);
  const [datesWithWeeks, setDatesWithWeeks] = useState([]);
  const [slots, setSlots] = useState([]);
  const [tempDate, setTempDate] = useState(null); // Temporary selected date
  const [tempSlot, setTempSlot] = useState(null); // Temporary selected slot
  const { id } = useParams();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Fetch doctor details by ID
  const fetchDocDetails = async () => {
    const docDetails = doctors.find((doctor) => doctor._id === id);
    setDoctorDetails(docDetails);
  };

  // Generate dates, weeks, and slots
  const getDatesAndWeekNames = () => {
    const datesAndWeeks = [];
    const today = new Date();

    const generateSlots = (isToday) => {
      const slots = [];
      const startHour = isToday ? today.getHours() + 1 : 9; // Start from the next hour for today, otherwise 9 AM
      const endHour = 18; // Last slot is at 6 PM

      for (let hour = startHour; hour <= endHour; hour++) {
        const formattedHour = hour > 12 ? hour - 12 : hour;
        const period = hour >= 12 ? "PM" : "AM";
        slots.push(`${formattedHour}:00 ${period}`);
        slots.push(`${formattedHour}:30 ${period}`);
      }

      return slots;
    };

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      const isToday = i === 0;
      datesAndWeeks.push({
        fullDate: nextDay.toISOString().split("T")[0],
        week: daysOfWeek[nextDay.getDay()],
        slots: generateSlots(isToday),
      });
    }

    setDatesWithWeeks(datesAndWeeks);
  };

  // Handle date selection
  const handleDateSelection = (selectedDate) => {
    setTempDate(selectedDate.fullDate); // Temporarily set the selected date
    const selectedDay = datesWithWeeks.find(
      (eachDate) => eachDate.fullDate === selectedDate.fullDate
    );
    setSlots(selectedDay ? selectedDay.slots : []);
    setTempSlot(null); // Reset temp slot when a new date is selected
  };

  // Handle slot selection
  const handleSlotSelection = (slot) => {
    setTempSlot(slot); // Temporarily set the selected slot
  };

  // Handle booking appointment
  const handleBookAppointment = (e) => {
    e.preventDefault();
    if (!tempDate && !tempSlot) {
      alert("Please select a date and time slot");
    } else if (!tempDate && tempSlot) {
      alert("Please select a date");
    } else if (tempDate && !tempSlot) {
      alert("Please select a slot");
    } else {
      // Update the context with selected date and slot

      addAppointment({
        doctor: doctorDetails,
        date: tempDate,
        slot: tempSlot,
      });
  
      setSelectedDate(tempDate);
      setSelectedSlot(tempSlot);
      setTempDate(null);
      setTempSlot(null);
      alert("Appointment Booked!");
    }
  };

  useEffect(() => {
    fetchDocDetails();
  }, []);

  useEffect(() => {
    getDatesAndWeekNames();
  }, []);

  if (!doctorDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col mt-10">
      <div className="flex gap-8">
        <div className="bg-indigo-500 w-[22%] rounded-xl">
          <img src={doctorDetails.image} alt={doctorDetails.name} />
        </div>
        <div className="flex flex-col w-[78%] border p-4 gap-5">
          <h1 className="flex items-center text-2xl font-semibold gap-2">
            {doctorDetails.name}
            <span>
              <img src={assets.verified_icon} alt="Verified" />
            </span>
          </h1>
          <p className="flex gap-2 items-center">
            <span>{doctorDetails.degree}&nbsp;&nbsp;-</span>
            {doctorDetails.speciality}&nbsp;&nbsp;-
            <span className="border px-2 rounded-lg">
              {doctorDetails.experience}
            </span>
          </p>
          <p className="flex items-center gap-1">
            About
            <span className="w-5">
              <img src={assets.info_icon} alt="Info" />
            </span>
          </p>
          <p className="text-sm">{doctorDetails.about}</p>
          <p className="flex items-center gap-2">
            Appointment Fee:<span>${doctorDetails.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots Section */}
      <h1 className="mt-10 font-semibold text-xl ml-10">Booking Slots</h1>
      <div className="flex flex-wrap mt-5 gap-2 ml-10">
        {datesWithWeeks.map((dates) => (
          <div
            key={dates.fullDate}
            className={`flex flex-col items-center p-4 border-2 rounded-[25%] cursor-pointer ${
              tempDate === dates.fullDate ? "bg-indigo-600 text-white" : "bg-white text-black"
            }`}
            onClick={() => handleDateSelection(dates)}
          >
            <h1 className="text-2xl">{dates.date}</h1>
            <p>{dates.week}</p>
          </div>
        ))}
      </div>

      {/* Display Available Slots */}
      <div className="flex flex-wrap mt-5 gap-2 ml-10">
        {slots.map((each, index) => (
          <div
            key={index}
            className={`p-2 border-2 rounded-[10%] cursor-pointer ${
              tempSlot === each ? "bg-indigo-600 text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSlotSelection(each)}
          >
            <p>{each}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          className="mt-10 ml-20 bg-indigo-600 text-white rounded-lg px-4 p-2"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
