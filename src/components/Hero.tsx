
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxStyle, setParallaxStyle] = useState({});

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setParallaxStyle({
        transform: `translate(${x * -20}px, ${y * -20}px)`,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 parallax-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          ...parallaxStyle
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl">
          <span 
            className={cn(
              "inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/10 backdrop-blur text-white border border-white/20 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "300ms" }}
          >
            Luxury Group Accommodation
          </span>
          
          <h1 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-6 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "500ms" }}
          >
            SIHAYA
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white/90 mb-8 max-w-2xl opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "700ms" }}
          >
            A stunning retreat perfect for groups of 8-12 people, featuring four elegant suites with attached bathrooms, a garden swimming pool, and an outdoor jacuzzi.
          </p>
          
          <div 
            className={cn(
              "flex flex-wrap gap-4 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "900ms" }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#rooms" 
              className="px-8 py-3 bg-white/10 backdrop-blur text-white font-medium rounded-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
