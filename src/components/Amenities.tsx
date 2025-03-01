
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AmenityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  index: number;
}

const AmenityCard: React.FC<AmenityCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-card rounded-lg overflow-hidden transition-all duration-500 opacity-0 translate-y-10 h-full",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-muted">
        {/* Image loading skeleton */}
        <div
          className={cn(
            "absolute inset-0 lazy-image-loading",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <img
          src={imageUrl}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
          )}
          onLoad={handleImageLoad}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-20 pb-6 px-6">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Amenities: React.FC = () => {
  const amenities = [
    {
      title: "Swimming Pool",
      description:
        "Immerse yourself in our crystal-clear infinity pool overlooking breathtaking views.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M22 21.95c-4-.83-7-3.86-7-7.95 0-3.03 1.85-5.62 4.47-6.7"></path>
          <path d="M4 21.95c4-.83 7-3.86 7-7.95 0-3.03-1.85-5.62-4.47-6.7"></path>
          <path d="M19 5c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 2 3 2 3 5 0 .28-.06.54-.16.78"></path>
          <path d="M5 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 2-3 2-3 5 0 .28.06.54.16.78"></path>
          <path d="M12 15a5 5 0 0 0 5-5"></path>
          <path d="M12 15a5 5 0 0 1-5-5"></path>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Jacuzzi",
      description:
        "Relax and rejuvenate in our premium jacuzzi with therapeutic jets and temperature control.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M9 6v12h7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></path>
          <path d="M3 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path>
          <path d="M3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path>
          <path d="M3 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1584622650111-993a426bcf0c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Private Garden",
      description:
        "Enjoy the tranquility of our beautifully landscaped gardens with exotic flora.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M20.25 19h-16.5c-1.24 0-2.25-1.01-2.25-2.25v-1.5c0-1.24 1.01-2.25 2.25-2.25h16.5c1.24 0 2.25 1.01 2.25 2.25v1.5c0 1.24-1.01 2.25-2.25 2.25z"></path>
          <path d="M12 19v-9"></path>
          <path d="M9 3h6l-3 4.5-3-4.5z"></path>
          <path d="m9 12.5 3-4.5 3 4.5"></path>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop",
    },
    {
      title: "Gourmet Kitchen",
      description:
        "A fully equipped kitchen with premium appliances for preparing delicious meals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M3 7h3"></path>
          <path d="M3 11h3"></path>
          <path d="M3 15h3"></path>
          <path d="M6 7v12"></path>
          <circle cx="15" cy="12" r="3"></circle>
          <path d="M10 15.5v-7a4 4 0 0 1 8 0v7"></path>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Outdoor Dining",
      description:
        "Al fresco dining area with stunning views, perfect for memorable meals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2"></path>
          <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          <path d="M18 21a6 6 0 0 0-6-6h-3"></path>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Entertainment Room",
      description:
        "A dedicated space with state-of-the-art entertainment systems for your leisure.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <polyline points="17 2 12 7 7 2"></polyline>
        </svg>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="amenities" className="py-20">
      <div className="container px-4 mx-auto">
        <div
          ref={titleRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
            Exclusive Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Experience Luxury Beyond Imagination
          </h2>
          <p className="text-lg text-muted-foreground">
            Our villa features a range of premium amenities designed to make your
            stay unforgettable, from a stunning infinity pool to a rejuvenating
            jacuzzi and beautifully landscaped gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={index}
              title={amenity.title}
              description={amenity.description}
              icon={amenity.icon}
              imageUrl={amenity.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
