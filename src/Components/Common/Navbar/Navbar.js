import React, { useState, useContext,useEffect } from "react";
import Modal from "../../Forms/Modal";
import Form from "../../Forms/Form";
import { Link } from "react-router-dom";
import noteContext from "../../../Context/Context";
import LoadingBar from "react-top-loading-bar";
import closeICON from "../../Images/png.png";
import Logo from "../../Images/logo.png";

function Navbar() {
  const state = useContext(noteContext);
  // colsole.log(state.isLoggedIn);
  // colsole.log(state.login);
  const [fmodal, setfmodal] = useState(false);
  const [signup, setsignup] = useState(false);
  let modal = () => {
    if (fmodal === false) {
      state.setlog(true);
      setfmodal(true);
      setsignup(false);
    } else {
        state.setlog(false);
        setfmodal(false);
    }
};

let close = () => {
    console.log("ads");
    setsignup(false)
    setfmodal(false)
    state.setlog(false);
  }
  let signupshow = () => {
    if (signup === false) {
      state.setlog(true);
      setsignup(true);
      setfmodal(false);
    } else {
      setsignup(false);
      state.setlog(false);
    }
  };
  let topics = [
    ["Home", "/"],
    ["Feedback", "/feedback"],
  ];
  let ifloggedin = [
    ["Myprofile", "/myprofile"],
    ["Need Help", "/needhelp"],
    ["Volunteer", "/volunteer"],
  ];
  // // colsole.log(state.isLoggedIn);
  return (
    <>
      {/* loading bar */}
      <LoadingBar
        color="#f11946"
        progress={state.progress}
        onLoaderFinished={() => state.setProgress(0)}
      />
      <header className="text-gray-400 bg-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            to={"/"}
          >
            <img
              src={Logo}
              className="h-12"
              alt=""
            />
            <span className="ml-3 text-xl">Corona-Help</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            {topics.map((topic) => {
              return (
                <Link
                  key={topic[1]}
                  to={topic[1]}
                  className="mr-5 text-xl hover:text-white"
                >
                  {topic[0]}
                </Link>
              );
            })}
            {ifloggedin.map((topic) => {
              return (
                <Link
                  key={topic[1]}
                  to={topic[1]}
                  className={`mr-5 hover:text-white ${
                    state.isLoggedIn == true ? "" : "hidden"
                  }`}
                >
                  {topic[0]}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={signupshow}
            className={`inline-flex mx-2 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${
              state.isLoggedIn == true ? "hidden" : ""
            }`}
          >
            Register
          </button>
          <button
            onClick={modal}
            className={`inline-flex mx-2 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${
              state.isLoggedIn == true ? "hidden" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={state.logout}
            className={`inline-flex mx-2 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${
              state.isLoggedIn !== true ? "hidden" : ""
            }`}
          >
            Logout
          </button>
        </div>
      </header>
      <div className="z-100 mx-auto" style={fmodal ? { display: "inline-block" ,width:'80vw' } : { display: "none" }}>
          <img
            onClick={close}
            src={closeICON}
            alt=""
            className={`float-right  h-10 mr-42 mt-2 z-100 ${state.isLoggedIn == true ? "hidden" : ""}`}
          />
        <Form />
      </div>
      <div style={signup ? { display: "inline-block" ,width:'100vw' } : { display: "none" }}>
          <img

            onClick={close}
            src={closeICON}
            alt=""
            className={`float-right h-10 mr-60 -mt-20 z-10 ${state.isLoggedIn == true ? "hidden" : ""}`}
          />
        <Modal />
      </div>
    </>
  );
}

export default Navbar;
