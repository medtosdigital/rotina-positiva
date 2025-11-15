'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingCart, MessageCircle, ThumbsUp } from 'lucide-react';
import data from '@/lib/notifications.json';

type Notification = {
  type: 'purchase' | 'instagram' | 'facebook';
  name: string;
  location?: string;
  comment: string;
};

const notifications: Notification[] = data.notifications;

const getIcon = (type: string) => {
  switch (type) {
    case 'purchase':
      return <ShoppingCart className="w-5 h-5 text-green-500" />;
    case 'instagram':
      return <MessageCircle className="w-5 h-5 text-pink-500" />;
    case 'facebook':
      return <ThumbsUp className="w-5 h-5 text-blue-600" />;
    default:
      return null;
  }
};

const SalesNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  if (!currentNotification) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <Card className="p-3 shadow-lg max-w-sm w-full">
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
                <p className="font-bold text-gray-800">@{currentNotification.name}</p>
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
