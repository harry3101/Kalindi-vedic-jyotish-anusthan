import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles } from "@/components/astrology/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { contact, siteName } from "@/lib/content";

const faqs: [string, string][] = [
  ["What details do I need for a consultation?", "Your full name, exact date of birth, as accurate a birth time as possible, and the place of birth. If the time is uncertain, birth time rectification can be done using major life events."],
  ["How long does a consultation take?", "A focused session runs 30–45 minutes. A full life analysis takes longer and is usually delivered as a written or voice report along with a call."],
  ["Do you guarantee results?", "No. Astrology offers guidance on timing, tendencies and suitable action. It is not a substitute for medical, legal or financial advice."],
  ["Are remedies expensive?", "Remedies are kept simple and affordable — mantra, charity, discipline and routine. We do not recommend costly rituals as a condition of help."],
  ["Is my personal information kept private?", "Yes. Birth details and consultation notes are stored securely and are never shared or sold."],
  ["Can I consult in Hindi?", "Yes. Consultations are available in both Hindi and English."],
  ["How do I pay?", "Payment details are shared after your appointment is confirmed. See the Payment Information page for accepted methods."],
  ["How soon will I get my report?", "Written and voice reports are usually delivered within 3–5 working days of receiving complete birth details."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `Frequently Asked Questions | ${siteName}` },
      { name: "description", content: "Answers about birth details required, consultation duration, fees, remedies, privacy, languages and report delivery times." },
      { property: "og:title", content: `FAQ | ${siteName}` },
      { property: "og:description", content: "Common questions about Vedic astrology consultations and reports." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="FAQ" title="Questions people ask before booking">
        If your question is not answered here, call {contact.phone}.
      </PageHero>
      <Breadcrumbs items={["FAQ"]} />
      <section className="section-shell max-w-3xl pb-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`i${i}`}>
              <AccordionTrigger className="text-left font-display text-xl text-maroon">{q}</AccordionTrigger>
              <AccordionContent className="leading-7 text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <Footer />
    </>
  );
}
