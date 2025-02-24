"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="hero">
      <ThemeToggle />
      <h1 className="text-4xl font-bold">⏰ Digital Clock & Smart Alarm</h1>
      <p className="mt-2 text-lg">Set multiple alarms, get notifications, and customize alerts.</p>
      <Link href="/alarm">
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Try Now</button>
      </Link>
    </section>
  );
}
