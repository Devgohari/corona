
import axios from "axios";
import React,{useContext,useState} from "react";
import Context from '../../Context/Context'
function ForgetPassword() {
  let match = false
    const [email, setemail] = useState('');
  const state = useContext(Context)
  const changeEmail = (e) => {
    setemail(e.target.value)
    console.log(e.target.value ,'is', email)
  };
  const goback = ()=>{
    state.setforpass(false)
  }
  const submitPass = async ()=>{
    // let response = await axios.get('http://35.166.220.82/apicaronahelp/public/api/getUsersData')
    if (email=='') {
      alert('Please provide a email first')
    }
    else{
      state.forgetPass(email)
    }
    setemail('')
  }
  return (
    <div className="relative z-10 mt-20 rounded-full ">
      <div
        className={`border-slate-400 border-2 shadow-lg rounded-xl p-8 w-4/5  mx-auto bg-white`}>
        {/* Email */}
        <div>
          <label 
          
            htmlFor="email"
            className="block text-xl font-medium text-neutral-900 "
          >
            {" "}
            E-mail id please!{" "}
          </label>
          <div className="mt-1">
            <input
             required={true}
              id="email"
              name="email"
              onChange={changeEmail}
              value={email}
              type="email"
              autoComplete="email"
              required=""
              placeholder="Your Email"
              className=" block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-slate-800 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
          {/* {(/.com$/.test(email)) !== true ? <Alert msg={' Please provide valid Email '} />:''} */}
        </div>
        <div className="mt-10">
          <button
            onClick={submitPass}
            className=" mt-3 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500 rounded-xl hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {" "}
            Submit{" "}
          </button>
          <button
            onClick={goback}
            className=" mt-3 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-sky-500 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {" "}
            Go Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
