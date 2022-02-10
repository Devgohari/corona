import React, { useState, useContext, useEffect } from 'react'
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import Context from '../../Context/Context'
function RightDetails() {
 
    const { serviceID } = useParams()
    const state = useContext(Context)
    const [city, setcity] = useState('')
    const [servicetags, setservicetags] = useState([]);
    const [help, sethelp] = useState('')
    let arr = []
    // let sendData = (e) => {
    //     e.preventDefault()
    //     // colsole.log(servicetags);
    //     state.posts(help)
    // }
    // colsole.log(state.hashtag);
    useEffect(() => {
        state.hashtag.map((fulldata) => {
            // if (fulldata.service == serviceID.toUpperCase()) {
                // let hashtag = user.service.replaceAll("/", "_")
                if (fulldata.service.replaceAll("/", "_")==serviceID.toUpperCase()){
                    arr.push(fulldata.service_slug)
                    setservicetags(arr)
            }
          
        })

    }, []);
    // console.log(servicetags);
    // console.log(serviceID.toUpperCase());
    // console.log(serviceID);

    const cities = [
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hydrabad', label: 'Hydrabad' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Chennai', label: 'Chennai' },]
    const services = []
    const addservices = () => {
        servicetags.map((data) => {
            return services.push({ value: data, label: data })
        })
    }
    addservices()

    let handlecity = (selection) => {
        setcity(selection.value);
    }
    let handleservices = (selection) => {
        sethelp(selection.value);
        state.sethashtag(help)
        state.posts(selection.value)
    }

    return (

        <div className="flex border-2 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl  title-font font-medium mb-3">
                    <i>Hashtags</i> 
                </h2>
                <Select className='text-base mb-2 hidden' options={cities} value={city} placeholder={city === '' ? 'Select City' : city}
                    onChange={handlecity} />


                <Select name="colors" placeholder={help === '' ? 'Select Service' : help} value={help} options={services} className="basic-multi-select mb-2" classNamePrefix="select" onChange={handleservices} />



                {/* <button onClick={sendData} type='submit' className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 m-10">Sumbit</button> */}
            </div>
        </div>

    )
}

export default RightDetails
