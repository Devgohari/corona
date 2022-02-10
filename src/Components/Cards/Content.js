import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import spinner from './Spinner.gif'
import Context from '../../Context/Context'
function Content() {
    const form = useContext(Context)
    const [state, setstate] = useState(null)
    const [loading, setloading] = useState('');
    let dataservices = ''
    let services = async () => {
        let response = await axios.get('http://35.166.220.82/apicaronahelp/public/api/getServices')
        dataservices = response.data.slice(0,8)
        setstate(dataservices)
        setloading('hidden')
        form.sethashtag(response.data)
        // colsole.log(response.data);
        // // colsole.log(response.data[0]);
        // // colsole.log(response.data[1]);

    }
    useEffect(() => {
        services();
        console.log(state);
    }, [form.log]);
    return (
        <section className={`text-gray-600 body-font ${form.log===false?'':'opacity-25'}`}>
            <h1 className='flex justify-center text-4xl'>SELECT RESOURCES
            </h1>
             <img className={`flex justify-center mx-auto ${loading}`} src={spinner} alt="" />
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    
                    {
                        state && state.map((user) => {
                            let More = user.service
                            let icon = user.image
                            let url = user.service.replaceAll("/", "_")
                            let hashtag = user.service_slug
                            // let hashtag = user.service_slug
                            return (<div key={user.id} className="p-4 h-2/5 lg:w-1/3">
                                <div className=" h-4/5 bg-gray-300  hover:bg-sky-200 bg-opacity-75 px-8 pt-10 pb-5 rounded-lg overflow-hidden text-center relative">
                                    <Link to={`/details/${url}`}>
                                        <img src={icon} alt='' className="tracking-widest inline-flex items-center h-40 mb-1" /><br />
                                        <p className="text-indigo-500 inline-flex items-center"> {More}
                                        </p>
                                        {/* <h1>{hashtag}</h1> */}
                                    </Link>
                                </div>
                            </div>)
                        })
                    }
                        

                </div>
            </div>
        </section>
    )
}

export default Content
