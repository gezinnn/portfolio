import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const navItems = ["Home", "Sobre Mim", "Projetos", "Contato"];
const socialIcons = [Github, Instagram, Linkedin];

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-black text-white rounded-2xl h-20 border-[5px] border-white">
      <div>
        <p>Geovanni Almeida</p>
      </div>
      <nav className="flex space-x-7" role="navigation">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-200"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex">
        {socialIcons.map((Icon, index) => (
          <Icon
            key={index}
            className="m-5 hover:text-gray-200 cursor-pointer hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            aria-label={Icon.name}
          />
        ))}
      </div>
    </header>
  );
}
