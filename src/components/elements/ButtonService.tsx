import { Button } from "../ui/button"
import { Message } from "@/types";


export default function ButtonService({text}: Message) {
    const number = "+5585999688000"
    const link = `https://wa.me/${number}?text=${text}`;

    return (
        
        <Button variant={"newButton"} size={"default"} className="px-10"
            onClick={() => {window.open(link, "_blank")}}
        > 
            Acessar 
        </Button>

    )

}