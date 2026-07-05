import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';
import { Language, Message } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface ChatWidgetProps {
  currentLang: Language;
}

export default function ChatWidget({ currentLang }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  // Initialize with localized welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'agent',
        text: t.chatWelcome,
        timestamp: new Date(),
      },
    ]);
  }, [currentLang]);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnreadCount(0);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender: 'user',
      text: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Trigger typing state for simulated reply
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      // Generate context-appropriate localized advisor answer
      let replyText = '';
      if (currentLang === 'fr') {
        replyText = "Merci beaucoup pour votre message. Un conseiller Orienta Fohew Wheida spécialisé est en train d'analyser votre demande. Pour vous répondre directement par écrit, pouvez-vous nous laisser votre numéro de téléphone (ou WhatsApp) ainsi que votre prénom ?";
      } else if (currentLang === 'de') {
        replyText = "Vielen Dank für Ihre Nachricht. Ein Orienta Fohew Wheida-Berater analysiert derzeit Ihre Anfrage. Damit wir Ihnen direkt antworten können, hinterlassen Sie uns bitte Ihre WhatsApp-Nummer oder E-Mail-Adresse.";
      } else {
        replyText = "Thank you very much for your message. A dedicated Orienta Fohew Wheida advisor is currently reviewing your inquiry. To receive a direct reply, please leave us your WhatsApp number or email address.";
      }

      const agentMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: 'agent',
        text: replyText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMsg]);
      
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chat-widget-root">
      
      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="w-[320px] sm:w-[360px] h-[450px] bg-white rounded-3xl shadow-2xl border border-stone-200/40 flex flex-col overflow-hidden mb-4"
            id="chat-window"
          >
            {/* Header */}
            <div className="p-4 bg-sky-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide">
                    {t.chatHeader}
                  </h4>
                  <span className="text-[9px] text-sky-100 font-mono">Advisor Online</span>
                </div>
              </div>
              <button
                onClick={handleToggle}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Message Thread Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-sky-50/20" id="chat-messages-scroll">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                        isUser
                          ? 'bg-sky-600 text-white rounded-tr-none shadow-sm'
                          : 'bg-white text-stone-800 rounded-tl-none border border-stone-200/40 shadow-xs'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className={`block text-[8px] mt-1 text-right ${isUser ? 'text-sky-200' : 'text-stone-400'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing simulation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-200/40 shadow-xs">
                    <div className="flex space-x-1.5 items-center h-4 px-1">
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-100 flex items-center space-x-2">
              <input
                type="text"
                placeholder={t.chatPlaceholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow px-3 py-2 bg-stone-50 border border-stone-100 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
              <button
                type="submit"
                className="p-2 bg-sky-600 text-white rounded-xl hover:scale-105 transition-transform"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Bubble Icon */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-4 bg-sky-600 text-white rounded-full shadow-2xl hover:shadow-3xl z-40 focus:outline-none flex items-center justify-center border border-white/10"
        id="chat-toggle-btn"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

        {/* Unread dot notifications */}
        <AnimatePresence>
          {!isOpen && unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-amber-500 text-white font-mono font-bold text-[9px] w-5 h-5 rounded-full flex items-center justify-center shadow-md"
            >
              {unreadCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}
