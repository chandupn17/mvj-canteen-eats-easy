
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Management = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user is logged in and is a staff member
    const userTypeFromStorage = localStorage.getItem('userType');
    setUserType(userTypeFromStorage);
    
    if (userTypeFromStorage !== 'staff') {
      toast.error("Access denied. Staff login required.");
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('userInfo');
    toast.success("Logged out successfully");
    navigate('/login');
  };

  if (userType !== 'staff') {
    return null; // Don't render anything if not a staff member
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-mvj-darkBlue">Canteen Management Dashboard</h1>
          <Button onClick={handleLogout} variant="outline" className="text-mvj-red">
            Logout
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Active Orders</h2>
            <div className="text-3xl font-bold text-mvj-orange">12</div>
            <p className="text-gray-600 mt-2">Orders waiting to be prepared</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Today's Orders</h2>
            <div className="text-3xl font-bold text-mvj-red">47</div>
            <p className="text-gray-600 mt-2">Total orders placed today</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Revenue</h2>
            <div className="text-3xl font-bold text-green-600">₹4,325</div>
            <p className="text-gray-600 mt-2">Total earnings today</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Items</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#ORD1234</td>
                  <td className="py-3 px-4">Rajesh Kumar</td>
                  <td className="py-3 px-4">Masala Dosa, Coffee</td>
                  <td className="py-3 px-4">₹120</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Preparing</span>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 mr-2">Complete</Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#ORD1233</td>
                  <td className="py-3 px-4">Priya Singh</td>
                  <td className="py-3 px-4">Veg Pulao, Mango Lassi</td>
                  <td className="py-3 px-4">₹150</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">New</span>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" className="bg-mvj-orange hover:bg-mvj-orange/90 mr-2">Accept</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Management;
