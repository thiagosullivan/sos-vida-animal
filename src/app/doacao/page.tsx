import Image from "next/image";
import { FaPix } from "react-icons/fa6";
import { RiBankLine } from "react-icons/ri";

const DonatePage = () => {
  return (
    <div className="w-full mx-auto max-w-7xl py-10 px-4 font-readex flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:h-[calc(100vh-276px)]">
      <div className="lg:block hidden max-w-[500px] w-full">
        <Image
          src="/dog-3.png"
          alt="Cachorro"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-center lg:items-end gap-10 max-w-[500px] mb-10">
        <h1 className="text-center lg:text-end text-5xl text-orange-secondary font-fredoka">
          Faça uma doação
        </h1>
        <div className="w-[200px] h-1.5 bg-gray-primary"></div>
        <p className="font-light text-center lg:text-end">
          Ajude-nos com uma contribuição. Todos os valores são bem-vindos.{" "}
          <span className="underline">
            A sua doação faz a diferença para a continuidade do projeto!
          </span>
        </p>
        <div className="flex flex-col items-start lg:items-start lg:flex-row lg:justify-between w-full gap-3">
          <div className="flex flex-col items-start lg:border-l-1 pb-4 lg:pl-4">
            <div className="flex items-center gap-2">
              <RiBankLine size={30} className="fill-orange-secondary" />
              <p>Transferência bancária:</p>
            </div>
            <div className="flex justify-start gap-4 border-t-1 mt-2 pt-2">
              <div>
                <p>
                  <strong>Itaú</strong>
                </p>
                <p>
                  <strong>Agência:</strong> 4019 | <strong>Conta:</strong>{" "}
                  07820-5
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start lg:border-l-1 lg:pl-4">
            <div className="flex items-center gap-2">
              <FaPix size={30} className="fill-orange-secondary" />
              <p>Pix:</p>
            </div>
            <div className="flex items-center justify-end gap-4 border-t-1 mt-2 pt-2">
              <div>
                <p>81.762.510/0001-06</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block max-w-[165px] w-full">
        <Image
          src="/dog-3.png"
          alt="Cachorro"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default DonatePage;
