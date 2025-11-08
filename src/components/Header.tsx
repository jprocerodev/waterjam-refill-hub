import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Water Jam Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("#home")} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("#services")} className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("#about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("#gallery")} className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection("#contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
