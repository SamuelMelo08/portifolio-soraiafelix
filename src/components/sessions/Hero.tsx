import Image from "next/image"
import { Button } from "../ui/button"

export default function() {
    

    return (

        <div className="w-full h-screen">

            <div className="flex flex-col gap-5 justify-center items-center w-full h-screen px-5 bg-[#fff8ed]">

                <div className="flex justify-center items-center">

                    <Image
                    src={"/image01.jpg"}
                    alt="Soraia photo"
                    width={190}
                    height={0}
                    className="rounded-full"
                    />

                </div>

                <div className="flex flex-col justify-center items-center">
                    
                    <div className="leading-9 text-center">

                        <h1 className="text-[40px] font-bold">
                            Soraia Felix
                        </h1>

                        <h2 className="text-[25px] font-medium">
                            Mentora comportamental
                        </h2>

                    </div>

                    <div className="text-center mt-5">

                        <span className="text-[18px] md:text-[20px] leading-5">
                            "Negócios não crescem sozinhos — <br></br> eles crescem com líderes que crescem"
                        </span>

                    </div>

                    <Button variant={"newButton"} size={"default"} className="mt-5"> Saiba mais </Button>

                </div>

            </div>

        </div>

    )

}