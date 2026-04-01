import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import ComparisonTable from "@/components/ComparisonTable";
import SocialProof from "@/components/SocialProof";
import LeadCapture from "@/components/LeadCapture";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import ExitIntent from "@/components/ExitIntent";
import StickyBottomCTA from "@/components/StickyBottomCTA";

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
