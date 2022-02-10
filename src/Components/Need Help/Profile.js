import React from 'react'
import LookingForHelp from './LookingForHelp'
import WantToHelp from './WantToHelp'


function Profile() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <LookingForHelp />
                        <WantToHelp />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
