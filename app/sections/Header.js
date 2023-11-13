"use client";

import NavbarComponent from "@app/components/NavbarComponent";
import { LogoWhite, LogoDark } from '@app/assets';
import { useEffect } from "react";


const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      scrollFunction();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("stickyNavbar").style = "position:fixed; width: 100%; top:0; background: white; display:block; transition: 0.6s; z-index: 20;"
  } else {
    document.getElementById("stickyNavbar").style = "top:-100px; transition: 0.6s;";
  }
};

return (
<>
  <NavbarComponent
    headerStyles="bg-transparent"
    Logo={LogoWhite}
    btnStyles="border-white text-white hover:text-primary hover:bg-white"
    headerListColour="text-white"
    openMenuBtnColor="text-white"
  />

  <div aria-hidden="true">
    <NavbarComponent
      headerId="stickyNavbar"
      headerStyles="bg-white fixed w-full block top-[-100px] shadow"
      Logo={LogoDark}
      btnStyles="border-primary text-primary hover:text-white hover:bg-primary"
      headerListColour="text-text"
      openMenuBtnColor="text-black"
    />
  </div>
</>
)
}


export default Header