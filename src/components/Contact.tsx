
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mvj-darkBlue mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-mvj-lightGray p-8 rounded-lg">
            <h3 className="text-xl font-bold text-mvj-darkBlue mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mvj-orange focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mvj-orange focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mvj-orange focus:border-transparent"
                ></textarea>
              </div>
              <Button className="w-full bg-mvj-red hover:bg-mvj-red/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-mvj-darkBlue text-white p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="text-mvj-orange mr-3 mt-1 shrink-0" />
                  <p>
                    MVJ College of Engineering, <br />
                    Near ITPL, Whitefield, <br />
                    Bangalore - 560067
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-mvj-orange mr-3 shrink-0" />
                  <p>+91 80 2845 2325</p>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-mvj-orange mr-3 shrink-0" />
                  <p>canteen@mvjce.edu.in</p>
                </div>
              </div>
            </div>
            
            <div className="bg-mvj-lightGray p-6 rounded-lg">
              <h3 className="text-lg font-bold text-mvj-darkBlue mb-4">Canteen Hours</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Clock size={18} className="text-mvj-orange mr-2 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Monday to Friday</p>
                    <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-mvj-orange mr-2 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-mvj-orange mr-2 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
