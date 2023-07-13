"use client";

import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-black z-10 shadow-sm border-b-0">
      <div className="py-2 border-b">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0 text-white">
            <Logo />
            <Menu />
            <MobileMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
