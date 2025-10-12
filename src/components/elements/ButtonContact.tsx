import { ReactNode } from "react"
import { Button } from "../ui/button";

interface PropsButton {

    icon: ReactNode;
    text: string;
    href: string;

}

export default function ButtonContact({icon, text, href}: PropsButton) {

    return (

        <a href={href} target="_blank">
            <Button variant={"newButton"} className="w-70 py-5">
                
                <span>{icon}</span>
                <span>{text}</span>

            </Button>
        </a>

    )

}