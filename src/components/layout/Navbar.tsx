import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-bg fixed top-0 left-0 right-0 z-50 py-4 px-6 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-light text-text-primary cursor-pointer">
            Dev<span className="text-terracotta">sera</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-text-primary hover:text-terracotta transition-colors duration-200 ${
                  location === link.href ? 'text-terracotta' : ''
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        
       
        
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-menu-trigger">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-warm-bg">
            <div className="flex flex-col space-y-6 mt-8">
              <div className="text-xl font-light text-text-primary mb-4">Menu</div>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block text-text-primary hover:text-terracotta transition-colors duration-200 ${
                      location === link.href ? 'text-terracotta' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
             
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
