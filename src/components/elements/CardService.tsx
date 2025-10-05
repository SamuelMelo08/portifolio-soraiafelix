import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PropsCardService } from "@/types"
import { Button } from "../ui/button"

export default function CardService({ title, description }: PropsCardService) {
  return (
    <Card className="h-full flex flex-col justify-between">

      <div>

            <CardHeader>

            <CardTitle className="text-[18px] mb-2">{title}</CardTitle>

            </CardHeader>

            {/* Faz o conteúdo crescer pra empurrar o botão */}
            <CardContent className="flex-1">

            <p>{description}</p>
            
            </CardContent>

      </div>

      <CardFooter className="flex justify-center mt-auto">

        <Button variant="newButton" size="default" className="px-10">
          Acessar
        </Button>
        
      </CardFooter>
    </Card>
  )
}
