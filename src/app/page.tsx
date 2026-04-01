import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const AppShowcase = dynamic(() => import("@/components/AppShowcase"));
const Features = dynamic(() => import("@/components/Features"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"));
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const LeadCapture = dynamic(() => import("@/components/LeadCapture"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const DownloadCTA = dynamic(() => import("@/components/DownloadCTA"));
const ExitIntent = dynamic(() => import("@/components/ExitIntent"));
const StickyBottomCTA = dynamic(() => import("@/components/StickyBottomCTA"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <AppShowcase />
        <Features />
        <ComparisonTable />
        <SocialProof />
        <LeadCapture />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
      <ExitIntent />
      <StickyBottomCTA />
    </>
  );
}
