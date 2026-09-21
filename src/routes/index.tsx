import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Sparkles, Star, Sun } from "lucide-react";
import { Header, Footer, SectionHeading, TrustStrip, Stars, Disclaimer, PageShellStyles } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { services, reports, rashis, siteName } from "@/lib/content";
import { getPanchang } from "@/lib/astrology";
import hero from "@/assets/vedic-temple-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteName} | Vedic Astrology Consultation & Free Kundli` },
      { name: "description", content: "Trusted Vedic astrology guidance with Navamsa-based analysis: free kundli, horoscope matching, daily Panchang, horoscopes and ethical remedies." },
      { property: "og:title", content: `${siteName} | Vedic Astrology Consultation` },
      { property: "og:description", content: "Navamsa-led Vedic astrology consultation, free kundli, Panchang and horoscope matching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const p = getPanchang(new Date());
  return (
    <>
      <PageShellStyles />
      <Header />
      <section className="relative overflow-hidden bg-maroon text-primary-foreground">
        <img src={hero} alt="Vedic temple at dawn" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="section-shell relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_.9fr]">
          <div className="animate-enter">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-gold">25+ years of Vedic practice</p>
            <h1 className="text-balance font-display text-4xl leading-tight md:text-6xl">Clear answers to life's difficult questions, through authentic Vedic astrology</h1>
            <p className="mt-5 max-w-xl text-base leading-7 opacity-85">Marriage, career, health, property, children and karmic patterns examined through Lagna, Navamsa (D-9), Dasha and transits — with practical, ethical remedies.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="gold" size="xl" asChild><Link to="/contact">Book a Consultation</Link></Button>
              <Button variant="outline" size="xl" className="border-gold bg-transparent text-gold hover:bg-gold hover:text-maroon" asChild><Link to="/free-kundli">Free Kundli</Link></Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm opacity-85"><Stars /> Rated by 4,000+ consulted families</div>
          </div>
          <div className="animate-enter rounded-lg border border-gold/40 bg-background/95 p-6 text-foreground shadow-xl">
            <div className="mb-3 flex items-center gap-2 text-saffron"><Sun className="size-5" /><strong className="text-sm font-bold uppercase tracking-widest">Aaj Ka Panchang</strong></div>
            <h2 className="font-display text-2xl text-maroon">{new Date().toLocaleDateString("en-IN", { dateStyle: "full" })}</h2>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {[["Tithi", p.tithi], ["Paksha", p.paksha], ["Nakshatra", p.nakshatra], ["Yoga", p.yoga], ["Sunrise", p.sunrise], ["Sunset", p.sunset], ["Moon Rashi", p.moonRashi], ["Rahu Kaal", p.rahu]].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-1"><dt className="text-xs text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
            <Button variant="link" className="mt-3 px-0 text-saffron" asChild><Link to="/panchang">Full Panchang <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </section>
      <TrustStrip />

      <section className="section-shell py-16 md:py-20">
        <SectionHeading eyebrow="Our Services" title="Guidance for every important decision" copy="Each reading begins with your birth chart and Navamsa, never with generic predictions." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-md border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
              <s.icon className="mb-3 size-8 text-saffron" />
              <h3 className="font-display text-2xl text-maroon">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.short}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-saffron">Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Consultation Options" title="Choose how you would like to be guided" />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {reports.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="rounded-md border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <h3 className="font-display text-xl text-maroon">{r.title}</h3>
                <p className="mt-1 text-sm font-semibold text-saffron">{r.price}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Free Horoscope" title="Today's guidance for your Rashi" copy="Daily, weekly, monthly and yearly readings for all twelve signs." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {rashis.map(([en, hi, sym], i) => (
            <Link key={en} to="/horoscope/$rashi" params={{ rashi: en.toLowerCase() }} className="rounded-md border border-border bg-card p-4 text-center transition-colors hover:border-gold hover:bg-cream">
              <span className="block text-3xl text-saffron">{sym}</span>
              <strong className="mt-1 block font-display text-lg text-maroon">{en}</strong>
              <span className="text-xs text-muted-foreground">{hi}</span>
              <span className="sr-only">Horoscope index {i + 1}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-maroon py-16 text-primary-foreground">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {[["Free Kundli", "Generate a complete Vedic birth chart with planets, houses, dasha and doshas.", "/free-kundli"], ["Kundli Milan", "Ashtakoot Guna Milan with dosha notes for marriage compatibility.", "/kundli-matching"], ["Astrology Calendar", "Festivals, muhurats and monthly planning at a glance.", "/calendar"]].map(([t, d, to]) => (
            <Link key={to} to={to} className="rounded-md border border-gold/40 p-6 transition-colors hover:bg-primary-foreground/5">
              <Sparkles className="mb-3 size-7 text-gold" />
              <h3 className="font-display text-2xl text-gold">{t}</h3>
              <p className="mt-2 text-sm leading-6 opacity-85">{d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Testimonials" title="What consulted families say" />
        <div className="grid gap-4 md:grid-cols-3">
          {[["Ritika Sharma, Delhi", "The Navamsa reading explained my marriage delay honestly, without fear. The remedies were simple and affordable."], ["Anand Verma, Aligarh", "I was advised to wait three months before changing jobs. That advice turned out to be exactly right."], ["Sunita Gupta, Lucknow", "Detailed, patient and ethical. No unnecessary pujas were suggested — only what was truly needed."]].map(([n, q]) => (
            <figure key={n} className="rounded-md border border-border bg-card p-6 shadow-sm">
              <Stars />
              <blockquote className="mt-3 text-sm leading-7 text-muted-foreground">"{q}"</blockquote>
              <figcaption className="mt-3 font-display text-lg text-maroon">{n}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground md:grid-cols-4">
          {["Featured in Dainik Jagran", "Amar Ujala Astrology Column", "Aastha TV Guest Panel", "Radio Jyotish Sessions"].map((m) => (
            <div key={m} className="flex items-center justify-center gap-2"><Star className="size-4 text-gold" />{m}</div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="section-shell grid items-center gap-8 rounded-lg border border-gold bg-card p-8 md:grid-cols-[1.2fr_.8fr] md:p-12">
          <div>
            <h2 className="font-display text-3xl text-maroon md:text-5xl">Speak to an astrologer who explains the reasoning</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Bring your exact birth details and your real question. You will receive a clear reading, the timing involved, and practical steps you can actually follow.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild><Link to="/contact">Book Consultation</Link></Button>
              <Button variant="outline" size="xl" asChild><Link to="/services">View All Services</Link></Button>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-md bg-muted p-4"><CalendarDays className="size-6 text-saffron" /><span className="text-sm">Appointments available daily, 9 AM – 8 PM IST</span></div>
            <Disclaimer />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
