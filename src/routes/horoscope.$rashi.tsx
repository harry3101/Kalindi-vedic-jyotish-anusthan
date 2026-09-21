import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { rashis, siteName } from "@/lib/content";
import { getHoroscope, periods, type Period } from "@/lib/horoscope";

export const Route = createFileRoute("/horoscope/$rashi")({
  loader: ({ params }) => {
    const index = rashis.findIndex((r) => r[0].toLowerCase() === params.rashi.toLowerCase());
    if (index < 0) throw notFound();
    return { index, en: rashis[index][0], hi: rashis[index][1], sym: rashis[index][2] };
  },
  head: ({ loaderData }) => {
    const en = loaderData?.en ?? "Rashi";
    return {
      meta: [
        { title: `${en} Horoscope — Daily, Weekly, Monthly & Yearly | ${siteName}` },
        { name: "description", content: `Free ${en} (${loaderData?.hi ?? ""}) horoscope covering general, career, finance, love and health guidance for today, this week, this month and this year.` },
        { property: "og:title", content: `${en} Horoscope | ${siteName}` },
        { property: "og:description", content: `${en} predictions for career, finance, love and health.` },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RashiPage,
});

function RashiPage() {
  const { index, en, hi, sym } = Route.useLoaderData();
  const [period, setPeriod] = useState<Period>("daily");
  const h = getHoroscope(index, period);
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Horoscope" title={`${en} ${hi} ${sym}`}>
        Predictions are based on the Moon sign. For precise guidance, a personal chart reading is recommended.
      </PageHero>
      <Breadcrumbs items={["Horoscope", en]} />
      <section className="section-shell pb-16">
        <div className="mb-6 flex flex-wrap gap-2">
          {periods.map((p) => (
            <Button key={p} variant={p === period ? "hero" : "outline"} onClick={() => setPeriod(p)} className="capitalize">{p}</Button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {([["General", h.general], ["Career", h.career], ["Finance", h.finance], ["Love & Relationships", h.love], ["Health", h.health]] as const).map(([t, v]) => (
            <article key={t} className="rounded-md border border-border bg-card p-5">
              <h2 className="font-display text-2xl text-maroon">{t}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{v}</p>
            </article>
          ))}
          <div className="rounded-md border border-gold bg-cream p-5">
            <h2 className="font-display text-2xl text-maroon">Lucky today</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Number {h.lucky.number} · Colour {h.lucky.colour} · Day {h.lucky.day}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="outline" asChild><Link to="/horoscope">All Rashis</Link></Button>
          <Button variant="hero" asChild><Link to="/contact">Book a personal reading</Link></Button>
        </div>
        <div className="mt-8"><Disclaimer /></div>
      </section>
      <Footer />
    </>
  );
}
