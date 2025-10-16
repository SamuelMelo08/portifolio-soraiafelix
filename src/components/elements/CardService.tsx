import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PropsCardService } from "@/types"
import ButtonService from "./ButtonService"

export default function CardService({ title, description, messsage }: PropsCardService) {

  return (
    <Card className="h-full flex flex-col justify-between hover:scale-102 transition-all">

      <div>

            <CardHeader>

              <CardTitle className="text-[18px] mb-2">{title}</CardTitle>

            </CardHeader>

            <CardContent className="flex-1">

              <p>{description}</p>
            
            </CardContent>

      </div>

      <CardFooter className="flex justify-center mt-auto">

        <ButtonService text={messsage}/>
        
      </CardFooter>

    </Card>
  )
}
