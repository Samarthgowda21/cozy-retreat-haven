
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  imageUrl: string;
  features: string[];
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  name,
  description,
  price,
  capacity,
  size,
  imageUrl,
  features,
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
        "group relative bg-card rounded-lg overflow-hidden transition-all duration-500 opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden bg-muted">
        {/* Image loading skeleton */}
        <div
          className={cn(
            "absolute inset-0 lazy-image-loading",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <img
          src={imageUrl}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110",
            "group-hover:scale-105"
          )}
          onLoad={handleImageLoad}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-display font-medium">{name}</h3>
          <div className="flex items-baseline">
            <span className="text-xl font-medium">${price}</span>
            <span className="text-sm text-muted-foreground ml-1">/night</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
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
              className="text-muted-foreground mr-2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm">Up to {capacity} guests</span>
          </div>
          <div className="flex items-center">
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
              className="text-muted-foreground mr-2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M3 9h18"></path>
            </svg>
            <span className="text-sm">{size} m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={`#booking?room=${id}`}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Book Now
          </a>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">View details</span>
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
