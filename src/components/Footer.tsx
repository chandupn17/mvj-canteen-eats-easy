
import React from 'react';
import MVJLogo from './MVJLogo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mvj-darkBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <MVJLogo className="text-white mb-4" />
            <p className="text-gray-300 mt-4">
              Skip the lines and order food from MVJ College canteen with ease.
              Save time during your breaks and enjoy freshly prepared meals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-mvj-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvj-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvj-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvj-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <p className="text-gray-300 mb-4">Get the MVJ Canteen Eats Easy app for a better experience</p>
            <div className="space-y-2">
              <a href="#" className="block bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-900 transition-colors">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9L9 7.5L17.5 9.5V19Z"></path><path d="M9 15L17.5 15"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-900 transition-colors">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L15 12L5 5V19Z"></path><path d="M15 5L19 12L15 19"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MVJ Canteen Eats Easy. All rights reserved.</p>
          <p className="mt-2">MVJ College of Engineering, Near ITPL, Whitefield, Bangalore - 560067</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
