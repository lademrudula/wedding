import React from 'react';
import { Calendar, Clock, MapPin, Camera, Music, Utensils } from 'lucide-react';

const WeddingDetails = () => {
  const timeline = [
    { time: '3:00 PM', event: 'Guest Arrival', icon: Clock },
    { time: '3:30 PM', event: 'Ceremony Begins', icon: Calendar },
    { time: '4:30 PM', event: 'Cocktail Hour', icon: Utensils },
    { time: '6:00 PM', event: 'Reception & Dinner', icon: Music },
    { time: '11:00 PM', event: 'Last Dance', icon: Music },
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-rose-500" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Wedding Details
          </h2>
          <div className="w-24 h-px bg-rose-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Venue Information */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-8">Venue & Location</h3>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <img
                src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Venue"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bella Vista Gardens</h4>
                    <p className="text-gray-600">1234 Vineyard Lane<br />Napa Valley, CA 94558</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-rose-500" />
                  <p className="text-gray-600">Outdoor ceremony with vineyard views</p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Getting There</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Parking is available on-site. For guests traveling from out of town, 
                we recommend staying at the Napa Valley Lodge (mention the 
                Henderson-Smith wedding for a special rate).
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-8">Wedding Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                        <IconComponent className="w-5 h-5 text-rose-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-semibold text-gray-800 text-lg">{item.time}</span>
                        <span className="text-gray-600">{item.event}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Dress Code</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Semi-formal attire requested. Think garden party chic! Ladies, consider 
                wearing block heels as we'll be on grass for the ceremony.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-gray-800">Suggested Colors</h5>
                  <p className="text-gray-600">Pastels, earth tones, navy</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Please Avoid</h5>
                  <p className="text-gray-600">White, ivory, black</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;