"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import MobileMenu from "./mobileHeader";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // É um hash link - scroll suave
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // É uma navegação normal
      router.push(href);
    }
    setOpen(false); // Fecha o menu manualmente
  };

  return (
    <div className="bg-orange-primary">
      {/* Desktop */}
      <div className="hidden lg:block">
        <header className="py-7 px-4 border-black border-b-1">
          <div className="w-full mx-auto max-w-7xl flex justify-between items-center text-gray-primary font-readex gap-12">
            <Link href="/">
              <Image
                src="/sos-logo.png"
                width={67}
                height={70}
                alt="SOS logo"
              />
            </Link>
            <nav>
              <ul className="flex items-center gap-7 uppercase font-bold text-center">
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
                  <Link
                    href="/#finalfeliz"
                    className="hover:text-orange-secondary"
                  >
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
        </header>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
