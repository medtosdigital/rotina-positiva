'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import data from '@/lib/notifications.json';

type Notification = {
  type: 'purchase' | 'instagram' | 'facebook' | 'whatsapp';
  name: string;
  location?: string;
  comment: string;
};

const notifications: Notification[] = data.notifications;

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <radialGradient id="instagram-gradient" cx="0.3" cy="1" r="1">
                <stop offset="0" stopColor="#FFDC80" />
                <stop offset="0.1" stopColor="#FCAF45" />
                <stop offset="0.5" stopColor="#F77737" />
                <stop offset="0.7" stopColor="#F56040" />
                <stop offset="1" stopColor="#FD1D1D" />
            </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.8.48 3.48 1.34 4.94L2 22l5.3-1.48c1.39.78 2.97 1.21 4.64 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.51 7.31c.21-.21.49-.24.72-.12 1.44.73 2.53 1.83 3.26 3.27.12.23.09.51-.12.72l-.8.8c-.21.21-.52.26-.78.12-1.03-.54-2.11-.9-3.23-1.07-.27-.04-.47-.28-.43-.55l.2-1.39c.04-.26.24-.48.5-.54l.73-.13zm5.01 6.55l.8-.8c.21-.21.24-.49.12-.72-.73-1.44-1.83-2.53-3.27-3.26-.23-.12-.51-.09-.72.12l-.8.8c-.21.21-.26.52-.12.78.54 1.03.9 2.11 1.07 3.23.04.27.28.47.55.43l1.39-.2c.26-.04.48-.24.54-.5z"></path>
    </svg>
);

const getIcon = (type: string) => {
  switch (type) {
    case 'purchase':
      return <ShoppingCart className="w-5 h-5 text-green-500" />;
    case 'instagram':
      return <InstagramIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'whatsapp':
        return <WhatsAppIcon />;
    default:
      return null;
  }
};

const SalesNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let timeoutId: NodeJS.Timeout;

    const showRandomNotification = () => {
      // Hide current notification before showing the next one
      setIsVisible(false);

      // Wait for fade-out animation to complete
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * notifications.length);
        setCurrentNotification(notifications[randomIndex]);
        setIsVisible(true);
      }, 500);

      // Set timeout to hide the notification
      setTimeout(() => {
        setIsVisible(false);
      }, 7000); // Display for 7 seconds

      // Schedule the next notification
      const randomInterval = Math.random() * (20000 - 10000) + 10000; // 10-20 seconds
      timeoutId = setTimeout(showRandomNotification, randomInterval + 7500); // Add display and fade time
    };

    // Start the loop
    const startTimeout = setTimeout(showRandomNotification, 10000); // Initial delay

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  if (!currentNotification || !isClient) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <Card className="p-3 shadow-xl max-w-sm w-full">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 bg-gray-100 rounded-full p-2">
            {getIcon(currentNotification.type)}
          </div>
          <div className="text-sm">
            {currentNotification.type === 'purchase' ? (
              <>
                <p className="text-gray-500">
                  <span className="font-bold text-gray-800">{currentNotification.name}</span> de {currentNotification.location}
                </p>
                <p className="font-semibold text-green-600">{currentNotification.comment}</p>
              </>
            ) : (
              <>
                <p className="font-bold text-gray-800">{currentNotification.name}</p>
                <p className="text-gray-600 italic">"{currentNotification.comment}"</p>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesNotification;
