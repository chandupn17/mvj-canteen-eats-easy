
import React from 'react';
import { Clock, Utensils, Bell, Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Pre-Order",
    description: "Place your order at least 20 minutes before your break time",
    icon: Clock,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Food Preparation",
    description: "Our chefs prepare your food fresh, just in time for your break",
    icon: Utensils,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Ready Notification",
    description: "Receive a notification when your order is ready for pickup",
    icon: Bell,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    title: "Skip the Line",
    description: "Skip the queue and collect your order from the pickup counter",
    icon: Check,
    color: "bg-mvj-orange/20 text-mvj-orange"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mvj-darkBlue mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MVJ Canteen Eats Easy makes ordering food simple and convenient,
            saving you precious time during your short breaks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-mvj-darkBlue">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                <div className="mt-4 text-4xl font-bold text-gray-200">
                  {step.id}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-mvj-darkBlue rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Why Use MVJ Canteen Eats Easy?</h3>
              <ul className="space-y-3">
                {[
                  "Save time during short breaks",
                  "No more waiting in long queues",
                  "Pre-order your favorite meals",
                  "Fresh food prepared just in time",
                  "Easy tracking of your order status"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-mvj-orange mr-2 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-lg text-mvj-darkBlue mb-3">Typical Schedule</h4>
              <div className="space-y-3">
                {[
                  { time: "10:15 AM", action: "Place order for breakfast break" },
                  { time: "10:35 AM", action: "Get notification that order is ready" },
                  { time: "10:40 AM", action: "Collect food during break time" },
                  { time: "12:30 PM", action: "Place order for lunch break" },
                  { time: "12:50 PM", action: "Get notification that order is ready" },
                  { time: "1:00 PM", action: "Enjoy lunch with friends, no waiting!" }
                ].map((schedule, index) => (
                  <div key={index} className="flex">
                    <span className="text-mvj-orange font-medium w-24">{schedule.time}</span>
                    <span className="text-gray-600">{schedule.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
