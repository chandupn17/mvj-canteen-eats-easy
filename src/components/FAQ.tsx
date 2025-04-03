
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How early should I place my order?",
    answer: "We recommend placing your order at least 20 minutes before your break time to ensure it's ready when you need it. This gives our kitchen staff enough time to prepare your meal fresh."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including credit/debit cards, UPI, and MVJ College meal cards. Cash payments are also accepted at the pickup counter."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "You can modify or cancel your order within 5 minutes of placing it. After that, your order goes into preparation and cannot be changed or cancelled."
  },
  {
    question: "How will I know when my order is ready?",
    answer: "You'll receive a notification on the app and an email alert when your order is ready for pickup. You can also check the status of your order in real-time on the app."
  },
  {
    question: "Is there a minimum order value?",
    answer: "No, there is no minimum order value. You can order as little or as much as you want from our canteen."
  },
  {
    question: "What if I'm late to pick up my order?",
    answer: "We'll keep your order for up to 30 minutes after the notification. After that, it may be given to someone else, and you'll need to place a new order."
  },
  {
    question: "Can I order for my friends too?",
    answer: "Yes, you can place orders for multiple people. Just add all the items you want to your cart and check out."
  },
  {
    question: "Are there vegetarian and non-vegetarian options?",
    answer: "Yes, we offer both vegetarian and non-vegetarian options. All items are clearly marked on the menu."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-mvj-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mvj-darkBlue mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions about ordering from MVJ Canteen? Find answers to common queries below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-mvj-darkBlue font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact us at{" "}
            <a href="mailto:canteen@mvjce.edu.in" className="text-mvj-red font-medium hover:underline">
              canteen@mvjce.edu.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
