
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-mvj-darkBlue to-mvj-darkBlue/90 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Skip the <span className="gradient-text">Lines</span>, <br />
              Enjoy Your <span className="gradient-text">Meal</span>
            </h1>
            <p className="text-lg text-gray-300 md:pr-10">
              Order food from MVJ College canteen 20 minutes before your break. 
              No more waiting in long lines or rushing to eat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mvj-red hover:bg-mvj-red/90 text-white">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <span>How It Works</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-mvj-darkBlue"
                  >
                    {index}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">Join 500+ students already using Canteen Eats Easy</p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4 text-mvj-darkBlue">Popular Right Now</h3>
              <div className="space-y-4">
                {[
                  {name: "Masala Dosa", price: "₹60", time: "5-10 min"},
                  {name: "Veg Fried Rice", price: "₹75", time: "10-15 min"},
                  {name: "Vada Pav", price: "₹35", time: "5 min"}
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.time} prep time</p>
                    </div>
                    <div className="text-lg font-bold text-mvj-orange">{item.price}</div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-mvj-orange hover:bg-mvj-orange/90 text-white">
                View Full Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
