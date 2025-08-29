import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full mt-14">
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
                <Link href="/">Mural de adoção</Link>
              </Button>
              <Button
                className="bg-orange-primary shadow-xl/20 flex text-2xl font-fredoka py-7 px-5"
                asChild
              >
                <Link href="/">Faça uma doação</Link>
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
      <div className="div-com-before w-full min-h-44 block"></div>
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
              <Link href="/">Feirinha de Adoção</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
