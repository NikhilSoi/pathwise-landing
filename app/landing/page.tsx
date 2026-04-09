import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VectorEd \u2014 Academic Pathway Intelligence",
  description:
    "VectorEd builds AI-powered tools for business schools \u2014 simulation, assessment design, cohort intelligence, and early warning systems. Built for the modern faculty.",
};

export default function LandingPage() {
  const productLines = [
    {
      name: "VectorSimul",
      tagline: "Business simulation engines",
      description: "Interactive decision-making simulations where students face real data, make strategic choices, and live with the consequences.",
      accent: "#3B82F6",
      products: [
        {
          name: "Fieldwork",
          badge: "Live",
          badgeColor: "bg-[#3B82F6]",
          tagline: "Marketing analytics simulation",
          description:
            "Teams work through real company data \u2014 P&L, funnels, cohorts, RFM \u2014 vote on decisions, face compounding consequences, and are challenged by Nova, an AI copilot that never gives the answer.",
          accent: "#3B82F6",
          cta: "Run a session \u2192",
          href: "https://fieldwork-rho.vercel.app",
          external: true,
        },
        {
          name: "Pathfinder",
          badge: "Live",
          badgeColor: "bg-[#3A9E82]",
          tagline: "AARRR funnel strategy simulation",
          description:
            "Students navigate the full Acquisition \u2192 Activation \u2192 Retention \u2192 Referral \u2192 Revenue funnel across 7 business archetypes. Every decision compounds. Nova challenges every assumption.",
          accent: "#3A9E82",
          cta: "Start a simulation \u2192",
          href: "https://pathfinder-kappa-teal.vercel.app",
          external: true,
        },
      ],
    },
    {
      name: "Vector Labs",
      tagline: "Faculty intelligence tools",
      description: "AI-powered platforms that give faculty real-time insight into cohort performance, assessment quality, and student risk.",
      accent: "#7F77DD",
      products: [
        {
          name: "Pathwise",
          badge: "Live",
          badgeColor: "bg-[#2D8B6F]",
          tagline: "Cohort intelligence platform",
          description:
            "Upload your cohort data and get AI-generated pathway recommendations for every student in minutes. Built for programme directors who need to act fast.",
          accent: "#2D8B6F",
          cta: "Try with your cohort \u2192",
          href: "#cta",
          external: false,
        },
        {
          name: "VFAAD",
          badge: "Live",
          badgeColor: "bg-[#7F77DD]",
          tagline: "Validity-first assessment designer",
          description:
            "AI that audits your assessments for validity gaps, AI-vulnerability, and policy alignment \u2014 then redesigns them. Built for the post-ChatGPT classroom.",
          accent: "#7F77DD",
          cta: "Design an assessment \u2192",
          href: "https://vfaad.vercel.app",
          external: true,
        },
        {
          name: "Canary",
          badge: "Live",
          badgeColor: "bg-[#F59E0B]",
          tagline: "Early warning intelligence",
          description:
            "Real-time signals from student cohorts \u2014 engagement patterns, risk flags, progression analytics \u2014 so faculty can act before students fall behind.",
          accent: "#F59E0B",
          cta: "Run an assessment →",
          href: "https://canary1.vercel.app",
          external: true,
        },
      ],
    },
  ];

  const whyCards = [
    {
      accent: "#2D8B6F",
      title: "Real data, real decisions",
      body: "Our tools use actual company datasets, real cohort performance, and live market signals \u2014 not textbook examples. Students work with the same ambiguity they\u2019ll face on day one.",
    },
    {
      accent: "#3B82F6",
      title: "AI as copilot, not answer machine",
      body: "Every VectorEd product uses AI to challenge thinking, not replace it. Nova asks questions. VFAAD surfaces gaps. Pathwise recommends, not prescribes.",
    },
    {
      accent: "#7F77DD",
      title: "Faculty in control",
      body: "Instructors configure everything. Full session control, live dashboards, post-session debrief data. No black boxes \u2014 just better teaching outcomes.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2EE] text-[#0F1C2E]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#0F1C2E]/10 bg-[#F0F2EE]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2D8B6F] flex items-center justify-center font-bold text-sm text-white">
              V
            </div>
            <span className="text-lg font-semibold tracking-tight">
              VectorEd
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-sm text-[#0F1C2E]/60">
            <a
              href="#suite"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Products
            </a>
            <a
              href="#why-vectored"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Why VectorEd
            </a>
            <a
              href="#cta"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href="https://tally.so/r/A7D5XW"
            className="px-4 py-2 text-sm font-medium rounded-full bg-[#0F1C2E] text-white hover:bg-[#0F1C2E]/90 transition-colors"
          >
            Book a demo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8B6F]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2D8B6F]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#2D8B6F]/30 bg-[#2D8B6F]/10 text-[#2D8B6F] text-sm">
              <span className="w-2 h-2 rounded-full bg-[#2D8B6F] animate-pulse" />
              Academic Pathway Intelligence
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up delay-100">
            The tools your students need.
            <br />
            <span className="bg-gradient-to-r from-[#2D8B6F] via-[#3B82F6] to-[#7F77DD] bg-clip-text text-transparent">
              The intelligence your faculty deserves.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#0F1C2E]/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            VectorEd builds AI-powered products that close the gap between what
            business schools teach and what the market demands. Real data. Real
            decisions. Real outcomes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a
              href="#suite"
              className="px-8 py-3.5 text-base font-semibold rounded-full bg-[#0F1C2E] text-white hover:bg-[#0F1C2E]/90 transition-colors"
            >
              Explore the suite &rarr;
            </a>
            <a
              href="https://tally.so/r/A7D5XW"
              className="px-8 py-3.5 text-base font-semibold rounded-full border border-[#0F1C2E]/20 hover:border-[#0F1C2E]/40 transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-[#0F1C2E]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5", label: "Products in the suite" },
            { value: "4", label: "Live and deployed" },
            { value: "500+", label: "Students reached" },
            { value: "2026", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#2D8B6F]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[#0F1C2E]/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The VectorEd Suite */}
      <section id="suite" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The VectorEd Suite
            </h2>
            <p className="mt-4 text-[#0F1C2E]/60 text-lg max-w-2xl mx-auto">
              Five tools across two product lines. One mission &mdash; close the gap between what business
              schools teach and what the market demands.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {productLines.map((line) => (
              <div key={line.name}>
                {/* Product line header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: line.accent }}
                  >
                    {line.name === "VectorSimul" ? "VS" : "VL"}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{line.name}</h3>
                    <p className="text-sm" style={{ color: line.accent }}>{line.tagline}</p>
                  </div>
                </div>
                <p className="text-[#0F1C2E]/50 mb-8 max-w-2xl">{line.description}</p>

                {/* Product cards */}
                <div className={`grid gap-6 ${line.products.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {line.products.map((product) => (
                    <div
                      key={product.name}
                      className="group relative bg-white rounded-2xl border border-[#0F1C2E]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0F1C2E]/5"
                    >
                      {/* Accent top stripe */}
                      <div
                        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                        style={{ backgroundColor: product.accent }}
                      />

                      <div className="p-8">
                        {/* Header row */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p
                              className="text-sm font-medium mt-0.5"
                              style={{ color: product.accent }}
                            >
                              {product.tagline}
                            </p>
                          </div>
                          <span
                            className={`${product.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap`}
                          >
                            {product.badge}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#0F1C2E]/60 leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* CTA */}
                        {product.href ? (
                          <a
                            href={product.href}
                            {...(product.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="inline-flex items-center text-sm font-semibold transition-colors hover:opacity-80"
                            style={{ color: product.accent }}
                          >
                            {product.cta}
                          </a>
                        ) : (
                          <span className="inline-flex items-center text-sm font-semibold text-[#0F1C2E]/30 cursor-not-allowed">
                            {product.cta}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VectorEd */}
      <section id="why-vectored" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why VectorEd
            </h2>
            <p className="mt-4 text-[#0F1C2E]/60 text-lg max-w-2xl mx-auto">
              We build for the gap — between theory and practice, between
              teaching and learning, between what&apos;s assessed and what&apos;s
              needed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="group relative bg-white rounded-2xl border border-[#0F1C2E]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0F1C2E]/5"
              >
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: card.accent }}
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-[#0F1C2E]/60 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta" className="py-24 px-6 bg-[#0F1C2E]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to transform how
            <br />
            your students learn?
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Book a 30-minute demo with the VectorEd team. We&apos;ll show you
            the full suite and find the right fit for your programme.
          </p>
          <div className="mt-10">
            <a
              href="https://tally.so/r/A7D5XW"
              className="inline-block px-8 py-3.5 text-base font-semibold rounded-full bg-white text-[#0F1C2E] hover:bg-white/90 transition-colors"
            >
              Book a demo &rarr;
            </a>
          </div>
          <p className="mt-4 text-white/40 text-sm">
            or reach us at{" "}
            <a
              href="mailto:hello@vectored.co"
              className="text-white/60 underline hover:text-white transition-colors"
            >
              hello@vectored.co
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0F1C2E]/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#0F1C2E]/50">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#2D8B6F] flex items-center justify-center font-bold text-[10px] text-white">
              V
            </div>
            <span>VectorEd</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href="https://fieldwork-rho.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Fieldwork
            </a>
            <span>&middot;</span>
            <a
              href="https://pathfinder-kappa-teal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Pathfinder
            </a>
            <span>&middot;</span>
            <a
              href="https://pathwise-lilac.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              Pathwise
            </a>
            <span>&middot;</span>
            <a
              href="https://vfaad.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F1C2E] transition-colors"
            >
              VFAAD
            </a>
            <span>&middot;</span>
            <span>Canary</span>
          </div>
          <p>&copy; 2026 VectorEd. Built for business schools.</p>
        </div>
      </footer>
    </div>
  );
}
