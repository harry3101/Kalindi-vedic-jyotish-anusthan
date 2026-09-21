import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header, Footer, PageHero, Breadcrumbs, SectionHeading, PageShellStyles } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { reports, services, siteName } from "@/lib/content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: `Astrology Services & Reports | ${siteName}` },
      { name: "description", content: "Consultation, online and voice reports, full life analysis, puja and remedies, Vastu, plus focused readings for marriage, career, health, property and more." },
      { property: "og:title", content: `Services | ${siteName}` },
      { property: "og:description", content: "Vedic astrology consultation, reports and focused life-area readings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Services" title="Consultations, reports and focused life readings">
        Pick the format that suits you. Every option is prepared personally from your birth chart.
      </PageHero>
      <Breadcrumbs items={["Services"]} />
      <section className="section-shell pb-14">
        <SectionHeading eyebrow="Formats" title="How you can consult" />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {reports.map((r) => (
            <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="rounded-md border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md">
              <h3 className="font-display text-xl text-maroon">{r.title}</h3>
              <p className="mt-1 text-sm font-semibold text-saffron">{r.price}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-cream py-14">
        <div className="section-shell">
          <SectionHeading eyebrow="Life Areas" title="Focused astrology services" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="rounded-md border border-border bg-card p-5">
                <s.icon className="mb-3 size-8 text-saffron" />
                <h3 className="font-display text-2xl text-maroon">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.short}</p>
                <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">{s.benefits.map((b) => <li key={b}>• {b}</li>)}</ul>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="hero" asChild><Link to="/services/$slug" params={{ slug: s.slug }}>Details</Link></Button>
                  <Button size="sm" variant="outline" asChild><Link to="/contact">Book Now <ArrowRight className="size-4" /></Link></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
