import React, { useContext, useEffect, useState } from "react";
import { assets } from "../utils/assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { profile_logo } from "../utils/assets/assets_frontend/assets";

const Navbar = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserDetails(null); // Update user state
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        setUserDetails(null);
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center mt-2 p-2 border-b-2 font-semibold">
      <img src={assets.logo} alt="logo" className="w-40" />
      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-indigo-600">
          HOME
        </NavLink>
        <NavLink to="/alldoctors" className="hover:text-indigo-600">
          ALL DOCTORS
        </NavLink>
        <NavLink to="/about" className="hover:text-indigo-600">
          ABOUT
        </NavLink>
        <NavLink to="/contact" className="hover:text-indigo-600">
          CONTACT
        </NavLink>
      </div>

      {userDetails ? (
        <div
          className="relative"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <div className="flex items-center gap-2">
            <p className="">Hello..!&nbsp;<span className="font-bold text-xl">{userDetails.name}</span></p>
            <img
              src={profile_logo}
              alt="Profile"
              className="w-10 rounded-full cursor-pointer"
            />
          </div>

          {dropdownVisible && (
            <div className="absolute right-0 bg-slate-50 shadow-md p-4 text-sm rounded-md">
              <p
                className="mt-2 cursor-pointer hover:text-indigo-600"
                onClick={() => navigate("/appointments")}
              >
                Appointments
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-red-600"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      ) : (
        <button
          className="bg-indigo-600 text-white p-3 px-4 border-2 rounded-2xl text-xs"
          onClick={() => navigate("/login")}
        >
          Create Account
        </button>
      )}
    </div>
  );
};

export default Navbar;
