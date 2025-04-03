
import React, { useState } from 'react';
import MenuCard, { MenuItem } from './MenuCard';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling served with sambar and chutney",
    price: 60,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop",
    prepTime: "5-10 min",
    category: "South Indian",
    rating: 4.7,
    isVeg: true
  },
  {
    id: 2,
    name: "Veg Fried Rice",
    description: "Flavorful rice stir-fried with mixed vegetables and spices",
    price: 75,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=2080&auto=format&fit=crop",
    prepTime: "10-15 min",
    category: "Chinese",
    rating: 4.2,
    isVeg: true
  },
  {
    id: 3,
    name: "Vada Pav",
    description: "Spicy potato fritter in a bun with chutneys",
    price: 35,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2071&auto=format&fit=crop",
    prepTime: "5 min",
    category: "Snacks",
    rating: 4.5,
    isVeg: true
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich tomato and butter gravy",
    price: 120,
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=900&auto=format&fit=crop",
    prepTime: "15-20 min",
    category: "North Indian",
    rating: 4.8,
    isVeg: true
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Fragrant rice layered with spiced chicken and aromatic spices",
    price: 150,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop",
    prepTime: "20-25 min",
    category: "Main Course",
    rating: 4.9,
    isVeg: false
  },
  {
    id: 6,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 20,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    prepTime: "5 min",
    category: "Snacks",
    rating: 4.6,
    isVeg: true
  },
  {
    id: 7,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fried bread",
    price: 90,
    image: "https://images.unsplash.com/photo-1626132827108-7681ced30fca?q=80&w=2070&auto=format&fit=crop",
    prepTime: "15 min",
    category: "North Indian",
    rating: 4.7,
    isVeg: true
  },
  {
    id: 8,
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce",
    price: 80,
    image: "https://images.unsplash.com/photo-1634864572865-1c31e9cf4402?q=80&w=2034&auto=format&fit=crop",
    prepTime: "10-15 min",
    category: "Chinese",
    rating: 4.3,
    isVeg: true
  }
];

const categories = ["All", "South Indian", "North Indian", "Chinese", "Snacks", "Main Course"];

const MenuList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 bg-mvj-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mvj-darkBlue mb-4">Explore Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From delicious South Indian delicacies to mouthwatering Chinese cuisine, 
            we've got something for everyone at MVJ College Canteen.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for your favorite food..."
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-mvj-orange focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category 
                    ? "bg-mvj-orange hover:bg-mvj-orange/90 text-white" 
                    : "text-gray-700 hover:text-mvj-orange"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No menu items found</h3>
              <p className="text-gray-500 mt-2">Try a different search term or category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
