import React from 'react';
import { Calendar, Clock, MapPin, Music, Utensils } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Wedding Ceremony",
      date: "August 15, 2024",
      time: "4:00 PM",
      location: "Sunset Chapel, Santorini",
      address: "Oia, Santorini, Greece",
      description: "Join us as we exchange vows with the breathtaking Aegean Sea as our backdrop.",
      icon: Calendar,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Cocktail Hour",
      date: "August 15, 2024", 
      time: "5:30 PM",
      location: "Terrace Gardens",
      address: "Same venue as ceremony",
      description: "Sip signature cocktails and enjoy appetizers while mingling with family and friends.",
      icon: Music,
      image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Reception Dinner",
      date: "August 15, 2024",
      time: "7:00 PM",
      location: "Oceanview Pavilion",
      address: "Oia, Santorini, Greece",
      description: "Celebrate with us under the stars with dinner, dancing, and memories to last a lifetime.",
      icon: Utensils,
      image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calendar className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Wedding Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendars! Here's everything you need to know about our special day and the celebrations that surround it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-rose-500 text-white p-3 rounded-full">
                    <Icon size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-3 text-rose-500" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-3 text-rose-500" size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="mr-3 text-rose-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium">{event.location}</div>
                        <div className="text-sm">{event.address}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Important Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Dress Code</h4>
              <p className="text-gray-600 mb-4">
                Cocktail attire requested. The ceremony will be outdoors, so please consider comfortable footwear for walking on stone paths.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Transportation</h4>
              <p className="text-gray-600">
                Shuttle service will be provided from major hotels in Oia. Please indicate your accommodation when you RSVP.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Accommodations</h4>
              <p className="text-gray-600 mb-4">
                We have reserved room blocks at several hotels in Santorini. Please check our website for booking information and special rates.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Weather</h4>
              <p className="text-gray-600">
                August in Santorini is warm and sunny. Average temperature is 75°F. We'll have both indoor and outdoor spaces available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;