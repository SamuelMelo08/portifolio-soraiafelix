import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardService from "@/components/elements/CardService"

const allServices = [
    { 
        
        title: "Mentoria de Carreira e Protagonismo Profissional", 
        description: "Acompanhamento individual ou em grupo com foco em autoconhecimento, clareza de objetivos, planejamento estratégico e desenvolvimento de competências."

    },
    { 
        
        title: "PDI – Plano de Desenvolvimento Individual", 
        description: "Construção de trilhas personalizadas para potencializar talentos e alinhar competências aos objetivos organizacionais"

    },
    { 
        
        title: "PDL – Programa de Desenvolvimento de Lideranças", 
        description: "Formação de líderes mais humanos, estratégicos e conscientes do seu papel na construção de times engajados e de alta performance."

    },
    { 
        
        title: "Treinamento de Competências Comportamentais (Soft Skills)", 
        description: " Comunicação assertiva, inteligência emocional, gestão do tempo, escuta ativa, empatia e colaboração."

    },
    { 
        
        title: "Mapeamento de Perfil Comportamental (DISC)", 
        description: " Aplicação de ferramenta com devolutiva individual ou em equipe, fortalecendo a comunicação, o autoconhecimento e a gestão de conflitos."

    },
    { 
        
        title: "Treinamento de Equipes de Atendimento e Vendas", 
        description: " Foco em encantamento do cliente, abordagem consultiva, fidelização, técnicas de persuasão, atendimento humanizado e foco em resultado."

    },
    { 
        
        title: "Capacitação para Alta Performance Comercial", 
        description: "Alinhamento de metas, desenvolvimento de habilidades comerciais, comportamento de vendas e estratégias de negociação."

    },
    { 
        
        title: "Trilhas de Desenvolvimento Corporativo", 
        description: "Construção de jornadas formativas sob medida, de acordo com o momento, cultura e metas da empresa."

    },
    { 
        
        title: "Facilitação de Workshops Temáticos e Palestras Estratégicas", 
        description: " Temas como: Liderança Consciente, Comunicação Eficaz, Gestão Emocional, Protagonismo Profissional, Mudança de Mindset, entre outros"

    },
    { 
        
        title: "Diagnóstico de Clima e Cultura Organizacional", 
        description: "Alinhamento de metas, desenvolvimento de habilidades comerciais, comportamento de vendas e estratégias de negociação."

    },
    { 
        
        title: "Capacitação para Alta Performance Comercial", 
        description: " Mapeamento de percepções, engajamento e alinhamento cultural para nortear ações de desenvolvimento"

    },
  ]

export default function CardSession() {
    const [services, setServices] = React.useState(allServices)

  return (
    <Carousel opts={{ align: "center" }} className="w-full max-w-5xl">

      <CarouselContent>

        {services.map((service, index) => (

          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">

            <div className="p-2 h-full">
              <CardService title={service.title} description={service.description} />
            </div>
            
          </CarouselItem>

        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-5 lg:ml-0"/>
      <CarouselNext className="mr-5 lg:mr-0 "/>
    </Carousel>
  )
}
