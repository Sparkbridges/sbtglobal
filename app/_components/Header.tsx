"use client";

import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Menu, X } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);

  return (
    <header className="relative">
      <Container>
        <nav className="flex text-primary w-full justify-between items-center p-4">
          <Logo />
          <div className="md:hidden" onClick={toggle}>
            {isOpen ? <X /> : <Menu />}
          </div>
          <Navigation />
          <MobileNavigation open={isOpen} toggle={toggle} />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
