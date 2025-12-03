'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function GeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m here to help you with information about Salem Pain Clinic. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  // Predetermined question suggestions
  const suggestions = [
    "What services do you offer?",
    "How do I book an appointment?",
    "What are your clinic hours?",
    "Tell me about Dr. Kirupakaran",
    "Do you treat chronic back pain?",
    "What is palliative care?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show proactive notification after 5 seconds if chat is not open
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide notification when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowNotification(false);
    }
  }, [isOpen]);

  const handleSuggestionClick = (suggestion) => {
    handleSend(null, suggestion);
  };

  const handleSend = async (e, suggestionText = null) => {
    e?.preventDefault();
    const messageText = suggestionText || input.trim();

    if (!messageText || isLoading) return;

    // Hide suggestions after first user message
    setShowSuggestions(false);
    setInput('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: messageText }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();

      // Check if we got a response (even if status is 500)
      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        throw new Error('No response received');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble responding right now. Please call us at +91 9095596999 or +91 9842798422 for immediate assistance. Our office hours are Monday-Saturday, 10:00 AM - 1:00 PM.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Proactive Notification */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border-2 border-primary/20 p-4"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Hi! Have questions?
                </p>
                <p className="text-xs text-gray-600">
                  Ask me about our pain management services, appointments, or Dr. Kirupakaran!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Trigger Button with Online Indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
          {/* Green Online Indicator */}
          {!isOpen && (
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
            </span>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md"
          >
            <Card className="border-white/40 shadow-2xl rounded-3xl overflow-hidden bg-white/85 backdrop-blur-xl">
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">Salem Pain Clinic</CardTitle>
                    <p className="text-xs text-white/80 mt-1">Ask me anything about our services</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-white/20 text-white rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-0">
                <ScrollArea className="h-[350px] p-4">
                  <div className="space-y-4 pb-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-3xl px-4 py-3 ${message.role === 'user'
                              ? 'bg-primary text-white shadow-md'
                              : 'bg-white/60 text-gray-900 border border-white/50 shadow-sm backdrop-blur-sm'
                            }`}
                        >
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Suggestion Chips */}
                    {showSuggestions && messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex flex-col space-y-2"
                      >
                        <p className="text-xs text-gray-500 font-medium px-1">Quick questions:</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((suggestion, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSuggestionClick(suggestion)}
                              disabled={isLoading}
                              className="text-xs bg-white/60 border border-white/50 text-primary px-3 py-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md backdrop-blur-sm"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/60 border border-white/50 rounded-3xl px-4 py-3 flex items-center space-x-2 shadow-sm backdrop-blur-sm">
                          <Loader2 className="w-4 h-4 animate-spin text-primary" />
                          <span className="text-sm text-gray-600">Thinking...</span>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Input Footer */}
              <CardFooter className="border-t border-white/20 bg-white/40 backdrop-blur-md flex-col p-4 space-y-3">
                <form onSubmit={handleSend} className="flex w-full space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border-white/50 bg-white/60 focus:bg-white focus:border-primary transition-all duration-300"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!input.trim() || isLoading}
                    className="rounded-full flex-shrink-0 w-10 h-10 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center w-full">
                  Or call: <a href="tel:+919095596999" className="text-primary hover:underline font-semibold">+91 9095596999</a>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
