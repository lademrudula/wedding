import React from 'react';
import { Users, Crown, Flower } from 'lucide-react';

const People = () => {
  const brideParty = [
    {
      name: "Samba Murty",
      role: "Father",
      description: "A pillar of strength and wisdom, guiding the family with love and values.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Kusumamba",
      role: "Mother",
      description: "The nurturing soul of the family, spreading warmth and care in every step.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Sandeep", 
      role: "Brother in law",
      description: " A supportive and caring presence, blending seamlessly into the family with respect and warmth.",
      image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Srivani",
      role: "Sister",
      description: "A loving companion and source of joy, adding charm and laughter to every moment.",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
     {
      name: "Girish",
      role: "Brother",
      description: "The spirited and affectionate one, filling the family with energy and happiness.",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const groomParty = [
    {
      name: "Durga Rao",
      role: "Father", 
      description: "A guiding light with wisdom and strength, always supporting the family with love.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Bhagya Lakshmi",
      role: "Mother",
      description: "The heart of the home, nurturing with warmth, care, and endless affection.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Abhishek",
      role: "Brother in law", 
      description: " A supportive and respected member, adding strength and harmony to the bond.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Priyanka",
      role: "Sister",
      description: "A loving and cheerful presence, bringing joy and togetherness to the family.",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="people" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Enagagement Party
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the amazing people who will be standing by our side on our special day. These are our dearest friends and family who have supported our love story from the beginning.
          </p>
        </div>

        {/* Bridesmaids */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Flower className="mr-3 text-rose-500" size={32} />
            <h3 className="text-3xl font-serif font-bold text-gray-900">Bride's Family</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
            <h3 className="text-3xl font-serif font-bold text-gray-900">Groom's Family</h3>
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
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parents of the Groom</h4>
              <p className="text-gray-600">
                <strong>Durga Rao &  Bhagya Lakshmi</strong><br />
                Thank you for raising the most wonderful daughter and for welcoming Pavan Kumar Varanasi, into your family with open arms.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parents of the Bride</h4>
              <p className="text-gray-600">
                <strong>Samba Murty & Kusumamba</strong><br />
                Thank you for raising such an amazing son and for embracing Mrudula as your own daughter from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
