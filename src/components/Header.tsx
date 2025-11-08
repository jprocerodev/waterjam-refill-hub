import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Water Jam Logo" className="h-14 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Water Jam</span>
              <span className="text-xs text-muted-foreground">Refilling Station</span>
            </div>
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button 
                onClick={() => handleNavClick("#home")} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-primary/10"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick("#services")} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-primary/10"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick("#about")} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-primary/10"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick("#gallery")} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-primary/10"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick("#contact")} 
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-primary/10"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
