import React, { useState } from "react";
import Logo from '../Images/logo.png'
function LeftDetails() {
  let linksInfo = ["Hospitals", "Ngo", " Volunteer Group ", " Volunteers "];
  const [need, setneed] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");

  let handleage = (e) => setage(e.target.value);
  let handleaddress = (e) => setaddress(e.target.value);
  let handlecity = (e) => setcity(e.target.value);
  let sendData = (e) => {
    e.preventDefault();
    console.log([{ city, address, age }]);
  };
  return (
    <>
    <img src={Logo} className='h-52' alt="" />
      <div className="flex border-2 hidden rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
            Links / Info
            <hr />
          </h2>
          {linksInfo.map((way) => {
            return (
              <a
                className="no-underline block mb-2 divide-y divide-gray-10"
                key={way}
              >
                {way}
              </a>
            );
          })}
          <button
            onClick={sendData}
            type="submit"
            className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            Sumbit
          </button>
        </div>
      </div>
    </>
  );
}

export default LeftDetails;
