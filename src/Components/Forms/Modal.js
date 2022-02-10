import React, { useContext, useState } from "react";
import useAuth from "../../Context/useAuth";
import noteContext from "../../Context/Context";
import closeICON from "../../Components/Images/png.png";

function Modal() {
  const isopen = useContext(noteContext);
  let userRegister = (e) => {
    e.preventDefault();
    console.log(state);
    // let data JSON.stringify(state)
    if (state.password === state.confirm_password) {
      register(
        state.email,
        state.password,
        state.name,
        state.number,
        state.location
      );
      setState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        number: "",
        location: "",
      });
    } else {
      alert("Please provide valid details");
    }
  };
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    // console.log(state.number);
    setState({
      ...state,
      [name]: value,
    });
  };
  const { register } = useAuth();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number: "",
    location: "",
  });
  return (
    <div
      className={`${state.isLoggedIn == true ? "hidden" : ""} ${
        isopen.log === true ? "" : "hidden"
      } absolute top-1/2 left-1/2 transform -translate-x-1/2 z-2 -translate-y-1/2 z-10 border-slate-400 border-2 w-1/3 mt-10 mx-auto lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none`}
    >
      <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
      <form
        onSubmit={userRegister}
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
      >
        <div className="mb-4 md:flex md:justify-start">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="firstName"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="FullName"
              type="text"
              name="name"
              placeholder=" Full Name"
              onChange={handleChange}
              value={state.name}
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="lastName"
            >
              Mobile Number
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              name="number"
              placeholder=" Phone Number"
              value={state.number}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 w-1/2 ">
          <label
            className="block mb-2 w-1/2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 md:flex md:justify-start">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              value={state.password}
              onChange={handleChange}
            />

            <p className="text-xs italic hidden text-red-500">
              Please choose a password.
            </p>
          </div>
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="password"
              name="confirm_password"
              placeholder="******************"
              value={state.confirm_password}
              onChange={handleChange}
            />

            <p className="text-xs italic text-red-500">{`${
              state.password !== state.confirm_password
                ? "Passwords do not match"
                : ""
            }`}</p>
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="location"
              name="location"
              type="text"
              placeholder="Enter City"
              value={state.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register Account
          </button>
        </div>
        <hr className="mb-6 border-t"/>
        {/* <div className="text-center">
                    <a
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="./index.html"
                    >
                        Already have an account? Login!
                    </a>
                </div> */}
      </form>
    </div>
  );
}

export default Modal;
