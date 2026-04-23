import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import FacilityMetrics from "@/components/sections/FacilityMetrics";
import CoreValues from "@/components/sections/CoreValues";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import GrowthInitiatives from "@/components/sections/GrowthInitiatives";
import StatsSection from "@/components/sections/StatsSection";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Home | PETROTANK — Leading Energy Logistics Hub in Yanbu",
  description:
    "PETROTANK is Saudi Arabia's first bonded storage license holder in Yanbu — 114,000 m³ bulk liquid storage, marine operations, and energy logistics at King Fahd Industrial Port.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <FacilityMetrics />
      <CoreValues />
      <ServicesSection />
      <CertificationsSection />
      <GrowthInitiatives />
      <StatsSection />
      <ContactCTA />
    </>
  );
}
