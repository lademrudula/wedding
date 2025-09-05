import React from 'react';
import { Users, Crown, Flower } from 'lucide-react';

const People = () => {
  const brideParty = [
    {
      name: "Sarah Johnson",
      role: "Maid of Honor",
      description: "Emma's sister and best friend since childhood. Always there with love and laughter.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Lisa Chen",
      role: "Bridesmaid",
      description: "College roommate and partner in adventure. Known for her infectious smile and loyalty.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Amy Rodriguez", 
      role: "Bridesmaid",
      description: "Work colleague turned dear friend. Always brings wisdom and wonderful wine.",
      image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Grace Wilson",
      role: "Bridesmaid",
      description: "High school best friend who knows all of Emma's secrets and loves her anyway.",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const groomParty = [
    {
      name: "Michael Thompson",
      role: "Best Man", 
      description: "James's brother and lifelong best friend. The one who always has James's back.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "David Kim",
      role: "Groomsman",
      description: "College buddy and adventure companion. Known for his great sense of humor.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Ryan Mitchell",
      role: "Groomsman", 
      description: "Childhood friend and fellow architect. They've been building dreams together since age 8.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Alex Turner",
      role: "Groomsman",
      description: "Travel buddy and coffee enthusiast. Always ready for the next adventure.",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="people" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Wedding Party
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the amazing people who will be standing by our side on our special day. These are our dearest friends and family who have supported our love story from the beginning.
          </p>
        </div>

        {/* Bridesmaids */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Flower className="mr-3 text-rose-500" size={32} />
            <h3 className="text-3xl font-serif font-bold text-gray-900">Bridesmaids</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brideParty.map((person, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {person.role === "Maid of Honor" && (
                    <div className="absolute top-2 right-2 bg-rose-500 text-white p-2 rounded-full">
                      <Crown size={16} />
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{person.name}</h4>
                <div className="text-rose-500 font-medium mb-3">{person.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{person.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Groomsmen */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Crown className="mr-3 text-slate-600" size={32} />
            <h3 className="text-3xl font-serif font-bold text-gray-900">Groomsmen</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groomParty.map((person, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {person.role === "Best Man" && (
                    <div className="absolute top-2 right-2 bg-slate-600 text-white p-2 rounded-full">
                      <Crown size={16} />
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{person.name}</h4>
                <div className="text-slate-600 font-medium mb-3">{person.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{person.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Parents */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Our Families
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parents of the Bride</h4>
              <p className="text-gray-600">
                <strong>Robert & Linda Rose</strong><br />
                Thank you for raising the most wonderful daughter and for welcoming James into your family with open arms.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parents of the Groom</h4>
              <p className="text-gray-600">
                <strong>William & Patricia Alexander</strong><br />
                Thank you for raising such an amazing son and for embracing Emma as your own daughter from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;