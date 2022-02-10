import React, { useState, useContext } from 'react'
import context from '../../Context/Context'
function LookingForHelp() {
    let state = useContext(context)
    let waysToHelp = ['Plasma', 'Blood', 'Corona Vaccine Center / Medical Test', 'Hospital with Bed / Isolation', 'Oxygen', 'Medicines', 'Volunteer / Ambulance / Other Helplines']
    const [service, setservice] = useState('');
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('')
    const [message, setmessage] = useState('')
    const [address, setaddress] = useState('')
    const [age, setage] = useState('')
    let handleChange = e => {
        const { name, value } = e.target;
        setservice(value);
        console.log(service);
    };
    let handlename = (e) => setname(e.target.value)
    let handleage = (e) => setage(e.target.value)
    let handlemobile = (e) => setmobile(e.target.value)
    let handleemail = (e) => setemail(e.target.value)
    let handleaddress = (e) => setaddress(e.target.value)
    let handlecity = (e) => setcity(e.target.value)
    let handlemessage = (e) => setmessage(e.target.value)
    let sendData = (e) => {
        e.preventDefault()
        // console.log([{ service, name, email, mobile, age, address, city, message }]);
        state.helpseeker(service, name, email, mobile, age, address, city, message)
        setservice('');
        setname('')
        setemail('')
        setmobile('')
        setcity('')
        setmessage('')
        setaddress('')
        setage('')
    }
    return (
        <div className="p-2 lg:w-1/2 md:w-full" >
            <div className="flex border-2 rounded-lg border-gray-500 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-3xl title-font font-medium mb-3">
                        Are you searching for Help
                        <hr />
                    </h2>
                    <fieldset>
                        {
                            waysToHelp.map((way) => {
                                return (
                                    <div key={way} className="">
                                        <legend className="sr-only">Countries</legend>
                                        <div className="flex items-center mb-4">
                                            <input id={way} type="radio" onClick={handleChange} name={way} value={way} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-60dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                                checked={service === way}
                                                aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                                            <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">{way}
                                            </label>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </fieldset>
                    <form action="" method="get">
                        <div className="relative mb-4">

                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input value={name} onChange={handlename} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <label htmlFor="emial" className="leading-7 text-sm text-gray-600">Email</label>
                            <input value={email} onChange={handleemail} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile mobile</label>
                            <input value={mobile} onChange={handlemobile} type="mobile" id="mobile" name="mobile" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age</label>
                            <input value={age} onChange={handleage} type="mobile" id="Age" name="Age" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <input value={address} onChange={handleaddress} type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input value={city} onChange={handlecity} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea value={message} onChange={handlemessage} type="text" id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        <button onClick={sendData} type='submit' className="h-10 mt-2 px-5 text-indigo-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800">Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LookingForHelp
