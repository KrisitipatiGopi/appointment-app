import React, { useContext, useEffect, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const Login = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);

  const navigate = useNavigate();
  const [isSignIn, setIsSingIn] = useState(false);
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const handleLoginPage = (e) => {
    setIsSingIn(!isSignIn);
  };

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(Email.current.value, Password.current.value);
    console.log(message);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: Name.current.value,
          }).then(() => {
            setUserDetails({ name: Name.current.value, email: user.email });
            navigate("/");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setUserDetails({ name: user.displayName, email: user.email });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="flex flex-col shadow-xl  border p-8 gap-2 m-10 text-gray-600">
        <h1 className="text-2xl mt-4">
          {isSignIn ? "Login" : "Create Account"}
        </h1>
        <p className="text-xs mb-4">
          Please {isSignIn ? "Sign In" : "Sign up"} to book appointment
        </p>
        {isSignIn ? (
          ""
        ) : (
          <>
            <label htmlFor="name">Full Name</label>
            <input
              ref={Name}
              type="text"
              placeholder="Enter Full Name"
              id="name"
              className="border p-2 w-[300px]"
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          ref={Email}
          type="email"
          placeholder="Email"
          id="email"
          className="border p-2 w-[300px]"
        />
        <label htmlFor="name">Password</label>
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          id="password"
          className="border p-2 w-[300px]"
        />
        <button
          className="m-2 border p-2 bg-indigo-600 text-white"
          onClick={hadleSubmit}
        >
          {isSignIn ? "Login" : "Create Account"}
        </button>
        <p className="mt-4 text-sm">
          {isSignIn ? "Dont have An Account ?" : "Already have an account ?"}
          <span
            className="text-indigo-600 cursor-pointer font-bold"
            onClick={handleLoginPage}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
