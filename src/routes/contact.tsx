import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { BookingForm } from "@/components/astrology/forms";
import { Button } from "@/components/ui/button";
import { contact, siteName } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Book a Consultation | ${siteName}` },
      { name: "description", content: `Book an astrology consultation at ${contact.address}. Call ${contact.phone} or send your birth details and question through the appointment form.` },
      { property: "og:title", content: `Contact & Booking | ${siteName}` },
      { property: "og:description", content: "Appointment booking, phone and WhatsApp contact for Vedic astrology consultation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Contact" title="Book your consultation">
        Share your exact birth details and your question. We confirm every appointment by phone.
      </PageHero>
      <Breadcrumbs items={["Contact"]} />
      <section className="section-shell grid gap-10 pb-16 lg:grid-cols-[1fr_.7fr]">
        <BookingForm />
        <aside className="grid content-start gap-4">
          <a href={`tel:${contact.phone}`} className="flex items-center gap-3 rounded-md border border-border bg-card p-5"><Phone className="size-6 text-saffron" /><span><strong className="block font-display text-xl text-maroon">{contact.phone}</strong><small className="text-muted-foreground">Call for appointments</small></span></a>
          <div className="flex items-center gap-3 rounded-md border border-border bg-card p-5"><MapPin className="size-6 text-saffron" /><span><strong className="block font-display text-xl text-maroon">{contact.address}</strong><small className="text-muted-foreground">Visit by prior appointment</small></span></div>
          <div className="flex items-center gap-3 rounded-md border border-border bg-card p-5"><Clock className="size-6 text-saffron" /><span><strong className="block font-display text-xl text-maroon">9 AM – 8 PM IST</strong><small className="text-muted-foreground">Open all days</small></span></div>
          <Button variant="hero" size="xl" asChild>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle className="size-5" /> Chat on WhatsApp</a>
          </Button>
          <Disclaimer />
        </aside>
      </section>
      <Footer />
    </>
  );
}
