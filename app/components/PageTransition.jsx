"use client";

import { useEffect, useState } from "react";

export default function PageTransition({ children, direction = "left" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Небольшая задержка для запуска анимации
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <div className="min-h-screen w-full" style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  return (
    <div className={`page-transition-${direction}`}>
      {children}
    </div>
  );
}