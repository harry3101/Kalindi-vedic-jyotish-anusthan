import { A as ArrowRight, E as CalendarDays, i as Sun, o as Star, s as Sparkles } from "../_libs/lucide-react.mjs";
import { a as reports, i as rashis, o as services } from "./content-cZA_0I1g.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, c as SectionHeading, i as Footer, l as Stars, n as Button, r as Disclaimer, s as PageShellStyles, u as TrustStrip } from "./site-BM2AtIc7.mjs";
import { i as getPanchang } from "./astrology-BdczybOe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbWFyn8-.js
var import_jsx_runtime = require_jsx_runtime();
var vedic_temple_hero_default = "/assets/vedic-temple-hero-DTVkq4hK.jpg";
function Index() {
	const p = getPanchang(/* @__PURE__ */ new Date());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-maroon text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: vedic_temple_hero_default,
				alt: "Vedic temple at dawn",
				className: "absolute inset-0 size-full object-cover opacity-25"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-enter",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold uppercase tracking-[.2em] text-gold",
							children: "25+ years of Vedic practice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-balance font-display text-4xl leading-tight md:text-6xl",
							children: "Clear answers to life's difficult questions, through authentic Vedic astrology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-7 opacity-85",
							children: "Marriage, career, health, property, children and karmic patterns examined through Lagna, Navamsa (D-9), Dasha and transits — with practical, ethical remedies."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "gold",
								size: "xl",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Book a Consultation"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "xl",
								className: "border-gold bg-transparent text-gold hover:bg-gold hover:text-maroon",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/free-kundli",
									children: "Free Kundli"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 text-sm opacity-85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), " Rated by 4,000+ consulted families"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-enter rounded-lg border border-gold/40 bg-background/95 p-6 text-foreground shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2 text-saffron",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-sm font-bold uppercase tracking-widest",
								children: "Aaj Ka Panchang"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-maroon",
							children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { dateStyle: "full" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
							children: [
								["Tithi", p.tithi],
								["Paksha", p.paksha],
								["Nakshatra", p.nakshatra],
								["Yoga", p.yoga],
								["Sunrise", p.sunrise],
								["Sunset", p.sunset],
								["Moon Rashi", p.moonRashi],
								["Rahu Kaal", p.rahu]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: v
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							className: "mt-3 px-0 text-saffron",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/panchang",
								children: ["Full Panchang ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Services",
				title: "Guidance for every important decision",
				copy: "Each reading begins with your birth chart and Navamsa, never with generic predictions."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "group rounded-md border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mb-3 size-8 text-saffron" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-maroon",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-saffron",
							children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Consultation Options",
					title: "Choose how you would like to be guided"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3 lg:grid-cols-5",
					children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: r.slug },
						className: "rounded-md border border-border bg-card p-5 transition-shadow hover:shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-maroon",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold text-saffron",
								children: r.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: r.text
							})
						]
					}, r.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Free Horoscope",
				title: "Today's guidance for your Rashi",
				copy: "Daily, weekly, monthly and yearly readings for all twelve signs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: rashis.map(([en, hi, sym], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/horoscope/$rashi",
					params: { rashi: en.toLowerCase() },
					className: "rounded-md border border-border bg-card p-4 text-center transition-colors hover:border-gold hover:bg-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-3xl text-saffron",
							children: sym
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "mt-1 block font-display text-lg text-maroon",
							children: en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: hi
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sr-only",
							children: ["Horoscope index ", i + 1]
						})
					]
				}, en))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-maroon py-16 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "section-shell grid gap-4 md:grid-cols-3",
				children: [
					[
						"Free Kundli",
						"Generate a complete Vedic birth chart with planets, houses, dasha and doshas.",
						"/free-kundli"
					],
					[
						"Kundli Milan",
						"Ashtakoot Guna Milan with dosha notes for marriage compatibility.",
						"/kundli-matching"
					],
					[
						"Astrology Calendar",
						"Festivals, muhurats and monthly planning at a glance.",
						"/calendar"
					]
				].map(([t, d, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					className: "rounded-md border border-gold/40 p-6 transition-colors hover:bg-primary-foreground/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mb-3 size-7 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-gold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 opacity-85",
							children: d
						})
					]
				}, to))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonials",
					title: "What consulted families say"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						["Ritika Sharma, Delhi", "The Navamsa reading explained my marriage delay honestly, without fear. The remedies were simple and affordable."],
						["Anand Verma, Aligarh", "I was advised to wait three months before changing jobs. That advice turned out to be exactly right."],
						["Sunita Gupta, Lucknow", "Detailed, patient and ethical. No unnecessary pujas were suggested — only what was truly needed."]
					].map(([n, q]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-md border border-border bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-3 text-sm leading-7 text-muted-foreground",
								children: [
									"\"",
									q,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 font-display text-lg text-maroon",
								children: n
							})
						]
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground md:grid-cols-4",
					children: [
						"Featured in Dainik Jagran",
						"Amar Ujala Astrology Column",
						"Aastha TV Guest Panel",
						"Radio Jyotish Sessions"
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-gold" }), m]
					}, m))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell grid items-center gap-8 rounded-lg border border-gold bg-card p-8 md:grid-cols-[1.2fr_.8fr] md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-maroon md:text-5xl",
						children: "Speak to an astrologer who explains the reasoning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-7 text-muted-foreground",
						children: "Bring your exact birth details and your real question. You will receive a clear reading, the timing involved, and practical steps you can actually follow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "hero",
							size: "xl",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book Consultation"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "xl",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: "View All Services"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-md bg-muted p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: "Appointments available daily, 9 AM – 8 PM IST"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
