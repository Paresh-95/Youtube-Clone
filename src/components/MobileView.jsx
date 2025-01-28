import React, { useState, useEffect } from 'react';

const MobileWarningMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile devices
    };

    // Check screen size on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isMobile) return null; // Don't show the message if not on mobile

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold text-gray-800">
          This website is not optimized for mobile view.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Please view on a desktop for the best experience.
        </p>
      </div>
    </div>
  );
};

export default MobileWarningMessage;