import React, { useContext, useEffect } from 'react'
import LeftDetails from './LeftDetails'
import RightDetails from './RightDetails'
import Textarea from './Textarea'
import Tweeks from './Tweeks'
import context from '../../Context/Context'
import {useParams} from 'react-router-dom'
import { SpinnerRoundFilled } from 'spinners-react'

function Detail() {
       let variableHashtag = ''
    const state = useContext(context)
    const {serviceID} = useParams()
    useEffect(() => {
        if (serviceID=='HOSPITAL BED _ ISOLATION BED') {
            variableHashtag = 'hospital'
            state.posts(variableHashtag)
            console.log('asda');
        }
        else if (serviceID=='MEDICINES'){
            variableHashtag = 'medicine'
            state.posts(variableHashtag) 
        }
        else if (serviceID=='AMBULANCE _ EMERGENCY HELP'){
            variableHashtag = 'ambulance'
            state.posts(variableHashtag) 
        }
        else if (serviceID=='VACCINATION _ COVID-19 TEST'){
            variableHashtag = 'vaccination'
            state.posts(variableHashtag) 
        }
        else if (serviceID=='VOLUNTEER & HELPING HANDS!'){
            variableHashtag = 'covid_19'
            state.posts(variableHashtag) 
        }
        else if (serviceID=='REQUEST BLOOD'){
            variableHashtag = 'bloodseeker'
            state.posts(variableHashtag) 
        }
        else{
            state.posts(serviceID)
        }
        // console.log(state.hashtag);
    }, []);

    return (
        <>
            <section className={`text-gray-600 body-font ${state.log===false?'':'hidden'}`}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/5">
                            <LeftDetails></LeftDetails>
                        </div>
                        <div className="p-4 lg:w-3/5">    
                        <Textarea></Textarea>                    
                        <SpinnerRoundFilled className="items-center mx-auto w-4"  enabled={state.postloading}/>
                            
                            {/* POSTS HERE */}
                            {state.mediaPosts.map((post) => {
                                return <Tweeks key={post.id} tweetID={post.twitter_id} text={post.text} hashtag={post.hashtag} time={post.created_at} />
                            })}

                        </div>
                        <div className="p-4 lg:w-1/5">
                            <RightDetails></RightDetails>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail
