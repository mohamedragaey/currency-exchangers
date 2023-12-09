"use client";
import Image from "next/image";
import React from "react";
import HeaderNavigation from "./header-navigation";

const Header: React.FC = () => {
  return (
    <header
      aria-labelledby="sticky header"
      className="flex items-center w-full justify-center flex-col md:flex-row sm:justify-between flex-wrap p-3 bg-white gap-4"
    >
      <a className="" href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/logo.png"
          alt="Currency exchanger Logo"
          className="dark:invert"
          width={70}
          height={24}
          priority
        />
      </a>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
