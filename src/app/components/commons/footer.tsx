import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-black border-t-1 bg-orange-primary">
      <div className="w-full mx-auto max-w-7xl flex justify-between items-center text-gray-primary font-readex py-7">
        <Link href="/">
          <Image src="/sos-logo.png" width={67} height={70} alt="SOS logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-7 uppercase font-bold">
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#oquefazemos"
                className="hover:text-orange-secondary"
              >
                O que fazemos
              </Link>
            </li>
            <li>
              <Link
                href="/#informacoes"
                className="hover:text-orange-secondary"
              >
                Informações
              </Link>
            </li>
            <li>
              <Link href="/#finalfeliz" className="hover:text-orange-secondary">
                Final Feliz
              </Link>
            </li>
            <li>
              <Link href="/doacao" className="hover:text-orange-secondary">
                Ajude a ajudar
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-orange-secondary">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link
              className="hover:text-orange-secondary"
              href="https://www.facebook.com/sos.vidaanimal"
            >
              <FaFacebookSquare size={30} />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-secondary"
              href="https://www.instagram.com/sosvidaanimallondrina/"
            >
              <FaInstagramSquare size={30} />
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-secondary" href="/">
              <FaEnvelope size={30} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center bg-orange-secondary py-2">
        <p className="font-light font-readex text-xs">
          Desenvolvido por{" "}
          <Link href="/" className="font-bold uppercase">
            ATS Web Solution
          </Link>{" "}
          | Copyright &copy; 2025. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
