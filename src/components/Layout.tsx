
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navigation scrollY={scrollY} />
      <main>{children}</main>
      <footer className="border-t py-12 mt-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Serenity Villa</h3>
              <p className="text-muted-foreground text-sm">
                Experience luxury and comfort in our beautiful property located in the heart of nature.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#rooms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rooms</a></li>
                <li><a href="#amenities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a></li>
                <li><a href="#booking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">123 Serenity Lane</li>
                <li className="text-sm text-muted-foreground">Paradise City, PC 12345</li>
                <li className="text-sm text-muted-foreground">info@serenityvilla.com</li>
                <li className="text-sm text-muted-foreground">+1 (123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Serenity Villa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
