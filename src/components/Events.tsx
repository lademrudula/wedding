import React from 'react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';
import Engagementring from '../images/Engagement.png'

const Events = () => {
  const events = [
    {
      title: "Engagement Party",
      date: "Sept 27 2025",
      time: "10AM - 3PM",
      location: "Sri Krishnaveni Function Hall, Hiramandalam, Andhra Pradesh 532459",
      address: "",
      description:
        "We are delighted to share that the engagement of Mrudula & Pavan has been joyfully celebrated.
This beautiful occasion brought together two hearts and two families in a celebration filled with love, blessings, and togetherness. Surrounded by happiness and cherished moments, this marks the graceful beginning of their lifelong journey together.",
      icon: Music,
      image: { name: Engagementring }
    },
  ];

  return (
    <section id="events" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Calendar className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Events
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Mark your calendars! Here's everything you need to know about our special day and the celebrations that surround it.
          </p>
        </div>

        <div className="flex justify-center">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-full max-w-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image.name}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-3 text-rose-500 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-3 text-rose-500 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="mr-3 text-rose-500 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <div className="font-medium">
                          <a 
                            href="https://maps.app.goo.gl/JdgUnSBmvsZyS2626" 
                            target='_blank' 
                            className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base break-words"
                          >
                            {event.location}
                          </a>
                        </div>
                        <div className="text-sm">{event.address}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
