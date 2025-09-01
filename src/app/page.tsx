"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { reviews, work } from "../data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  console.log(work, "work");
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [searchParams]);

  return (
    <div className="h-full pt-6 lg:pt-14 bg-orange-primary">
      {/* Hero */}
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="font-fredoka text-6xl text-gray-primary text-center mb-14">
          Nós apoiamos a vida animal!
        </h2>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-10 font-readex xl:max-w-[730px] justify-between h-full">
            <p className="text-white text-3xl uppercase">
              Desde 1989, a SOS Vida Animal promove um trabalho para a
              comunidade de Londrina e região, mantido por voluntários que se
              dedicam à causa animal.
            </p>
            <div className="w-full max-w-[230px] h-1 bg-gray-primary" />
            <p className="text-[1.25rem] mb-10">
              Nós não acolhemos animais, e sim promovemos o bem-estar de cães e
              gatos, através de eventos para adoções e campanhas de
              conscientização.
            </p>
            <div className="flex gap-7">
              <Button
                className="bg-orange-secondary shadow-xl/20 flex text-2xl font-fredoka py-7 px-5"
                asChild
              >
                <Link href="https://www.instagram.com/sosvidaanimallondrina/">
                  Mural de adoção
                </Link>
              </Button>
              <Button
                className="bg-orange-primary shadow-xl/20 flex text-2xl font-fredoka py-7 px-5"
                asChild
              >
                <Link href="/doacao">Faça uma doação</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/dog-1.png"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full"
              alt="Cachorro"
            />
          </div>
        </div>
      </div>
      {/* Adoption */}
      <div className="vector-white w-full min-h-44 block"></div>
      <div className="bg-white py-10">
        <div className="w-full mx-auto max-w-7xl flex justify-around items-center gap-12">
          <div className="max-w-[350px] w-full">
            <Image
              src="/dog-2.png"
              alt="Cachorro"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h3 className="text-7xl text-orange-secondary">
              Me leva pra casa?
            </h3>
            <p className="font-readex text-gray-primary">
              As Feiras de Adoção de Cães e Gatos, promovidas pela SOS Vida
              Animal, são realizadas para que você encontre o seu novo melhor
              amigo.
            </p>
            <Button
              className="bg-orange-primary text-xl py-7 px-5 shadow-xl/20"
              asChild
            >
              <Link href="https://www.instagram.com/sosvidaanimallondrina/">
                Feirinha de Adoção
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Work */}
      <section id="oquefazemos">
        <div className="bg-orange-secondary py-24 text-white">
          <div className="w-full mx-auto max-w-7xl">
            <h2 className="text-6xl text-center uppercase mb-6">
              O que fazemos?
            </h2>
            <p className="text-sm font-readex text-center font-light mb-20">
              A OSCIP (Organização da Sociedade Civil de Interesse Público) SOS
              Vida Animal é uma organização da sociedade civil, de direito
              privado, sem fins lucrativos e de caráter associativo, registrada
              no CNPJ sob nº. 81.762.510/0001-06, com reconhecimento de
              utilidade pública Municipal pela Lei n. 4.697 de 31/05/1991 e
              Estadual pela Lei n. 12.580 de 08/06/1999. Atua desde 1989 em
              Londrina e região.
            </p>
            <div className="grid gap-8 grid-cols-4 justify-items-center mb-16">
              {work.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[300px] w-full border-l border-white-2 border-b flex justify-center items-center flex-col p-2.5"
                >
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={150}
                    height={150}
                    className="mb-2.5"
                  />
                  <p className="font-light font-readex pb-2.5">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Button className="bg-orange-primary text-2xl py-8 px-4" asChild>
                <Link href="/doacao">Faça uma doação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infos */}
      <section id="informacoes">
        <div className="bg-white">
          <div className="vector-orange w-full min-h-44 block"></div>
          <div className="w-full mx-auto max-w-7xl py-10">
            <h3 className="uppercase text-orange-primary text-7xl mb-7">
              Informações
            </h3>
            <p className="font-readex text-xl text-gray-primary mb-7">
              Descubra por onde começar e quais os primeiros cuidados.
            </p>
            <div className="flex justify-between items-center">
              <div className="max-w-[350px] w-full">
                <Image
                  src="/cat-1.png"
                  alt="Gato"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <ul className="flex flex-col gap-4 items-end">
                <li className="flex items-center">
                  Regras para levar seu animal em nossas feiras{" "}
                  <div className="bg-orange-secondary h-8 w-8 flex items-center justify-center rounded-sm ml-2">
                    <Image src="/paw.svg" width={25} height={25} alt="pata" />
                  </div>
                </li>
                <li className="flex items-center">
                  Veja os nossos vídeos{" "}
                  <div className="bg-orange-secondary h-8 w-8 flex items-center justify-center rounded-sm ml-2">
                    <Image src="/paw.svg" width={25} height={25} alt="pata" />
                  </div>
                </li>
                <li className="flex items-center">
                  Projeto controle de natalidade{" "}
                  <div className="bg-orange-secondary h-8 w-8 flex items-center justify-center rounded-sm ml-2">
                    <Image src="/paw.svg" width={25} height={25} alt="pata" />
                  </div>
                </li>
                <li className="flex items-center">
                  Nossa ONG não resgata animais{" "}
                  <div className="bg-orange-secondary h-8 w-8 flex items-center justify-center rounded-sm ml-2">
                    <Image src="/paw.svg" width={25} height={25} alt="pata" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="finalfeliz">
        <div className="bg-orange-primary py-14">
          <div className="w-full mx-auto max-w-7xl">
            <h3 className="text-gray-primary text-5xl text-center mb-7">
              Depoimentos
            </h3>
            <div className="max-w-2xl mx-auto">
              <Carousel>
                <CarouselContent className="-ml-1">
                  {reviews.map((item) => (
                    <CarouselItem
                      className="pl-3 md:basis-1/2 lg:basis-1/3"
                      key={item.id}
                    >
                      <div className="flex flex-col items-center gap-4 bg-white p-5 rounded-sm">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <p className="text-gray-primary font-bold border-b-1 border-orange-primary pb-2">
                          {item.name}
                        </p>
                        {/* <div className="h-[1px] w-full"></div> */}
                        <p className="font-readex font-light text-sm text-center">
                          {item.review}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
