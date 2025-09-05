import React, { useState } from 'react';
import { Send, Heart, User, Users, Mail } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietary: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your RSVP! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 mx-auto mb-4 text-rose-500" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            RSVP
          </h2>
          <div className="w-24 h-px bg-rose-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're so excited to celebrate with you! Please let us know if you'll be joining us 
            by May 15th, 2025.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Users className="w-4 h-4" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              
              <div>
                <label className="text-gray-700 font-medium mb-2 block">
                  Will you attend? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      onChange={handleChange}
                      required
                      className="mr-2 text-rose-500 focus:ring-rose-500"
                    />
                    Joyfully accept
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      onChange={handleChange}
                      required
                      className="mr-2 text-rose-500 focus:ring-rose-500"
                    />
                    Regretfully decline
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-medium mb-2 block">
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                placeholder="Please let us know about any allergies or dietary needs"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium mb-2 block">
                Special Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                placeholder="Share your excitement or any special requests..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;