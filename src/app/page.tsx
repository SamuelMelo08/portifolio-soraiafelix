import About from "@/components/sessions/About";
import Footer from "@/components/sessions/footer";
import Hero from "@/components/sessions/Hero";
import Services from "@/components/sessions/Services";

export default function Home() {

  return (

    <div className="scroll-smooth">

      <Hero/>

      <About/>
      
      <Services/>

      <Footer/>
      
    </div>

  )
}
