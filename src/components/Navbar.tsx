
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import MVJLogo from './MVJLogo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <MVJLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="nav-link active">Home</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Cart (0)</span>
            </Button>
            <Button className="bg-mvj-red hover:bg-mvj-red/90 text-white flex items-center gap-2">
              <User size={18} />
              <span>Login</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <nav className="flex flex-col px-4 py-2">
            <a href="#" className="nav-link py-3 border-b active">Home</a>
            <a href="#menu" className="nav-link py-3 border-b">Menu</a>
            <a href="#how-it-works" className="nav-link py-3 border-b">How It Works</a>
            <a href="#faq" className="nav-link py-3 border-b">FAQ</a>
            <a href="#contact" className="nav-link py-3 border-b">Contact</a>
            <div className="flex flex-col gap-2 py-3">
              <Button variant="outline" className="justify-center flex items-center gap-2">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </Button>
              <Button className="bg-mvj-red hover:bg-mvj-red/90 text-white justify-center flex items-center gap-2">
                <User size={18} />
                <span>Login</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
