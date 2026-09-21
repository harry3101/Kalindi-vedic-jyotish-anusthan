import { BriefcaseBusiness, Building2, HandHeart, HeartHandshake, Landmark, Plane, Scale, ScrollText, Sparkles, Stethoscope, TrendingUp, Users } from "lucide-react";

export const siteName = "Divine Guidance Hub";

export const contact = { phone: "9690466195", address: "Pachera, Aligarh 202001", whatsapp: "919690466195" };

export const rashis = [
  ["Aries", "मेष", "♈"], ["Taurus", "वृषभ", "♉"], ["Gemini", "मिथुन", "♊"], ["Cancer", "कर्क", "♋"],
  ["Leo", "सिंह", "♌"], ["Virgo", "कन्या", "♍"], ["Libra", "तुला", "♎"], ["Scorpio", "वृश्चिक", "♏"],
  ["Sagittarius", "धनु", "♐"], ["Capricorn", "मकर", "♑"], ["Aquarius", "कुंभ", "♒"], ["Pisces", "मीन", "♓"],
] as const;

export const services = [
  { slug:"marriage", title:"Marriage Astrology", icon:HeartHandshake, short:"Timing, compatibility, delay and harmony through D-9 analysis.", benefits:["Marriage timing", "Compatibility clarity", "Practical remedies"] },
  { slug:"career", title:"Career & Profession", icon:BriefcaseBusiness, short:"Align work decisions with Dasha, transits and your inherent strengths.", benefits:["Career direction", "Promotion periods", "Job change timing"] },
  { slug:"business", title:"Business Astrology", icon:TrendingUp, short:"Partnership, expansion and risk cycles examined with precision.", benefits:["Growth windows", "Partner analysis", "Decision timing"] },
  { slug:"health", title:"Health Astrology", icon:Stethoscope, short:"Understand sensitive periods and supportive preventive routines.", benefits:["Constitution insights", "Sensitive periods", "Supportive habits"] },
  { slug:"children-education", title:"Children & Education", icon:Users, short:"Guidance for conception, education and a child’s natural aptitude.", benefits:["Education path", "Conception timing", "Parenting insight"] },
  { slug:"court-property", title:"Court & Property", icon:Scale, short:"Assess disputes, property prospects and resolution periods.", benefits:["Dispute timing", "Property prospects", "Risk awareness"] },
  { slug:"foreign-settlement", title:"Foreign Settlement", icon:Plane, short:"Travel, overseas opportunity and settlement combinations.", benefits:["Travel periods", "Settlement potential", "Location themes"] },
  { slug:"past-life", title:"Past Life Reading", icon:Sparkles, short:"Karmic patterns studied through nodes, D-9 and subtle house links.", benefits:["Recurring patterns", "Karmic themes", "Constructive action"] },
  { slug:"birth-time", title:"Birth Time Rectification", icon:ScrollText, short:"Event-based correction when the recorded time is uncertain.", benefits:["Time refinement", "Event validation", "Reliable charts"] },
  { slug:"share-market", title:"Share Market", icon:TrendingUp, short:"Personal risk temperament and favourable decision cycles.", benefits:["Risk profile", "Cycle awareness", "Decision discipline"] },
  { slug:"loan-debt", title:"Loan & Debt", icon:Landmark, short:"Identify pressure periods and a practical route towards stability.", benefits:["Repayment cycles", "Risk periods", "Remedial focus"] },
  { slug:"vastu", title:"Vastu Consultation", icon:Building2, short:"Balance home and workplace spaces with grounded Vastu principles.", benefits:["Space audit", "Non-destructive remedies", "Energy balance"] },
] as const;

export const reports = [
  { slug:"consultation", title:"Personal Consultation", price:"₹2,100 onwards", text:"A focused one-to-one session for your most important life questions." },
  { slug:"online-reports", title:"Detailed Online Report", price:"₹1,100 onwards", text:"A carefully prepared written analysis you can revisit at any time." },
  { slug:"voice-reports", title:"Voice Report", price:"₹1,500 onwards", text:"A personalised audio reading explained clearly in Hindi or English." },
  { slug:"life-reading", title:"Full Life Analysis", price:"₹5,100 onwards", text:"A holistic reading of life themes, timing, strengths and karmic lessons." },
  { slug:"online-puja", title:"Puja & Remedies", price:"On assessment", text:"Ethical, need-based remedies—never fear-led or unnecessarily elaborate." },
] as const;

export const articles = [
  ["marriage-delay", "Why Marriage Gets Delayed in a Horoscope", "Marriage", "A balanced reading goes beyond a single dosha to examine the seventh house, Navamsa and active Dasha."],
  ["career-change", "Is This the Right Time for a Career Change?", "Career", "How Dasha and transit cycles can reveal whether to move, prepare, or consolidate."],
  ["sade-sati", "Sade Sati: Challenge, Maturity and Growth", "Saturn", "A practical guide to Saturn’s seven-and-a-half-year transit without fear or exaggeration."],
  ["manglik-dosha", "Manglik Dosha Beyond the Myths", "Marriage", "Why cancellation rules, chart strength and Navamsa matter before drawing conclusions."],
  ["navamsa", "Why the Navamsa Chart Changes the Reading", "Method", "D-9 reveals the deeper strength and maturity of planets, marriage and dharma."],
  ["birth-time", "When Birth Time Needs Rectification", "Kundli", "Life events can help refine an uncertain birth time and improve predictive reliability."],
  ["rahu-ketu", "Understanding Rahu and Ketu", "Karma", "The lunar nodes show appetite, detachment and repeating karmic patterns in a chart."],
  ["vastu", "Simple Vastu Principles for a Calm Home", "Vastu", "Practical, non-destructive ways to improve light, movement and functional harmony."],
] as const;

export const navItems = [
  ["Home","/"], ["About","/about"], ["Services","/services"], ["Free Kundli","/free-kundli"],
  ["Horoscope","/horoscope"], ["Panchang","/panchang"], ["Matching","/kundli-matching"], ["Blog","/blog"], ["Contact","/contact"],
] as const;