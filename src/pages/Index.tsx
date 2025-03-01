
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import { cn } from "@/lib/utils";
import Contact from "@/components/Contact";

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
      name: "Royal Suite",
      description:
        "Spacious and elegant suite with a luxurious attached bathroom, perfect for couples or families.",
      price: 0,
      capacity: 3,
      size: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1470&auto=format&fit=crop",
      features: [
        "King Bed",
        "Attached Bathroom",
        "Smart TV",
        "Air Conditioning",
        "Premium Bedding",
      ],
    },
    {
      id: 2,
      name: "Garden View Suite",
      description:
        "Beautiful suite overlooking the garden with a stylish bathroom and modern amenities.",
      price: 0,
      capacity: 3,
      size: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1470&auto=format&fit=crop",
      features: [
        "Queen Bed",
        "Attached Bathroom",
        "Garden View",
        "Smart TV",
        "Air Conditioning",
      ],
    },
    {
      id: 3,
      name: "Pool View Suite",
      description:
        "Elegant suite with views of the swimming pool, featuring a modern bathroom and comfortable furnishings.",
      price: 0,
      capacity: 3,
      size: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop",
      features: [
        "Queen Bed",
        "Attached Bathroom",
        "Pool View",
        "Smart TV",
        "Air Conditioning",
      ],
    },
    {
      id: 4,
      name: "Sunset Suite",
      description:
        "Charming suite with beautiful sunset views, a luxurious bathroom, and all modern comforts.",
      price: 0,
      capacity: 3,
      size: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1374&auto=format&fit=crop",
      features: [
        "King Bed",
        "Attached Bathroom",
        "Scenic View",
        "Smart TV",
        "Air Conditioning",
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
              Four Identical Suites
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Luxurious Rooms with Private Bathrooms
            </h2>
            <p className="text-lg text-muted-foreground">
              SIHAYA offers four beautifully designed suites, each with an attached bathroom 
              and premium amenities for your comfort and relaxation.
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
      <Contact />
    </Layout>
  );
};

export default Index;
