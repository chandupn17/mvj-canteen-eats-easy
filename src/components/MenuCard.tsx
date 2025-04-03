
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Star } from 'lucide-react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  prepTime: string;
  category: string;
  rating: number;
  isVeg: boolean;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="menu-card group">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
          <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" />
          {item.rating}
        </div>
        <div className="absolute top-2 left-2 bg-white rounded-full p-1">
          <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-mvj-darkBlue">{item.name}</h3>
          <span className="font-bold text-mvj-orange">₹{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>{item.prepTime}</span>
        </div>
      </div>
      <div className="menu-card-actions">
        <Button className="w-full bg-mvj-red hover:bg-mvj-red/90 text-white">
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
