import React, { useState,useContext } from 'react'
import Select from 'react-select'
import Context from '../../Context/Context';

function Volunteer() {
    const context = useContext(Context);
    let submit = ()=>{
        context.volunteer()
    }
    const [state, setstate] = useState('')
    let handleChange = (selection) => {
        setstate(selection.value);
    }
    const [city, setcity] = useState('')
    let handlecity = (selection) => {
        setcity(selection.value);
    }
    const [data, setdata] = useState({ name: "", email: "", mobile: '', message: "" ,})
    const handleName = evt => {
        setdata({ ...data, name: evt.target.value })
    }
    const handleEmail = evt => {
        setdata({ ...data, email: evt.target.value })
    }
    const handlemobile = evt => {
        console.log('111');
        setdata({ ...data, mobile: evt.target.value })
    }
    const handleMesssgae = evt => {
        setdata({ ...data, message: evt.target.value })
    }
    const cities = [
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hydrabad', label: 'Hydrabad' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Chennai', label: 'Chennai' },]
    const options = [
        { value: 'Plasma', label: 'Plasma' },
        { value: 'Blood', label: 'Blood' },
        { value: 'Test centers for Covid test', label: 'Test centers for Covid test' },
        { value: 'Hospitals', label: 'Hospitals' },
        { value: 'Oxygen', label: 'Oxygen' },
        { value: 'Medicins/Ambulance/Helpline', label: 'Medicins/Ambulance/Helpline' },
        { value: 'Volunteer/ Other / Vaccine centers', label: 'Volunteer/ Other / Vaccine centers' },
        { value: 'Helping Hands! Click to Support', label: 'Helping Hands! Click to Support' },
    ]
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Thankyou For Volunteering
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={handleName}
                                        value={data.name} />
                                </div>
                            </div>

                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={handleEmail}
                                        value={data.email} />

                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                        Phone mobile
                                    </label>
                                    <input
                                        type="number"
                                        id="mobile"
                                        name="mobile"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={handlemobile}
                                        value={data.mobile} />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                                        Select City
                                    </label>
                                    <Select options={cities} value={city} placeholder={city}
                                        onChange={handlecity} />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Select
                                    </label>
                                    <Select options={options} value={state} placeholder={state}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        onChange={handleMesssgae}
                                        value={data.message} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={submit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Volunteer
