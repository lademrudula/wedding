import React from 'react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "The Reception",
      date: "Nov 25 2017",
      time: "9AM - 5PM",
      location: "32 big bro road, Chanpai, London.",
      address: "Oia, Santorini, Greece",
      description:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      icon: Calendar,
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      title: "Wedding Party",
      date: "Nov 25 2017",
      time: "9AM - 5PM",
      location: "32 big bro road, Chanpai, London.",
      address: "Same venue as ceremony",
      description:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      icon: Music,
      image:
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
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
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
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
      </div>
    </section>
  );
};

export default Events;
