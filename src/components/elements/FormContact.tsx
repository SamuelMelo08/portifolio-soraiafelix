"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const onSubmit = () => {
    console.log("")
}

export default function FormContacts() {
  
    const form = useForm()

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