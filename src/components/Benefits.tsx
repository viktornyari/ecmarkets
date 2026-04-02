"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Tax-Free Investing",
    description:
      "Pay zero tax on capital gains, dividends, or interest earned within your ISA wrapper. Keep more of what you earn.",
    highlight: "£20,000 annual allowance",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Low, Transparent Fees",
    description:
      "No hidden costs. Competitive pricing with £0 platform fee on your ISA. You always know exactly what you're paying.",
    highlight: "£0 platform fee",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Invest in the App",
    description:
      "Open your ISA, browse investments, and manage your portfolio — all from our sleek, intuitive mobile app.",
    highlight: "iOS & Android",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Regulated & Secure",
    description:
      "EC Markets is authorised by the FCA (FRN: 571881). Your eligible investments are protected up to £85,000 by the FSCS.",
    highlight: "FCA Authorised",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" trackName="benefits">
          <span className="inline-block text-sm font-semibold text-brand-red tracking-wide uppercase mb-3">
            Why choose our ISA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Everything you need to invest smarter
          </h2>
          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            Our Stocks &amp; Shares ISA gives you tax-efficient access to global markets,
            wrapped in an experience designed for modern investors.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-neutral-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50 hover:border-neutral-200 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition-colors group-hover:bg-brand-red">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <span className="inline-block text-xs font-semibold text-brand-red bg-brand-red-50 rounded-full px-3 py-1">
                  {benefit.highlight}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
