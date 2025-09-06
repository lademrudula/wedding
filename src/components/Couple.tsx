import React from 'react';
import { Heart, Camera, Music, Coffee, Mountain, Book, Palette, Plane, Laptop, Laptop2 } from 'lucide-react';
import mrudula from '../images/Mrudula.jpg'
import pavan from '../images/Pavan.jpg'

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
          

          {/* Groom Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden ">
              <img
                src={pavan}
                alt="Pavan Kumar Varanasi - The Groom"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                The Groom
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Pavan Kumar Varanasi </h3>
              <p className="text-slate-600 font-medium mb-6">Senior Embedded Software Engineer</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Pavan is a humble and passionate individual who combines dedication with vision.
                 A Senior Embedded Software Engineer at Robert Bosch and Founder of Matric Services, 
                 he is admired for his commitment and love for technology. 
                 His grounded personality and respect for values make him a true gentleman.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">About Pavan Kumar Varanasi</h4>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Laptop className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Techie</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Plane className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-gray-600">Travel Lover</span>
                  </div>
                
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">Hometown:</span> Visakhapatnam</p>
            
      
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bride Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src= {mrudula}
                alt=" Lade Mrudula - The Bride"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                The Bride
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2"> Lade Mrudula</h3>
              <p className="text-gray-900 font-medium mb-6">Software Engineer</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                 Mrudula is a graceful and talented young woman whose charm lies in her simplicity and strong values. 
                 A Software Engineer with Axis Bank, she beautifully balances her professional achievements with warmth and affection for her loved ones.
                  Her elegance and kind nature make her truly special.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">About Lade Mrudula</h4>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                 
                  <div className="flex items-center">
                    <Laptop2 className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Tech Savvy</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 text-rose-500 mr-2" />
                    <span className="text-gray-600">Music Lover</span>
                  </div>
                  
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">Hometown:</span> Hiramandalam</p>
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
               Mrudula captures life's beautiful moments while Pavan builds the foundation for their dreams. 
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
