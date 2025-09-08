import React from 'react';
import { Heart } from 'lucide-react';


const OurStory = () => {
  return (
    <section id="story" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 mx-auto mb-4 text-rose-500" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-px bg-rose-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                How We Met
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It was a rainy Tuesday morning at the local coffee shop when Sarah accidentally 
                bumped into Michael, spilling coffee all over his laptop. What started as an 
                embarrassing moment turned into hours of conversation and laughter. Sometimes 
                the best things happen when you least expect them.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                The Proposal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Two years later, Michael took Sarah back to that same coffee shop. But this time, 
                he had something special planned. With the help of the baristas and surrounded by 
                fairy lights, he got down on one knee and asked the most important question of 
                his life. Of course, she said yes!
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                Our Future
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Now we're ready to start the next chapter of our journey together. We can't wait 
                to celebrate with all our loved ones and create new memories that will last a lifetime.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Couple"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Engagement"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Coffee shop"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Proposal"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;