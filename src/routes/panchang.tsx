import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cityOptions, getPanchang, choghadiya } from "@/lib/astrology";
import { siteName } from "@/lib/content";

export const Route = createFileRoute("/panchang")({
  head: () => ({
    meta: [
      { title: `Aaj Ka Panchang — Tithi, Nakshatra, Rahu Kaal & Choghadiya | ${siteName}` },
      { name: "description", content: "Today's Panchang with Tithi, Nakshatra, Yoga, Karana, Paksha, sunrise, sunset, moonrise, moonset, Rahu Kaal, Abhijit Muhurat and day/night Choghadiya." },
      { property: "og:title", content: `Aaj Ka Panchang | ${siteName}` },
      { property: "og:description", content: "Daily Panchang with muhurats, kaal periods and Choghadiya by city." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PanchangPage,
});

function PanchangPage() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [city, setCity] = useState("Aligarh");
  const place = cityOptions.find((c) => c.name === city) ?? cityOptions[0];
  const d = new Date(`${date}T06:00:00+05:30`);
  const p = getPanchang(d, place.lat, place.lng);
  const ch = choghadiya(d);
  const rows: [string, string][] = [["Tithi", p.tithi], ["Paksha", p.paksha], ["Nakshatra", p.nakshatra], ["Yoga", p.yoga], ["Karana", p.karana], ["Moon Rashi (चंद्र राशि)", p.moonRashi], ["Sun Rashi (सूर्य राशि)", p.sunRashi], ["Vikram Samvat", p.vikram], ["Shaka Samvat", p.shaka], ["Month (मास)", p.month]];
  const times: [string, string][] = [["Sunrise (सूर्योदय)", p.sunrise], ["Sunset (सूर्यास्त)", p.sunset], ["Moonrise (चंद्रोदय)", p.moonrise], ["Moonset (चंद्रास्त)", p.moonset]];
  const kaal: [string, string][] = [["Rahu Kaal", p.rahu], ["Yamaganda", p.yamaganda], ["Gulika Kaal", p.gulika], ["Abhijit Muhurat", p.abhijit], ["Brahma Muhurat", p.brahma]];
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Panchang" title="Aaj Ka Panchang">
        Choose a date and city to view the complete daily Panchang, auspicious muhurats and Choghadiya.
      </PageHero>
      <Breadcrumbs items={["Panchang"]} />
      <section className="section-shell pb-16">
        <div className="mb-8 grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div className="grid gap-2"><Label htmlFor="pdate">Date</Label><Input id="pdate" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
          <div className="grid gap-2"><Label htmlFor="pcity">City</Label><Input id="pcity" list="pcities" value={city} onChange={(e) => setCity(e.target.value)} /><datalist id="pcities">{cityOptions.map((c) => <option key={c.name} value={c.name} />)}</datalist></div>
          <Button variant="outline" onClick={() => { setDate(new Date().toISOString().slice(0, 10)); setCity("Aligarh"); }}>Today</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Panel title="Panchang elements" rows={rows} />
          <Panel title="Celestial timings" rows={times} />
          <Panel title="Kaal & Muhurat" rows={kaal} />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ChoghadiyaTable title="Day Choghadiya" items={ch.day} />
          <ChoghadiyaTable title="Night Choghadiya" items={ch.night} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="hero" asChild><Link to="/calendar">Astrology Calendar</Link></Button>
          <Button variant="outline" asChild><Link to="/contact">Ask for a muhurat</Link></Button>
        </div>
        <div className="mt-8"><Disclaimer /></div>
      </section>
      <Footer />
    </>
  );
}

function Panel({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="rounded-md border border-gold bg-card p-5">
      <h2 className="mb-3 font-display text-2xl text-maroon">{title}</h2>
      <dl className="grid gap-2 text-sm">
        {rows.map(([k, v]) => <div key={k} className="flex justify-between gap-3 border-b border-border pb-1"><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>)}
      </dl>
    </div>
  );
}

function ChoghadiyaTable({ title, items }: { title: string; items: { name: string; nature: string; time: string }[] }) {
  return (
    <div className="rounded-md border border-border bg-card p-5">
      <h2 className="mb-3 font-display text-2xl text-maroon">{title}</h2>
      <table className="w-full text-sm">
        <thead><tr className="text-left text-xs uppercase text-muted-foreground"><th className="pb-2">Name</th><th className="pb-2">Nature</th><th className="pb-2">Time</th></tr></thead>
        <tbody>
          {items.map((c) => (
            <tr key={c.time} className="border-t border-border">
              <td className="py-1.5 font-semibold">{c.name}</td>
              <td className={c.nature === "Good" ? "text-saffron" : c.nature === "Neutral" ? "text-muted-foreground" : "text-destructive"}>{c.nature}</td>
              <td className="py-1.5">{c.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
