import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <SEO 
        title="⏰ Digital Clock & Smart Alarm | Set Alarms & Notifications" 
        description="A modern digital clock with multiple alarms, notifications, vibration, and offline support. Try our smart alarm today!" 
        url="#" 
      />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
    </>
  );
}
