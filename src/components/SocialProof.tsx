"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-time investor",
    text: "I had never invested before, but the EC Markets app made it so straightforward. I opened my ISA in under 5 minutes and now I'm watching my money grow tax-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "James Lawrence",
    role: "Experienced trader",
    text: "I moved my ISA from a high-street bank. The difference in fees alone has saved me hundreds. The real-time tracking and portfolio insights are top-notch.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Kapoor",
    role: "Long-term saver",
    text: "The comparison tools helped me understand exactly why an ISA was better for me. Clean interface, great support team, and I love the portfolio breakdown feature.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=25",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`h-4 w-4 ${filled ? "text-amber-400" : "text-neutral-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const certifications = [
  {
    name: "FCA Regulated",
    description: "Authorised and regulated by the Financial Conduct Authority (FRN: 571881)",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "FSCS Protected",
    description: "Eligible investments protected up to £85,000 per person by the FSCS",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.559" />
      </svg>
    ),
  },
  {
    name: "256-bit Encryption",
    description: "Bank-grade encryption protects all data transmission and transactions",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with UK GDPR and Data Protection Act 2018",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <>
      {/* Testimonials */}
      <section id="reviews" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" trackName="social_proof">
            <span className="inline-block text-sm font-semibold text-brand-red tracking-wide uppercase mb-3">
              Trusted by thousands
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Investors love EC Markets
            </h2>
            <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
              Join thousands of UK investors who trust EC Markets for their tax-free
              investing.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              <p className="text-sm text-neutral-500">
                <span className="font-semibold text-black">4.8</span>{" "}out of 5 &bull; App Store
              </p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-neutral-200" />
            <div className="text-center">
              <p className="text-3xl font-bold text-black">15,000+</p>
              <p className="text-sm text-neutral-500">ISAs opened this year</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-neutral-200" />
            <div className="text-center">
              <p className="text-3xl font-bold text-black">£250M+</p>
              <p className="text-sm text-neutral-500">Invested through ISAs</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-neutral-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-1">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} filled={j < t.rating} />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-neutral-100"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black">{t.name}</p>
                      <p className="text-xs text-neutral-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification badges — white card grid */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-lg font-semibold text-black">Regulated &amp; Secure</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Your investments are protected by industry-leading standards
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex flex-col items-center text-center rounded-2xl bg-white border border-neutral-100 p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 hover:-translate-y-1"
                >
                  <div className="text-neutral-700 mb-4 transition-colors group-hover:text-brand-red">
                    {cert.icon}
                  </div>
                  <p className="text-sm font-semibold text-black mb-1">{cert.name}</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
