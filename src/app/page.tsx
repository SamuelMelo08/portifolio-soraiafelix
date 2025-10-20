"use client"

import FloatingButton from "@/components/elements/FloatingButton";
import About from "@/components/sessions/About";
import Contacts from "@/components/sessions/Contacts";
import Footer from "@/components/sessions/footer";
import Hero from "@/components/sessions/Hero";
import Phrase from "@/components/sessions/Phrase";
import Services from "@/components/sessions/Services";

export default function Home() {

  return (

    <div className="scroll-smooth">

      <FloatingButton/>
      
      <Hero/>
      
      <Phrase/>

      <About/>
      
      <Services/>

      <Contacts/>

      <Footer/>
      
    </div>

  )
}
