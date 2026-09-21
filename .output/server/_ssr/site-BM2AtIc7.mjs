import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as ChevronRight, c as ShieldCheck, g as MapPin, h as Menu, m as MessageCircle, o as Star, p as Phone, t as X } from "../_libs/lucide-react.mjs";
import { n as contact, r as navItems } from "./content-cZA_0I1g.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-BM2AtIc7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			gold: "bg-gold text-maroon shadow-sm hover:bg-gold/85",
			hero: "bg-primary text-primary-foreground shadow-lg hover:bg-saffron",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			xl: "h-12 px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-maroon text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-shell flex h-8 items-center justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), "Pachera, Aligarh"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${contact.phone}`,
						className: "flex items-center gap-1.5 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), contact.phone]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell flex h-18 items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-full border-2 border-gold bg-maroon text-xl text-gold",
							children: "ॐ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block font-display text-xl leading-none text-maroon",
							children: "Astrologer Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Vedic Astrology"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-5 lg:flex",
						children: navItems.map(([n, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to,
							className: "text-sm font-semibold text-foreground hover:text-saffron",
							activeProps: { className: "text-saffron" },
							children: n
						}, to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "hero",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book Consultation"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "lg:hidden",
						"aria-label": "Open menu",
						onClick: () => setOpen(!open),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "section-shell grid gap-1 border-t border-border py-3 lg:hidden",
				children: navItems.map(([n, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted",
					children: n
				}, to))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Namaste, I would like to book an astrology consultation.")}`,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 bg-maroon text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid gap-10 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex items-center gap-2 font-display text-2xl text-gold",
					children: "ॐ Astrologer Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-6 opacity-80",
					children: "Ethical Vedic guidance rooted in Lagna, Navamsa, Dasha and transits."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-lg text-gold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm opacity-85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/free-kundli",
							children: "Free Kundli"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/panchang",
							children: "Aaj Ka Panchang"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-lg text-gold",
					children: "Guidance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm opacity-85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/horoscope",
							children: "Horoscope"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kundli-matching",
							children: "Kundli Milan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							children: "Articles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							children: "FAQ"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-lg text-gold",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-7 opacity-85",
						children: [
							contact.phone,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							contact.address
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/payment-info",
								children: "Payments"
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Astrologer Name. Astrology offers guidance, not guaranteed outcomes."
			]
		})]
	});
}
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-shell flex items-center gap-2 py-5 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: "Home"
		}), items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }), i]
		}, i))]
	});
}
function PageHero({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-maroon text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[.18em] text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-4xl text-balance text-4xl font-semibold md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 max-w-2xl text-base leading-7 opacity-85",
					children
				})
			]
		})
	});
}
function SectionHeading({ eyebrow, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-10 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold uppercase tracking-[.18em] text-saffron",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-balance text-3xl font-semibold text-maroon md:text-5xl",
				children: title
			}),
			copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-7 text-muted-foreground",
				children: copy
			})
		]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-shell grid grid-cols-2 gap-5 py-7 text-center md:grid-cols-4",
			children: [
				["25+", "Years of practice"],
				["18,000+", "Kundlis analysed"],
				["D-9", "Navamsa-led method"],
				["100%", "Ethical guidance"]
			].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-display text-3xl text-maroon",
				children: a
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs text-muted-foreground",
				children: b
			})] }, b))
		})
	});
}
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-0.5 text-gold",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-current" }, i))
	});
}
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 rounded-md border border-border bg-muted p-4 text-xs leading-5 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 shrink-0 text-saffron" }), "Astrological analysis is interpretive guidance. For medical, legal, or financial decisions, consult a qualified professional."]
	});
}
function PageShellStyles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.section-shell{width:100%;max-width:1200px;margin:0 auto;padding:0 1rem}` });
}
//#endregion
export { Header as a, SectionHeading as c, cn as d, Footer as i, Stars as l, Button as n, PageHero as o, Disclaimer as r, PageShellStyles as s, Breadcrumbs as t, TrustStrip as u };
