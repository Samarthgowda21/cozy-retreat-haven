
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  scrollY: number;
}

const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Book Now", href: "#booking", highlight: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollY > 10
          ? "bg-background/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-display font-semibold tracking-tight"
          >
            Serenity Villa
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors relative group",
                  link.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent"
                )}
              >
                {link.name}
                {!link.highlight && (
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <div className="relative w-6 h-5">
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  mobileMenuOpen
                    ? "rotate-45 translate-y-2.5"
                    : "translate-y-0"
                )}
              ></span>
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-4",
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-4"
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background flex flex-col pt-24 px-4 z-40 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "py-3 px-5 rounded-md text-lg font-medium transition-colors",
                link.highlight
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
