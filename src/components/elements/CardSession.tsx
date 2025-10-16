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
    description: "Acompanhamento individual ou em grupo com foco em autoconhecimento, clareza de objetivos, planejamento estratégico e desenvolvimento de competências.",
    message: "Oi! Vi sua mentoria de carreira e fiquei interessado, pode me contar um pouco mais?"
  },
  { 
    title: "PDI – Plano de Desenvolvimento Individual", 
    description: "Construção de trilhas personalizadas para potencializar talentos e alinhar competências aos objetivos organizacionais",
    message: "Oi! Queria saber um pouco mais sobre o PDI, pode me explicar como funciona?"
  },
  { 
    title: "PDL – Programa de Desenvolvimento de Lideranças", 
    description: "Formação de líderes mais humanos, estratégicos e conscientes do seu papel na construção de times engajados e de alta performance.",
    message: "Oi! Vi o programa de desenvolvimento de lideranças e queria saber mais detalhes."
  },
  { 
    title: "Treinamento de Competências Comportamentais (Soft Skills)", 
    description: "Comunicação assertiva, inteligência emocional, gestão do tempo, escuta ativa, empatia e colaboração.",
    message: "Oi! Queria saber mais sobre o treinamento de soft skills, pode me explicar rapidinho?"
  },
  { 
    title: "Mapeamento de Perfil Comportamental (DISC)", 
    description: "Aplicação de ferramenta com devolutiva individual ou em equipe, fortalecendo a comunicação, o autoconhecimento e a gestão de conflitos.",
    message: "Oi! Vi o mapeamento comportamental DISC e fiquei curioso, pode me contar mais?"
  },
  { 
    title: "Treinamento de Equipes de Atendimento e Vendas", 
    description: "Foco em encantamento do cliente, abordagem consultiva, fidelização, técnicas de persuasão, atendimento humanizado e foco em resultado.",
    message: "Oi! Queria saber mais sobre o treinamento de atendimento e vendas."
  },
  { 
    title: "Capacitação para Alta Performance Comercial", 
    description: "Alinhamento de metas, desenvolvimento de habilidades comerciais, comportamento de vendas e estratégias de negociação.",
    message: "Oi! Pode me explicar um pouco sobre a capacitação de alta performance comercial?"
  },
  { 
    title: "Trilhas de Desenvolvimento Corporativo", 
    description: "Construção de jornadas formativas sob medida, de acordo com o momento, cultura e metas da empresa.",
    message: "Oi! Queria entender melhor como funcionam as trilhas de desenvolvimento corporativo."
  },
  { 
    title: "Facilitação de Workshops Temáticos e Palestras Estratégicas", 
    description: "Temas como: Liderança Consciente, Comunicação Eficaz, Gestão Emocional, Protagonismo Profissional, Mudança de Mindset, entre outros.",
    message: "Oi! Vi que vocês fazem workshops e palestras, pode me contar um pouco mais?"
  },
  { 
    title: "Diagnóstico de Clima e Cultura Organizacional", 
    description: "Mapeamento de percepções, engajamento e alinhamento cultural para nortear ações de desenvolvimento.",
    message: "Oi! Queria entender melhor como funciona o diagnóstico de clima e cultura."
  },
  { 
    title: "Capacitação para Alta Performance Comercial", 
    description: "Mapeamento de percepções, engajamento e alinhamento cultural para nortear ações de desenvolvimento.",
    message: "Oi! Vi a capacitação de alta performance comercial e queria saber mais detalhes."
  },
  
];


export default function CardSession() {
    const [services, setServices] = React.useState(allServices)

  return (

    <Carousel opts={{ align: "center" }} className="w-full max-w-5xl">

      <CarouselContent>

        {services.map((service, index) => (

          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">

            <div className="p-2 h-full">
              <CardService title={service.title} description={service.description} messsage={service.message} />
            </div>
            
          </CarouselItem>

        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-5 lg:ml-0 border-none shadow-md shadow-black/40 hover:scale-106 transition-all"/>
      <CarouselNext className="mr-5 lg:mr-0 border-none shadow-md shadow-black/40 hover:scale-104 transition-all"/>
    </Carousel>
    
  )
}
