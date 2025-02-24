"use client";
import { useEffect } from "react";

/**
 * The root layout component of the app. It registers a service worker to provide offline support.
 *
 * @example
 * 
 **/
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
    
}
