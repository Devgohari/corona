import React, { useState, useContext } from "react";
import useAuth from "../../Context/useAuth";
import Context from "../../Context/Context";
import ForgetPassword from "./ForgetPassword";
import Alert from "../Alert/Alert";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useAuth();
  let state = useContext(Context);

  let changeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  let forgetPassHandler = (e) => {
    e.preventDefault();
    state.setforpass(true);
    console.log(state.forpass);
  };
  console.log(state.forpass);
  //   React.useEffect(() => {
  //     console.log(isLoggedIn,);
  // }, [isLoggedIn,])
  let changePass = (e) => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(position.coords.latitude)
    //   console.log(position.coords.longitude)
    // });
    const { value } = e.target;
    setPassword(value);
  };
  let close = () => {};
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-2  -translate-y-1/2 z-10 mt-2 w-2/5  mx-auto ">
        <div className='w-9/12' className={`${state.forpass == false ? "hidden" : ""}`}>
          <ForgetPassword />
        </div>
        <div
          className={`${
            state.isLoggedIn == true
              ? "hidden"
              : "" || state.forpass == true
              ? "hidden"
              : ""
          } border-slate-300 border-2 shadow-lg rounded-tr-3xl p-8 mx-auto bg-white`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              state.login(email, password);
            }}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg text-neutral-600">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  onChange={changeEmail}
                  value={email}
                  type="email"
                  autoComplete="email"
                  required=""
                  placeholder="Your Email"
                  className=" block w-full px-5 py-3 text-base text-neutral-600  placeholder-gray-300 transition duration-500 ease-in-out transform border border-slate-400 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
              {/* {(/.com$/.test(email)) !== true ? <Alert msg={' Please provide valid Email '} />:''} */}
            </div>
            {/* Password */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-neutral-600"
              >
                {" "}
                Password{" "}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  onChange={changePass}
                  value={password}
                  type="password"
                  autoComplete="current-password"
                  required=""
                  placeholder="Your Password"
                  className=" block w-full px-5 py-3 text-medium  text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-slate-400 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
              {/* {(password.length) <= 7 ? <Alert msg={' Please provide At least 8 characters '} /> : ''} */}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  placeholder="Your password"
                  className="w-4  h-4  text-blue-600  border-gray-200  rounded  focus:ring-blue-500
                      "
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-neutral-600"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  onClick={forgetPassHandler}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {" "}
                Sign in{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
