'use client';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';
import { PHONE_DISPLAY_PRIMARY, PHONE_PRIMARY } from '@/lib/constants';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function GeminiChatbot() {
  const { t, language, href: localHref } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const reducedMotion = useReducedMotion();
  const motionEnabled = animate && !reducedMotion;
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Ask about clinic hours, treatments, directions, or how to book a visit. Please leave personal and medical details out of the chat.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesRef = useRef(null);
  const launcherRef = useRef(null);
  const closeRef = useRef(null);

  // Predetermined question suggestions
  const suggestions = [
    "What services do you offer?",
    "How do I book an appointment?",
    "What are your clinic hours?",
    "Tell me about the doctor",
    "Do you treat chronic back pain?",
    "What is palliative care?"
  ];

  useEffect(() => {
    const list = messagesRef.current;
    if (list && messages.length > 1) list.scrollTop = list.scrollHeight;
  }, [isOpen, messages]);

  useEffect(() => {
    if (!isOpen) return;
    const launcher = launcherRef.current;
    closeRef.current?.focus({ preventScroll: true });
    function escape(event) {
      if (event.key === 'Escape') { setAnimate(false); setIsOpen(false); }
    }
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('keydown', escape);
      launcher?.focus({ preventScroll: true });
    };
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
        body: JSON.stringify({ message: messageText, language }),
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
        content: t('Chat is unavailable right now. Please call the clinic at {phone}.', { phone: PHONE_DISPLAY_PRIMARY })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        ref={launcherRef}
        aria-label={t("Chat with the clinic assistant")}
        aria-expanded={isOpen}
        aria-controls={isOpen ? 'clinic-chat-panel' : undefined}
        onClick={event => { setAnimate(event.detail > 0); setIsOpen(true); }}
        className="clinic-chat-trigger"
        hidden={isOpen}
      >
        <MessageCircle size={21} aria-hidden="true" />
        <span>{t("Chat")}</span>
      </Button>

      {/* Chat Window */}
      <AnimatePresence custom={motionEnabled}>
        {isOpen && (
          <motion.div
            id="clinic-chat-panel"
            initial={motionEnabled ? { opacity: 0, transform: 'translateY(12px) scale(.97)' } : false}
            animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
            exit="closed"
            variants={{ closed: enabled => ({ opacity: 0, transform: enabled ? 'translateY(8px) scale(.97)' : 'none', transition: { duration: enabled ? .15 : 0 } }) }}
            transition={{ duration: motionEnabled ? .22 : 0, ease: [.23, 1, .32, 1] }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed inset-x-3 bottom-3 z-50 ml-auto max-w-md sm:right-6"
          >
            <Card className="flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-3xl border-white/40 bg-white shadow-2xl">
              {/* Header */}
              <CardHeader className="shrink-0 bg-primary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">{t("Salem Pain Clinic")}</CardTitle>
                    <p className="text-xs text-white/80 mt-1">{t("Clinic information and appointments")}</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    ref={closeRef}
                    aria-label={t("Close chat")}
                    onClick={event => { setAnimate(event.detail > 0); setIsOpen(false); }}
                    className="size-11 shrink-0 rounded-full text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent ref={messagesRef} className="h-[350px] min-h-0 overflow-y-auto overscroll-contain p-4">
                <div className="space-y-4 pb-4" role="log" aria-label={t("Chat messages")}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={index > 0 && message.role === 'assistant' && !reducedMotion ? { opacity: 0 } : false}
                      animate={{ opacity: 1 }}
                      transition={{ duration: .16 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-3xl px-4 py-3 ${message.role === 'user'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-white/60 text-gray-900 border border-white/50 shadow-sm backdrop-blur-sm'
                          }`}
                      >
                        <p className="break-words text-sm whitespace-pre-wrap leading-relaxed">{index === 0 ? t(message.content) : message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Suggestion Chips */}
                  {showSuggestions && messages.length === 1 && (
                    <div className="flex flex-col space-y-2">
                      <p className="text-xs text-gray-500 font-medium px-1">{t("Quick questions:")}</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(t(suggestion))}
                            disabled={isLoading}
                            className="text-xs bg-white/60 border border-white/50 text-primary px-3 py-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                          >
                            {t(suggestion)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/60 border border-white/50 rounded-3xl px-4 py-3 flex items-center space-x-2 shadow-sm backdrop-blur-sm">
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span className="text-sm text-gray-600">{t("Thinking...")}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>

              {/* Input Footer */}
              <CardFooter className="border-t border-white/20 bg-white/40 backdrop-blur-md shrink-0 flex-col p-4 space-y-3">
                <form onSubmit={handleSend} className="flex w-full space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    aria-label={t("Chat message")}
                    maxLength={2000}
                    placeholder={t("Type your message...")}
                    className="min-w-0 flex-1 rounded-full border-white/50 bg-white/60 focus:bg-white focus:border-primary transition-colors duration-150"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    aria-label={t("Send message")}
                    size="icon"
                    disabled={!input.trim() || isLoading}
                    className="size-11 shrink-0 rounded-full shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center w-full">{t("Call")} <a href={`tel:${PHONE_PRIMARY}`} className="text-primary hover:underline font-semibold">{PHONE_DISPLAY_PRIMARY}</a> {t("or")} <Link href={localHref('/contact#consultation')} onClick={() => setIsOpen(false)} className="text-primary hover:underline font-semibold">{t("request a consultation")}</Link>.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
