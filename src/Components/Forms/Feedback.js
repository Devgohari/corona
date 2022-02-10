import React, { useContext, useState } from 'react'
import Context from '../../Context/Context';




function Feedback() {
    const state = useContext(Context);
    const [data, setdata] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    })
    const handleName = evt => {
        setdata({ ...data, name: evt.target.value })
    }
    const handleEmail = evt => {
        setdata({ ...data, email: evt.target.value })
    }
    const handleNumber = evt => {
        setdata({ ...data, number: evt.target.value })
    }
    const handleMesssgae = evt => {
        setdata({ ...data, message: evt.target.value })
    }
    const submit = () => {
        // console.log(data.name);
        // console.log(data.email);
        // console.log(data.number);
        // console.log(data.message);
        state.feedback(data.name, data.email, data.number, data.message)
        setdata({
            name: "",
            email: "",
            number: "",
            message: "",
        })
    }
    return (
        <section className={`text-gray-600 body-font relative ${state.log===false?'':'hidden'}`}>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Feedbacks
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Give feedbacks regarding Corona Help App
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/3">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleName} value={data.name}
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/3">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Phone Number
                                </label>
                                <input type="number" id="number" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleNumber} value={data.number}
                                />
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
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleEmail} value={data.email}
                                />
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
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleMesssgae} value={data.message}
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={submit}>
                                Button
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Feedback
