
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const Booking: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle URL params for room selection
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("?room=")) {
      const roomId = hash.split("?room=")[1];
      setSelectedRoom(roomId);
    }
  }, []);

  const rooms = [
    { id: "1", name: "Deluxe Suite" },
    { id: "2", name: "Premium Room" },
    { id: "3", name: "Garden View Room" },
    { id: "4", name: "Executive Suite" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setCheckIn("");
        setCheckOut("");
        setAdults(2);
        setChildren(0);
        setSelectedRoom("");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20">
      <div className="container px-4 mx-auto">
        <div
          ref={formRef}
          className={cn(
            "max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-700 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-10 bg-primary text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Book Your Perfect Stay
              </h2>
              <p className="mb-6">
                Experience the perfect getaway at our luxury villa. Book your stay now and create unforgettable memories.
              </p>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-primary-foreground/80">
                      123 Serenity Lane, Paradise City, PC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M9 13h6"></path>
                      <path d="M9 17h3"></path>
                      <path d="M9 9h1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Policy</h3>
                    <p className="text-primary-foreground/80">
                      Free cancellation up to 48 hours before check-in. Check-in: 3:00 PM, Check-out: 11:00 AM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Contact</h3>
                    <p className="text-primary-foreground/80">
                      info@serenityvilla.com<br />+1 (123) 456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-10">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                      className="text-green-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Booking Successful!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for booking with us. We've sent a confirmation email with all the details.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => setIsSuccess(false)}
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-medium mb-6">Reservation Details</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="block text-sm font-medium mb-1"
                        >
                          Check In
                        </label>
                        <input
                          type="date"
                          id="checkIn"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="block text-sm font-medium mb-1"
                        >
                          Check Out
                        </label>
                        <input
                          type="date"
                          id="checkOut"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="adults"
                          className="block text-sm font-medium mb-1"
                        >
                          Adults
                        </label>
                        <select
                          id="adults"
                          value={adults}
                          onChange={(e) => setAdults(Number(e.target.value))}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="children"
                          className="block text-sm font-medium mb-1"
                        >
                          Children
                        </label>
                        <select
                          id="children"
                          value={children}
                          onChange={(e) => setChildren(Number(e.target.value))}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {[0, 1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Child" : "Children"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="room"
                        className="block text-sm font-medium mb-1"
                      >
                        Select Room
                      </label>
                      <select
                        id="room"
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select a room</option>
                        {rooms.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className={cn(
                        "w-full py-3 rounded-md font-medium transition-colors",
                        isSubmitting
                          ? "bg-primary/80 text-primary-foreground cursor-not-allowed"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Book Now"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
