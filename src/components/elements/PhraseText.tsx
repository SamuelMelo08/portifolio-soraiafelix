import BlurText from "../ui/BlurText";

export default function PhraseText() {

    const handleAnimationComplete = () => {
    console.log('Animation completed!');
    };

    return(
        <BlurText
            text="Ninguém é você, e esse é o seu poder!"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[50px] font-medium"
        />
    )
}