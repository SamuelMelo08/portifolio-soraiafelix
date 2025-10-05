"use client"

import { PropsSession } from "@/types"
import CardService from "../elements/CardService"
import { useState } from "react"
import CardSession from "../elements/CardSession"


export default function Services ({id}: PropsSession) {
    

    return (

        <div className="w-full px-5 py-5 flex flex-col items-center justify-center bg-[#b69c77a9]" id={id}>
            
            {/* Title */}
            <div>
                
                <h1 className="text-white text-[30px] font-medium"> Serviços </h1>

            </div>

            {/*  */}
            <div className="w-full px-4 relative py-5 flex justify-center items-center">

                <CardSession/>

            </div>

        </div>

    )

}