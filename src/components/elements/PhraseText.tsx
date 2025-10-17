import BlurText from "../ui/BlurText";

export default function PhraseText() {

    return(
        <BlurText
            text="Ninguém é você, e esse é o seu poder!"
            delay={0.1}
            direction="top"
            className="text-[50px] font-medium text-center"
        />
    )
}