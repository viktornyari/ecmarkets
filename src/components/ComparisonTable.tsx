"use client";

import AnimatedSection from "./AnimatedSection";
import { trackConversion } from "@/lib/analytics";

const rows = [
  { feature: "Tax on capital gains", isa: "None", gia: "Up to 20%*" },
  { feature: "Tax on dividends", isa: "None", gia: "Up to 33.75%*" },
  { feature: "Tax on interest", isa: "None", gia: "Up to 45%*" },
  { feature: "Annual allowance", isa: "£20,000", gia: "Unlimited" },
  { feature: "Withdrawal flexibility", isa: "Anytime", gia: "Anytime" },
  { feature: "Platform fee", isa: "£0", gia: "£0" },
  { feature: "FSCS protection", isa: "Up to £85,000", gia: "Up to £85,000" },
  { feature: "Ideal for", isa: "Tax-efficient growth", gia: "Beyond ISA limit" },
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section id="compare" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Subtle red accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" trackName="comparison">
          <span className="inline-block text-sm font-semibold text-brand-red tracking-wide uppercase mb-3">
            ISA vs GIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            See the tax-free difference
          </h2>
          <p className="mt-4 text-lg text-white/50 leading-relaxed">
            Compare our Stocks &amp; Shares ISA against a General Investment Account.
            The tax savings can make a meaningful difference over time.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="w-[38%] px-3 py-3 sm:px-6 sm:py-4 text-[11px] sm:text-sm font-semibold text-white/50">
                    Feature
                  </th>
                  <th className="w-[31%] px-3 py-3 sm:px-6 sm:py-4 text-[11px] sm:text-sm font-semibold text-white">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-red text-white text-xs font-bold shrink-0">
                        S
                      </span>
                      <span className="sm:hidden">ISA</span>
                      <span className="hidden sm:inline">Stocks &amp; Shares ISA</span>
                    </div>
                  </th>
                  <th className="w-[31%] px-3 py-3 sm:px-6 sm:py-4 text-[11px] sm:text-sm font-semibold text-white/50">
                    <span className="sm:hidden">GIA</span>
                    <span className="hidden sm:inline">General Investment Account</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                      i % 2 === 0 ? "" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="px-3 py-2.5 sm:px-6 sm:py-4 text-[11px] sm:text-sm font-medium text-white/70">
                      {row.feature}
                    </td>
                    <td className="px-3 py-2.5 sm:px-6 sm:py-4 text-[11px] sm:text-sm text-white">
                      <div className="flex items-center gap-1 sm:gap-2">
                        {row.isa === "None" && <CheckIcon />}
                        <span className={row.isa === "None" ? "font-semibold text-emerald-400" : ""}>
                          {row.isa}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 sm:px-6 sm:py-4 text-[11px] sm:text-sm text-white/40">{row.gia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-white/30">
            *GIA tax rates depend on your income tax band (2025/26). Higher and additional rate taxpayers may pay more.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="text-left">
              <p className="text-lg font-semibold text-white">
                Invest up to £20,000 tax-free this year
              </p>
              <p className="text-sm text-white/40 mt-1">
                Use your full ISA allowance before the 5 April deadline.
              </p>
            </div>
            <a
              href="#download"
              onClick={() => trackConversion("app_download")}
              className="shrink-0 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-700 hover:-translate-y-0.5"
            >
              Open Your ISA
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
