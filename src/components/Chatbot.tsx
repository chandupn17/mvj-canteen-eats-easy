
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, Send, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your MVJ Canteen assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simple responses for the demo
  const getBotResponse = (message: string): string => {
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('menu') || lowerCaseMessage.includes('food')) {
      return "You can check our full menu by clicking on the 'Menu' section. We have a variety of items including South Indian, North Indian, and Chinese cuisines.";
    } else if (lowerCaseMessage.includes('order') || lowerCaseMessage.includes('how to')) {
      return "To place an order, browse our menu, select the items you want, add them to cart, and then proceed to checkout. Make sure you're logged in!";
    } else if (lowerCaseMessage.includes('time') || lowerCaseMessage.includes('long') || lowerCaseMessage.includes('wait')) {
      return "Most orders are prepared within 15-20 minutes. You'll receive a notification when your order is ready for pickup.";
    } else if (lowerCaseMessage.includes('payment') || lowerCaseMessage.includes('pay')) {
      return "We accept various payment methods including cash, UPI, and credit/debit cards.";
    } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello there! How can I assist you with your canteen order today?";
    } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
      return "You're welcome! Feel free to ask if you need anything else.";
    } else {
      return "I'm not sure I understand. Could you please rephrase your question? You can ask about our menu, ordering process, or payment options.";
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 rounded-full size-14 p-0 shadow-lg bg-mvj-red hover:bg-mvj-red/90 text-white"
          aria-label="Open chatbot"
        >
          <Bot size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[400px] p-0 flex flex-col">
        <div className="bg-mvj-darkBlue text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-medium">MVJ Canteen Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setSheetOpen(false)}>
            <X size={18} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex items-start gap-2 max-w-[85%]",
                msg.isBot ? "" : "ml-auto flex-row-reverse"
              )}
            >
              <div className={cn(
                "rounded-full size-8 flex items-center justify-center flex-shrink-0",
                msg.isBot ? "bg-mvj-red text-white" : "bg-mvj-darkBlue text-white"
              )}>
                {msg.isBot ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={cn(
                "rounded-lg p-3",
                msg.isBot ? "bg-gray-100" : "bg-mvj-orange/90 text-white"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-mvj-red hover:bg-mvj-red/90" size="icon">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;
