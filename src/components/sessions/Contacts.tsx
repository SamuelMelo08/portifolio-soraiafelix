import ButtonsSession from "../elements/ButtonsSession"
import FormContatc from "../elements/FormContact"


export default function Contacts() {

    return (

        <div className="flex flex-col justify-center items-center py-10 px-5 gap-10 w-full" id="contacts">
            
            {/* titulo */}
            <div>

                <h1 className="text-[30px] font-medium">Contatos</h1>

            </div>

            <div className="flex w-full flex-col lg:flex-row gap-8 justify-center md:px-5 h-fit">

                <div className="flex flex-col gap-5 w-full rounded-xl shadow-md shadow-black/30 px-5 py-6">
                    
                    <h1 className="text-[24px] font-medium">
                        Envie uma mensagem:
                    </h1>

                    <FormContatc/>

                </div>

                {/* contatos (botões*/}
                <div className="flex flex-col gap-10 items-start w-full shadow-md rounded-xl shadow-black/30 py-6 px-5 px-5">

                    <h1 className="text-[24px] font-medium">
                        Acesse minhas redes sociais:
                    </h1>

                    <div className="flex justify-center items-center w-full">
                        <ButtonsSession/>
                    </div>

                </div>

            </div>

        </div>

    )

}