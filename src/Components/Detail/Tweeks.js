import React from 'react'
import { ExternalLink } from 'react-external-link';
function Tweeks(props) {

    return (
        
        <div>
            <div className="flex border-2 mb-5 rounded-lg border-gray-400 border-opacity-50 p-8 pb-0 sm:flex-row flex-col">
                <div className="flex-grow">
                    <section>
                        <div className=" relative items-center w-full  mx-auto md:px-12 lg:px-10 max-w-7xl">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                                <div className="flex flex-col w-full max-w-lg mb-8 text-left lg:mx-auto">
                                    <a className="inline-flex items-center w-full mb-4">
                                        <span className="flex flex-col flex-grow pl-3">
                                            <h2 className=" text-xs font-semibold tracking-widest text-blue-600 uppercase">{props.hashtag} <span href="#" className="font-semibold text-gray-500 lg:mb-0">Acme's HR </span>
                                            </h2>
                                        </span>
                                    </a>
                                    <span className="inline-flex justify-start sm:mt-0">
                                    <span href="#" className="font-semibold text-gray-500 lg:mb-0">{props.time} </span>
                                        {/* <a className="text-blue-500 hover:text-neutral-600">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-blue-500 hover:text-neutral-600">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a> */}
                                    </span>

                                    <ExternalLink href={`https://twitter.com/i/web/status/${props.tweetID}`}>
                                    <p className="mx-auto cursor-pointer mt-6 text-xl leading-relaxed text-gray-500"> {props.text} </p>
                                    </ExternalLink>




                                </div>


                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Tweeks
