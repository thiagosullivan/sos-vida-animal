"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleHashClick = (hash: string) => {
    setIsOpen(false);

    if (isHomePage) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(`/${hash}`);
    }
  };

  const handlePageClick = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { type: "page", href: "/", label: "Home" },
    { type: "hash", href: "#oquefazemos", label: "O que fazemos" },
    { type: "hash", href: "#informacoes", label: "Informações" },
    { type: "hash", href: "#finalfeliz", label: "Final feliz" },
    { type: "page", href: "/doacao", label: "Ajude a ajudar" },
    { type: "page", href: "/contato", label: "Contato" },
  ];

  return (
    <>
      <div className="flex justify-between py-4 px-2">
        <Link href="/">
          <Image src="/sos-logo.png" width={67} height={70} alt="SOS logo" />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded"
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-orange-primary shadow-xl z-50 lg:hidden animate-in slide-in-from-right-80">
            <div className="flex items-center justify-between p-4 border-b border-black">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-3 font-readex uppercase">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.type === "hash" ? (
                      <button
                        onClick={() => handleHashClick(item.href)}
                        className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors uppercase"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={handlePageClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-black">
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
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
