import React from 'react';
import { Heart, Camera, Music, Coffee, Mountain, Book, Palette, Plane } from 'lucide-react';

const Couple = () => {
  return (
    <section id="couple" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Meet the Couple
          </h2>
          <div className="w-24 h-px bg-rose-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two hearts, one love story. Get to know the happy couple who are about to begin their forever journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bride Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt=" Lade Mrudula - The Bride"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                The Bride
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2"> Lade Mrudula Rose</h3>
              <p className="text-rose-500 font-medium mb-6">Software Engineer</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                 Lade Mrudula, born on 12th January 2001 in Ponduru, is a talented Software Engineer currently working with Axis Bank  
                as a Manager. She completed her B.Tech in Computer Science from IIIT Nuzvid. Standing 5’3” tall with a graceful personality, 
                she balances her professional success with strong family values.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">About  Lade Mrudula</h4>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Software Engineer</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center">
                    <Palette className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Art Lover</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Bookworm</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">Hometown:</span> Ponduru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Groom Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Pavan Kumar Varanasi - The Groom"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                The Groom
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Pavan Kumar Varanasi </h3>
              <p className="text-slate-600 font-medium mb-6">Senior Embedded Software Engineer at Robert Bosch, Bangalore, and Founder of Matric Services</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Pavan Kumar Varanasi, born on 25th January 1998 in Narasannapeta, is a Senior Embedded Software Engineer at Robert Bosch,
                Bangalore, and the Founder of Matric Services. With an M.Tech in Embedded Systems, he has built a successful career while 
                nurturing his entrepreneurial spirit. Standing 6'0” tall, he is known for his dedication, humility, and passion for technology. 
                He hails from a reputed family with strong values.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">About Pavan Kumar Varanasi</h4>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Mountain className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Hiking</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Guitar Player</span>
                  </div>
                  <div className="flex items-center">
                    <Plane className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Travel Lover</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Coffee Connoisseur</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">Hometown:</span> Narasannapeta</p>
            
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How They Complement Each Other */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <Heart className="mx-auto mb-4 text-rose-500" size={32} />
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Perfect Together
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
               Lade Mrudula captures life's beautiful moments while Pavan Kumar Varanasi builds the foundation for their dreams. 
              She brings creativity and spontaneity to his structured world, while he provides stability 
              and adventure to her artistic soul. Together, they create a perfect balance of passion, 
              creativity, and love.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Shared Loves:</span>
              <span className="bg-rose-100 px-3 py-1 rounded-full">Coffee</span>
              <span className="bg-rose-100 px-3 py-1 rounded-full">Travel</span>
              <span className="bg-rose-100 px-3 py-1 rounded-full">Sunsets</span>
              <span className="bg-rose-100 px-3 py-1 rounded-full">Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
