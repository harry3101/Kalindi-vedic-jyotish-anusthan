# Premium Vedic Astrology Platform

## Goal
Build a complete, responsive multi-page Vedic astrology website for **Astrologer Name**, focused on Navamsa-based analysis, karmic insight, ethical consultation, and practical remedies. Use the supplied phone number **9690466195** and location **Pachera, Aligarh 202001**. Courses, webinars, and learning products will be excluded everywhere.

## Pages and navigation
- Shared sticky header, mobile navigation, breadcrumbs, consultation call-to-action, WhatsApp button, and full footer.
- Home with premium spiritual introduction, credibility markers, service shortcuts, Rashi horoscope selector, prominent Panchang, free tools, testimonials, media mentions, and booking call-to-action.
- About with 25+ years’ positioning, methodology (Lagna, Navamsa D-9, Dasha, Transit), ethics, expertise, and trust markers.
- Services hub plus focused pages for Consultation, Online Reports, Voice Reports, Life Reading, Online Puja/Remedies, Vastu, Marriage, Career, Business, Health, Children/Education, Court/Property, Foreign Settlement, Past Life, Birth Time Rectification, Share Market, and Loan/Debt.
- Free Kundli generator, Horoscope Matching, Horoscope hub, Panchang, monthly Astrology Calendar, Contact/Booking, Blog index and 6–8 articles, FAQ, Privacy, Terms, and Payment Information.

## Functional experience
- Kundli form validates name, gender, birth date, exact time, place, and contact details; saves every request; then displays a printable/downloadable report with Lagna chart, planetary positions, houses, basic dasha, and dosha summaries.
- Matching form saves both birth profiles and displays a clear Ashtakoot score breakdown with dosha notes.
- Consultation and service booking forms save enquiries and provide confirmation.
- Horoscope selector supports Daily, Weekly, Monthly, and Yearly readings for all 12 Rashis with English and Hindi names and category-based predictions.
- Panchang uses date and location inputs and presents Tithi, Nakshatra, Yoga, Karana, Paksha, celestial timings, Rashis, kaal/muhurat periods, Choghadiya, calendar eras, and month names. The calendar shows festivals and key muhurats.
- Admin-only dashboard lists Kundli requests, matching requests, and consultation bookings with useful status filters.

## Design direction
- Premium editorial-spiritual design using deep saffron, antique gold, deep maroon, cream, and white semantic tokens.
- Elegant serif display typography paired with a clean sans-serif body face.
- Respectful generated imagery of Indian temple architecture, Vedic charts, and celestial symbolism; no generic stock imagery.
- Mobile-first layouts, compact cards, restrained shadows, subtle sacred geometry, smooth entrance transitions, and reduced-motion support.

## Data and accuracy
- Enable Lovable Cloud for secure form storage and admin access.
- Seed realistic horoscope, festival, article, testimonial, media, and service content so every screen is complete immediately.
- Use a reputable astronomy calculation library for deterministic planetary positions and Panchang calculations where supported. Clearly label generated guidance as astrological interpretation rather than guaranteed outcomes.
- City lookup will support a curated list of major Indian cities and typed locations; calculation defaults to India when coordinates are unavailable.

## Security and validation
- Validate every form in the browser and again before saving.
- Apply row-level access rules: public users may submit forms but cannot list submissions; only authenticated admins can view or update them.
- Store admin roles separately and verify them server-side.
- Avoid exposing private contact submissions in public pages or responses.

## SEO and quality
- Add unique titles, descriptions, Open Graph metadata, and suitable structured data to every content route.
- Add accessible labels, keyboard navigation, empty/loading/error/success states, and print styling.
- Verify core flows on desktop and mobile: navigation, Kundli generation, matching, horoscope switching, Panchang/calendar controls, booking submission, WhatsApp action, print view, and admin access.

## Delivery order
1. Enable Cloud, create the visual system, shared navigation, content model, and route structure.
2. Build public pages and generated spiritual assets.
3. Add secure tables, validation, forms, astrology calculations, and admin dashboard.
4. Add metadata and structured data, then verify responsive presentation and all key flows.
