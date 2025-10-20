"use client"

import CardSession from "../elements/CardSession"


export default function Services () {
    

    return (

        <div className="bg-cream w-full px-5 py-10 flex flex-col items-center justify-center" id="services">
            
            {/* Title */}
            <div>
                
                <h1 className="text-[30px] font-medium"> Serviços </h1>

            </div>

            {/* Session */}
            <div className="w-full px-4 relative py-5 flex justify-center items-center">

                <CardSession/>

            </div>

        </div>

    )

}