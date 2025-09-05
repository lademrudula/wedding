import React from 'react';
import { Calendar, MapPin, Heart, BellRing as Ring } from 'lucide-react';

const Story = () => {
  const timeline = [
    {
      date: "13/August/2025",
      title: "First Meet",
      description: " Lade Mrudula and Pavan Kumar Varanasi met at a coffee shop in downtown Seattle. It was love at first sight over lattes and shared dreams.",
      icon: Heart,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      date: "August 2019",
      title: "First Date",
      description: "Their first official date was a hiking trip to Mount Rainier, where they discovered their shared love for adventure.",
      icon: MapPin,
      image: "https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    
    {
      date: "June 2023",
      title: "The Proposal",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend",
      icon: Ring,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      date: "27/September/2025",
      title: "Enagagement",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,",
      icon: Calendar,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's how our journey began and continues to unfold.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200 hidden md:block"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative mb-16 md:mb-24 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex">
                  <Icon className="text-white" size={20} />
                </div>

                <div className={`md:w-1/2 ${isEven ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex items-center mb-4 md:hidden">
                      <Icon className="text-rose-500 mr-3" size={20} />
                      <span className="text-rose-500 font-semibold">{item.date}</span>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-rose-500 font-semibold">{item.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <div className="bg-rose-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-serif italic text-gray-700 mb-4">
              "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
            </blockquote>
            <cite className="text-rose-500 font-medium">— Lao Tzu</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
