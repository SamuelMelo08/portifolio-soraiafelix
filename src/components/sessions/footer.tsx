import Image from "next/image"
import { fraunces } from "@/app/layout"

export default function Footer() {

    return(

        <div className="bg-[#B69C77] w-full flex flex-col justify-center items-center text-white gap-10 py-5" id="contacts">

            <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-10 py-10">
                {/* logo */}
                <div>

                    <Image
                        src={"/logo.png"}
                        alt="Logotipo"
                        width={300}
                        height={100}
                        className=""
                    
                    />

                </div>

                {/* links */}
                <div className="flex justify-center items-center">

                    <nav className="flex flex-col justify-center items-start text-[20px] ">

                        <a className="hover:text-[#e9d9c3]" href="#">Home</a>
                        <a className="hover:text-[#e9d9c3]" href="#about">Sobre</a>
                        <a className="hover:text-[#e9d9c3]" href="#services">Serviços</a>
                        <a className="hover:text-[#e9d9c3]" href="#contacts">Contatos</a>

                    </nav>

                </div>

                {/* contatos */}
                <div className="flex flex-col">

                    <h2 className="text-[24px] font-medium mb-5 text-center">Contatos:</h2>
                    
                    <div className="">

                        

                    </div>

                </div>

                {/* frase */}
                <div>
                    
                    <p className={`text-[32px] ${fraunces.className}`} > Ninguém é você, e<br></br>esse é o seu poder! </p>

                </div>

            </div>

            {/* copyright */}
            <div> ©2025 Soraia Felix. Todos os direitos reservados. </div>

        </div>
        
    )

}