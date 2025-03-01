
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      description:
        "Our spacious Deluxe Suite offers stunning views and premium amenities for a truly luxurious experience.",
      price: 299,
      capacity: 4,
      size: 65,
      imageUrl:
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1470&auto=format&fit=crop",
      features: [
        "King Bed",
        "Ocean View",
        "Private Balcony",
        "Mini Bar",
        "Smart TV",
        "Rainfall Shower",
      ],
    },
    {
      id: 2,
      name: "Premium Room",
      description:
        "A comfortable and elegant space with modern amenities and a cozy atmosphere for a perfect retreat.",
      price: 249,
      capacity: 2,
      size: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1470&auto=format&fit=crop",
      features: [
        "Queen Bed",
        "Garden View",
        "Work Desk",
        "Smart TV",
        "Coffee Machine",
      ],
    },
    {
      id: 3,
      name: "Garden View Room",
      description:
        "Immerse yourself in nature with our Garden View Room, offering tranquility and beautiful scenery.",
      price: 229,
      capacity: 2,
      size: 40,
      imageUrl:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop",
      features: [
        "Twin Beds",
        "Garden View",
        "Sitting Area",
        "Smart TV",
        "Coffee Machine",
      ],
    },
    {
      id: 4,
      name: "Executive Suite",
      description:
        "Our most exclusive offering with premium amenities, spacious living areas, and exceptional service.",
      price: 399,
      capacity: 6,
      size: 85,
      imageUrl:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1374&auto=format&fit=crop",
      features: [
        "King Bed",
        "Panoramic View",
        "Living Room",
        "Private Jacuzzi",
        "Dining Area",
        "Smart TV",
        "Premium Sound System",
      ],
    },
  ];

  return (
    <Layout>
      <Hero />

      <section id="rooms" className="py-20">
        <div className="container px-4 mx-auto">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10",
              isLoaded && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              Luxurious Accommodations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Exquisite Rooms for Your Perfect Stay
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our selection of four beautifully designed rooms, each 
              offering unique features and premium amenities for your comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} {...room} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Amenities />
      <Gallery />
      <Booking />
    </Layout>
  );
};

export default Index;
