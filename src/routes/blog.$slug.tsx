import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { Button } from "@/components/ui/button";
import { articles, siteName } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = articles.find((x) => x[0] === params.slug);
    if (!a) throw notFound();
    return { slug: a[0], title: a[1], category: a[2], text: a[3] };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} | ${siteName}` },
      { name: "description", content: loaderData?.text ?? "Vedic astrology article" },
      { property: "og:title", content: `${loaderData?.title ?? "Article"} | ${siteName}` },
      { property: "og:description", content: loaderData?.text ?? "Vedic astrology article" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Article,
});

function Article() {
  const a = Route.useLoaderData();
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow={a.category} title={a.title}>{a.text}</PageHero>
      <Breadcrumbs items={["Blog", a.title]} />
      <article className="section-shell max-w-3xl space-y-4 pb-16 leading-7 text-muted-foreground">
        <p>In classical Vedic astrology, no single placement decides an outcome. The chart is read as a whole: the Lagna and its lord establish the foundation, the relevant house and its significator describe the subject, and the Navamsa (D-9) shows how much strength that promise actually carries.</p>
        <h2 className="font-display text-3xl text-maroon">What the chart actually shows</h2>
        <p>Once the promise is established, the running Vimshottari Dasha tells us when it is likely to unfold. A strong period can bring a long-pending matter to completion quickly; a weak one asks for preparation rather than action. Transits of Saturn and Jupiter then act as triggers, which is why timing often shifts by a few months rather than years.</p>
        <h2 className="font-display text-3xl text-maroon">Common misunderstandings</h2>
        <p>Popular descriptions tend to treat doshas as verdicts. In practice, cancellation rules, the strength of the concerned planets and the Navamsa position frequently soften or remove the difficulty entirely. A careful astrologer checks all of these before saying anything alarming.</p>
        <h2 className="font-display text-3xl text-maroon">Practical steps</h2>
        <p>Remedies should be simple, affordable and sustainable: a regular mantra, charity aligned with the weak planet, discipline in daily routine, and realistic decisions during difficult periods. Expensive rituals are rarely necessary and are never a substitute for effort.</p>
        <p>If this topic concerns you personally, a reading of your own chart will give far more useful direction than any general article.</p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Button variant="hero" asChild><Link to="/contact">Book a consultation</Link></Button>
          <Button variant="outline" asChild><Link to="/blog">More articles</Link></Button>
        </div>
        <Disclaimer />
      </article>
      <Footer />
    </>
  );
}
