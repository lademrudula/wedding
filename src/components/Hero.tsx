import React, { useState, useEffect } from 'react';
import { Heart, Home } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 20,
    minutes: 47,
    seconds: 50
  });

  // Wedding date - Change this to your actual wedding date
  const weddingDate = new Date('2025-09-27T10:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in-up">
          <Heart className="mx-auto mb-6 text-rose-300" size={48} />
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
            Pavan & Mrudula
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            <b>27 September 2025</b>
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-serif mb-6"><b>Hola..We are getting Engaged</b> </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
                </div>
                <div className="text-sm uppercase tracking-wide">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
                </div>
                <div className="text-sm uppercase tracking-wide">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
                </div>
                <div className="text-sm uppercase tracking-wide">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
                </div>
                <div className="text-sm uppercase tracking-wide">Seconds</div>
              </div>
            </div>
          </div>

          <p className="text-lg font-light opacity-90">
            Join us as we celebrate our love 
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
