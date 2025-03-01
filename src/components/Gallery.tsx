
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        ref={imageRef}
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted cursor-pointer transition-all duration-500 opacity-0 translate-y-10",
          isVisible && "opacity-100 translate-y-0"
        )}
        style={{ transitionDelay: `${index * 75}ms` }}
        onClick={openModal}
      >
        {/* Image loading skeleton */}
        <div
          className={cn(
            "absolute inset-0 lazy-image-loading",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
          )}
          onLoad={handleImageLoad}
        />
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Gallery: React.FC = () => {
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

  const images = [
    {
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1470&auto=format&fit=crop",
      alt: "Luxury villa living room",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1470&auto=format&fit=crop",
      alt: "Master bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1470&auto=format&fit=crop",
      alt: "Modern bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?q=80&w=1374&auto=format&fit=crop",
      alt: "Swimming pool view",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426bcf0c?q=80&w=1470&auto=format&fit=crop",
      alt: "Jacuzzi",
    },
    {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1470&auto=format&fit=crop",
      alt: "Kitchen area",
    },
    {
      src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1470&auto=format&fit=crop",
      alt: "Outdoor dining",
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop",
      alt: "Garden view",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div
          ref={titleRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Visual Tour
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Discover Our Beautiful Spaces
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a visual tour of our stunning property, showcasing the elegant
            rooms, refreshing swimming pool, relaxing jacuzzi, and other premium
            spaces designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
