"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The loader animation itself takes about 2 seconds to fully play out.
    // We remove it after 2.2s so the exit animation (0.8s) can start.
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Optional: scroll to top on initial load
      window.scrollTo(0, 0);
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {/* Disable scrolling while loading */}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
