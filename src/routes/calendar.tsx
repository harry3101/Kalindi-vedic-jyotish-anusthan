import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { festivals, muhurats } from "@/lib/horoscope";
import { siteName } from "@/lib/content";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: `Hindu Astrology Calendar — Festivals & Muhurats | ${siteName}` },
      { name: "description", content: "Monthly Hindu calendar with festivals, vrat days and guidance on auspicious muhurats for marriage, griha pravesh, vehicles and new business." },
      { property: "og:title", content: `Astrology Calendar | ${siteName}` },
      { property: "og:description", content: "Monthly festivals and auspicious muhurat guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalendarPage,
});

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function CalendarPage() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const list = festivals[month + 1] ?? [];
  const shift = (n: number) => { const d = new Date(year, month + n, 1); setMonth(d.getMonth()); setYear(d.getFullYear()); };
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Calendar" title="Astrology Calendar & Muhurats">
        Plan the month ahead with festivals, vrat days and auspicious timings.
      </PageHero>
      <Breadcrumbs items={["Calendar"]} />
      <section className="section-shell grid gap-8 pb-16 lg:grid-cols-[1.4fr_.6fr]">
        <div className="rounded-md border border-gold bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={() => shift(-1)}>Previous</Button>
            <h2 className="font-display text-2xl text-maroon">{monthNames[month]} {year}</h2>
            <Button variant="outline" size="sm" onClick={() => shift(1)}>Next</Button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-muted-foreground">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d} className="pb-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: first }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: days }).map((_, i) => {
              const day = i + 1;
              const fest = list.find(([d]) => d === day);
              return (
                <div key={day} className={`min-h-16 rounded border p-1 text-left text-xs ${fest ? "border-gold bg-cream" : "border-border"}`}>
                  <strong className="text-sm text-maroon">{day}</strong>
                  {fest && <span className="mt-0.5 block leading-tight text-saffron">{fest[1]}</span>}
                </div>
              );
            })}
          </div>
        </div>
        <aside className="grid content-start gap-4">
          <div className="rounded-md border border-border bg-card p-5">
            <h2 className="mb-2 font-display text-2xl text-maroon">Festivals this month</h2>
            {list.length ? list.map(([d, n]) => <p key={n} className="border-b border-border py-1.5 text-sm"><strong className="text-saffron">{d} {monthNames[month]}</strong> — {n}</p>) : <p className="text-sm text-muted-foreground">No major festivals listed for this month.</p>}
          </div>
          <div className="rounded-md border border-border bg-card p-5">
            <h2 className="mb-2 font-display text-2xl text-maroon">Muhurat guidance</h2>
            {muhurats.map(([t, d]) => <p key={t} className="border-b border-border py-2 text-sm"><strong>{t}:</strong> <span className="text-muted-foreground">{d}</span></p>)}
          </div>
          <Disclaimer />
        </aside>
      </section>
      <Footer />
    </>
  );
}
