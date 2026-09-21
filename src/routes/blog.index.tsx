import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles } from "@/components/astrology/site";
import { articles, siteName } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `Vedic Astrology Articles & Insights | ${siteName}` },
      { name: "description", content: "Articles on marriage delay, career change, Sade Sati, Manglik dosha, Navamsa, birth time rectification, Rahu-Ketu and practical Vastu." },
      { property: "og:title", content: `Astrology Blog | ${siteName}` },
      { property: "og:description", content: "Clear, myth-free writing on Vedic astrology topics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Articles" title="Vedic astrology, explained without myths">
        Practical writing on the questions people ask most often in consultations.
      </PageHero>
      <Breadcrumbs items={["Blog"]} />
      <section className="section-shell grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(([slug, title, cat, text]) => (
          <Link key={slug} to="/blog/$slug" params={{ slug }} className="rounded-md border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">{cat}</span>
            <h2 className="mt-2 font-display text-2xl text-maroon">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}
