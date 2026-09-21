import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { BookingForm } from "@/components/astrology/forms";
import { Button } from "@/components/ui/button";
import { reports, services, siteName } from "@/lib/content";

function findService(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (s) return { title: s.title, text: s.short, benefits: [...s.benefits], price: "On assessment" };
  const r = reports.find((x) => x.slug === slug);
  if (r) return { title: r.title, text: r.text, benefits: ["Personally prepared", "Clear timing guidance", "Practical remedies"], price: r.price };
  return null;
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Service";
    return {
      meta: [
        { title: `${title} | ${siteName}` },
        { name: "description", content: `${title}: ${loaderData?.text ?? "Vedic astrology guidance"} Book a consultation or request a detailed report.` },
        { property: "og:title", content: `${title} | ${siteName}` },
        { property: "og:description", content: loaderData?.text ?? "Vedic astrology guidance" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData();
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Service" title={s.title}>{s.text}</PageHero>
      <Breadcrumbs items={["Services", s.title]} />
      <section className="section-shell grid gap-10 pb-16 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-maroon">What this reading covers</h2>
          <p className="leading-7 text-muted-foreground">Your Lagna chart and Navamsa are studied together with the running Vimshottari Dasha and current transits. You receive the reasoning behind every conclusion, the likely timing, and remedies that are simple, affordable and optional.</p>
          <ul className="grid gap-2">
            {s.benefits.map((b) => <li key={b} className="flex items-center gap-2 rounded border border-border bg-card p-3 text-sm"><CheckCircle2 className="size-5 text-saffron" />{b}</li>)}
          </ul>
          <p className="text-sm font-semibold text-saffron">Fee: {s.price}</p>
          <Button variant="outline" asChild><Link to="/services">Back to all services</Link></Button>
          <Disclaimer />
        </div>
        <div>
          <h2 className="mb-4 font-display text-3xl text-maroon">Book now / Get report</h2>
          <BookingForm defaultService={s.title} />
        </div>
      </section>
      <Footer />
    </>
  );
}
