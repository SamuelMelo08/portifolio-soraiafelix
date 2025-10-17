"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome muito curto",
  }),
  message: z.string().min(10, {
    message: "A mensagem é muito curta"
  })
})

export default function FormContacts() {
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        
        const message = `Olá meu nome é ${values.name} e gostaria de falar sobre: ${values.message}`.trim()
        
        const whatsappNumber = "+5585999688000"
        const encodedMessage = encodeURIComponent(message)

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        window.open(whatsappUrl, "_blank")
            
    }

    return (

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:px-4">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (

                    <FormItem>
                        <FormLabel className="text-[16px]">Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (

                    <FormItem>
                        <FormLabel className="text-[16px]">Mensagem</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Digite aqui a mensagem" {...field} />
                        </FormControl>
                        <FormDescription>
                            Como eu posso te ajudar?
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <div className="flex justify-center">
                    <Button variant={"newButton"} type="submit" className="px-15">
                        Enviar
                    </Button>
                </div>
            </form>

        </Form>
    )
}