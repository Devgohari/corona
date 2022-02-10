import React from 'react'
function Card({More,icon}) {
    return (
        <>
            <div className="p-4 lg:w-1/3">
                <div className="bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <a href="">
                        <img src={icon} alt='' className="tracking-widest object-fill inline-flex items-center h-4/5 mb-1" /><br />
                        <p className="text-indigo-500 inline-flex items-center"> {More} 
                        </p>
                    </a>
                </div>
            </div>


        </>
    )
}

export default Card