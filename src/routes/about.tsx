import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { Header, Footer, PageHero, Breadcrumbs, SectionHeading, TrustStrip, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { siteName } from "@/lib/content";
import method from "@/assets/kundli-method.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About the Astrologer | ${siteName}` },
      { name: "description", content: "25+ years of Vedic practice grounded in Lagna, Navamsa (D-9), Dasha and transit analysis, with an ethical, fear-free approach to remedies." },
      { property: "og:title", content: `About | ${siteName}` },
      { property: "og:description", content: "Methodology, expertise and ethics behind our Vedic astrology consultations." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="About Us" title="A practice built on precision, patience and honesty">
        {siteName} has guided families for more than twenty-five years, combining classical Vedic technique with plain, practical counsel.
      </PageHero>
      <Breadcrumbs items={["About"]} />
      <section className="section-shell grid gap-10 pb-16 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-4 leading-7 text-muted-foreground">
          <h2 className="font-display text-3xl text-maroon">The astrologer</h2>
          <p>Trained in the classical Parashari tradition and practising from Pachera, Aligarh, our principal astrologer has studied more than eighteen thousand horoscopes across marriage, career, health, property and karmic questions. Consultations are conducted in Hindi and English.</p>
          <p>Every reading begins with verification of birth data, followed by an examination of the Lagna chart and the Navamsa (D-9). The Vimshottari Dasha sequence then establishes timing, and current transits refine the picture into something you can act on this month rather than someday.</p>
          <p>Predictions are offered as guidance. Where a difficult period is indicated, it is explained along with what strengthens you through it — never as a threat and never as a reason to purchase something expensive.</p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Book a Consultation</Link></Button>
        </div>
        <img src={method} alt="Hand-drawn Vedic kundli chart and astrological instruments" className="h-full w-full rounded-lg border border-gold object-cover" />
      </section>
      <TrustStrip />
      <section className="section-shell py-16">
        <SectionHeading eyebrow="Methodology" title="Four layers, in a fixed order" />
        <div className="grid gap-4 md:grid-cols-4">
          {[[Compass, "Lagna Chart", "The foundation: houses, lords and the strength of each significator."], [BookOpen, "Navamsa D-9", "Maturity and true strength of planets, marriage and dharma."], [HeartHandshake, "Vimshottari Dasha", "When a promise in the chart is likely to actually unfold."], [ShieldCheck, "Transits", "Present-day triggers that fine-tune the timing of events."]].map(([Icon, t, d]: any) => (
            <div key={t} className="rounded-md border border-border bg-card p-5">
              <Icon className="mb-3 size-7 text-saffron" />
              <h3 className="font-display text-2xl text-maroon">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-cream py-16">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-maroon">Areas of expertise</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {["Marriage timing, matching and married-life difficulties", "Career direction, promotion and job change windows", "Business growth, partnership and risk cycles", "Health-sensitive periods and supportive routines", "Children, conception and education guidance", "Court cases, property and dispute timing", "Foreign travel and settlement prospects", "Past-life and karmic pattern analysis", "Birth time rectification", "Vastu for home and workplace"].map((x) => <li key={x} className="border-b border-border pb-2">• {x}</li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-3xl text-maroon">Why people trust us</h2>
            <p className="leading-7 text-muted-foreground">We never use fear to sell remedies, never promise guaranteed outcomes, and never share your personal details. If astrology cannot help with your question, we say so and suggest the right professional instead.</p>
            <Disclaimer />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
