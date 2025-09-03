import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.svg";
const schoolLogo = "/lovable-uploads/e78ba727-7dd2-4649-a262-bd31d4c146c7.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/mission-vision" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact#contact" },
  ];

  return (
    <nav className="bg-[hsl(var(--navbar))] text-[hsl(var(--navbar-foreground))] shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4">
            <img src={schoolLogo} alt="One Love Academy" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="font-poppins font-bold text-lg text-background">One Love Academy</h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-poppins text-background hover:opacity-80 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20inquire%20about%20admission%20to%20One%20Love%20Academy" target="_blank" rel="noopener noreferrer">
              <Button variant="academy" size="sm" className="border-0">
                <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 bg-[hsl(var(--navbar))] border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-poppins text-background hover:opacity-80 transition-colors duration-300 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4">
                <a href="https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20inquire%20about%20admission%20to%20One%20Love%20Academy" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="academy" className="w-full border-0">
                    <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 mr-2 inline" />
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;