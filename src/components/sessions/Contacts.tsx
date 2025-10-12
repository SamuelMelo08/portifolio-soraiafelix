import ButtonsSession from "../elements/ButtonsSession"
import { Button } from "../ui/button"


export default function Contacts() {

    return (

        <div className="flex flex-col justify-center items-center py-10 px-5 gap-10">
            
            {/* titulo */}
            <div>

                <h1 className="text-[#B69C77] text-[30px] font-medium">Contatos</h1>

            </div>

            <div className="flex">

                {/* campos */}
                <div>
                    

                </div>

                {/* contatos (botões*/}
                <div>

                    <ButtonsSession/>

                </div>

            </div>

        </div>

    )

}