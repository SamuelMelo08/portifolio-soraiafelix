import Image from "next/image"

export default function CardAbout() {

    return (

        <div className="w-full max-w-[600px] mx-auto mb-5 flex flex-col gap-5">

            <div className="flex flex-col justify-center items-center gap-2">
                
                <Image
                    src="/image01.webp"
                    alt="Soraia photo"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                
                <p className="text-[28px] text-center font-medium">Sobre mim</p>

            </div>

            <div className="px-5 md:px-10 text-center">

                <p className="text-[16px] md:text-[20px]">

                    Sou treinadora e mentora comportamental, mestre em 
                    Administração de Empresas e especialista em Gestão 
                    Empresarial e Customer Experience (CX). Formada como 
                    Master Coach, também atuo como docente em Pós-Graduação. 
                    Com mais de 25 anos de experiência em mentoria e 
                    desenvolvimento de equipes, minha missão é ajudar pessoas 
                    e negócios a alcançarem seu potencial, unindo consciência, 
                    estratégia e propósito.

                </p>
                
            </div>

        </div>


    )   

}