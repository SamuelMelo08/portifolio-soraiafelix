import Image from "next/image"
import { Button } from "../ui/button"
import { WavyBackground } from "../ui/wavy-background"

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#fff8ed] shadow-[0_4px_15px_-1px_rgba(0,0,0,0.4)] overflow-hidden" id="#">
      
      {/* Ondas no fundo */}
      <div className="absolute inset-0 z-0">
        <WavyBackground className="opacity-80" />
      </div>

      {/* Conteúdo em cima */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-5">
        
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <Image
              src={"/image01.jpg"}
              alt="Soraia photo"
              width={190}
              height={190}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="leading-9 text-center">
              <h1 className="text-[40px] font-[550]">Soraia Felix</h1>
              <h2 className="text-[25px] font-medium">Mentora comportamental</h2>
            </div>

            <div className="text-center mt-5">
              <span className="text-[18px] md:text-[20px] leading-5">
                {`"Negócios não crescem sozinhos —`} <br />
                {`eles crescem com líderes que crescem"`}
              </span>
            </div>

            <Button variant={"newButton"} size={"default"} className="mt-5 px-10">
              <a href="#about">Saiba mais</a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
