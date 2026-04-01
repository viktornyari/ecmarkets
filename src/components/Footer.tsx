import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex items-center mb-6 sm:mb-8">
          <Image
            src="/ec-logo-white.svg"
            alt="EC Markets"
            width={120}
            height={36}
            className="h-7 sm:h-8 w-auto"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-8 mb-8 sm:mb-12">
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {["Stocks & Shares ISA", "Forex Trading", "Precious Metals", "Crude Oil"].map(
                (item) => (
                  <li key={item}>
                    <a href="https://www.ecmarkets.co.uk" className="text-xs sm:text-sm text-neutral-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {["About Us", "Careers", "News", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="https://www.ecmarkets.co.uk" className="text-xs sm:text-sm text-neutral-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Legal</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-1.5 sm:space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Risk Disclosure", "Cookie Policy", "Complaints Procedure"].map((item) => (
                <li key={item}>
                  <a href="https://www.ecmarkets.co.uk/legal" className="text-xs sm:text-sm text-neutral-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="rounded-xl bg-white/5 border border-white/10 p-6 mb-8">
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Risk Warning &amp; Regulatory Disclaimer
            </h4>
            <div className="space-y-3 text-xs text-neutral-500 leading-relaxed">
              <p>
                <strong className="text-neutral-300">Capital at risk.</strong> The value of
                investments and the income from them can go down as well as up, and you may
                get back less than you invest. Past performance is not a reliable indicator of
                future results. Tax treatment depends on individual circumstances and may be
                subject to change in the future.
              </p>
              <p>
                <strong className="text-neutral-300">ISA rules apply.</strong>{" "}A Stocks &amp; Shares
                ISA is a type of Individual Savings Account. The annual ISA allowance for
                2025/26 is £20,000. You can only subscribe to one Stocks &amp; Shares ISA per tax
                year. ISA tax advantages are subject to change and their value depends on your
                individual circumstances.
              </p>
              <p>
                EC Markets Group Ltd is authorised and regulated by the Financial Conduct
                Authority (FCA), FRN: 571881. EC Markets Group Ltd is incorporated in England
                and Wales (No. 07601714). Registered address: Parksworth House, 30 City Road,
                EC1Y 2AY, London, UK. Your eligible investments with EC Markets are protected up to
                £85,000 per person by the Financial Services Compensation Scheme (FSCS).
              </p>
              <p>
                This page is a financial promotion. It is not personal advice. If you are unsure
                about the suitability of an investment, please seek independent financial advice.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
            <p>&copy; {new Date().getFullYear()} EC Markets Group Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://register.fca.org.uk/s/firm?id=001b000000MfYWaAAN"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                FCA Register
              </a>
              <a
                href="https://apps.apple.com/gb/app/ec-markets-trading/id6444405587"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=info.ecmarkets.app"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
              <a
                href="https://www.linkedin.com/company/ecmarkets"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
