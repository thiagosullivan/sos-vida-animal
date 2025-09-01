"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome precisa ter pelo menos 3 letras.",
  }),
  email: z.email({
    message: "O email precisa ser válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem não pode estar vazia.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full mx-auto max-w-7xl py-10 px-4 font-readex flex justify-between items-center h-[calc(100vh-276px)]">
      <div className="flex flex-col gap-6 max-w-[420px]">
        <h1 className="text-5xl text-orange-secondary font-fredoka">
          Entre em contato
        </h1>
        <div className="w-[200px] h-1.5 bg-gray-primary"></div>
        <p className="font-light">
          Você pode entrar em contato da maneira que preferir. <br />{" "}
          Responderemos o mais rápido possível!
        </p>
        <div className="flex flex-col gap-2 my-2.5">
          <div className="flex items-center gap-3">
            <FaEnvelope size={30} className="fill-orange-secondary" />
            <p>contato@sosvidaanimal.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone size={30} className="fill-orange-secondary" />
            <p>(43) 99999-8888</p>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem aqui"
                        {...field}
                        className="resize-none min-h-24"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-orange-primary px-10 py-5 cursor-pointer"
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="max-w-[470px] w-full">
        <Image
          src="/cat-2.png"
          alt="Gato"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default ContactPage;
