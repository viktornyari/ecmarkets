"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Script from "next/script";

const faqs = [
  {
    question: "What is a Stocks & Shares ISA?",
    answer:
      "A Stocks & Shares ISA (Individual Savings Account) is a tax-efficient wrapper that lets you invest in stocks, ETFs, funds, and bonds without paying capital gains tax, dividend tax, or income tax on your returns. It's one of the most popular ways for UK residents to grow their wealth tax-free.",
  },
  {
    question: "How much can I put into a Stocks & Shares ISA?",
    answer:
      "The annual ISA allowance for the 2025/26 tax year is £20,000. This is the total amount you can contribute across all your ISAs (Cash ISA, Stocks & Shares ISA, Innovative Finance ISA, and Lifetime ISA) in a single tax year.",
  },
  {
    question: "Is my money safe with EC Markets?",
    answer:
      "Yes. EC Markets is authorised and regulated by the Financial Conduct Authority (FCA), FRN: 571881. Your eligible deposits are protected up to £85,000 by the Financial Services Compensation Scheme (FSCS). We also use 256-bit SSL encryption to protect all data and transactions.",
  },
  {
    question: "What fees does EC Markets charge for the ISA?",
    answer:
      "EC Markets charges £0 platform fee on your Stocks & Shares ISA. There are no account opening fees, no annual management fees, and no withdrawal fees. You only pay the standard dealing costs when you buy or sell investments.",
  },
  {
    question: "Can I transfer my existing ISA to EC Markets?",
    answer:
      "Yes, you can transfer ISAs from other providers to EC Markets without losing your tax-free status or affecting your annual allowance. The transfer process is handled entirely within the app and typically takes 15–30 business days depending on your current provider.",
  },
  {
    question: "Can I withdraw money from my Stocks & Shares ISA?",
    answer:
      "Yes. Our Stocks & Shares ISA is fully flexible, meaning you can withdraw and redeposit funds within the same tax year without it counting towards your annual allowance. There are no lock-in periods or withdrawal penalties.",
  },
  {
    question: "What investments are available in the EC Markets ISA?",
    answer:
      "You can invest in over 4,000 stocks and ETFs from UK, US, and EEA markets. This includes individual company shares, index-tracking ETFs, sector-specific funds, and more. Fractional shares are also available, so you can start investing with as little as £1.",
  },
  {
    question: "How do I open a Stocks & Shares ISA with EC Markets?",
    answer:
      "Opening an ISA takes under 5 minutes. Download the EC Markets app from the App Store or Google Play, complete the quick identity verification, and you're ready to start investing. You'll need to be a UK resident aged 18 or over.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-red"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base font-medium text-black">{question}</span>
        <ChevronIcon open={open} />
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-neutral-500 leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-brand-red tracking-wide uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Everything you need to know about our Stocks &amp; Shares ISA.
              Can&apos;t find the answer you&apos;re looking for?{" "}
              <a href="https://www.ecmarkets.co.uk" className="text-brand-red font-medium hover:underline">
                Contact our team
              </a>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="divide-y divide-neutral-100 rounded-2xl border border-neutral-100 bg-white px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
