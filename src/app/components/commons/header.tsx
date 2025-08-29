import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-7 border-black border-b-1 ">
      <div className="w-full mx-auto max-w-7xl flex justify-between items-center text-gray-primary font-readex">
        <Link href="/">
          <Image src="/sos-logo.png" width={67} height={70} alt="SOS logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-7 uppercase">
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                O que fazemos
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Informações
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Final Feliz
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Ajude a ajudar
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-secondary">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link
              className="hover:text-orange-secondary"
              href="https://facebook.com"
            >
              <FaFacebookSquare size={30} />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-secondary"
              href="https://instagram.com"
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
    </header>
  );
};

export default Header;
