
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div
          ref={contactRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Book Your Stay
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Ready for an Unforgettable Group Retreat?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to book your stay at SIHAYA. Perfect for family gatherings, 
            friend reunions, or corporate retreats for groups of 8-12 people.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className={cn(
              "bg-card rounded-lg p-8 shadow-sm transition-all duration-500 opacity-0 translate-y-10",
              isVisible && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "200ms" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Call Us</h3>
              <p className="text-center text-muted-foreground mb-4">
                Speak directly with our booking team
              </p>
              <p className="text-lg font-medium text-center">+1 (555) 123-4567</p>
            </div>
            
            <div className={cn(
              "bg-card rounded-lg p-8 shadow-sm transition-all duration-500 opacity-0 translate-y-10",
              isVisible && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "400ms" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Email Us</h3>
              <p className="text-center text-muted-foreground mb-4">
                Send us your booking inquiry
              </p>
              <p className="text-lg font-medium text-center">bookings@sihaya.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
