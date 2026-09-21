import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as reports, o as services } from "./content-cZA_0I1g.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, c as SectionHeading, i as Footer, n as Button, o as PageHero, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-BLniQTTR.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Consultations, reports and focused life readings",
			children: "Pick the format that suits you. Every option is prepared personally from your birth chart."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Services"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Formats",
				title: "How you can consult"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3 lg:grid-cols-5",
				children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: r.slug },
					className: "rounded-md border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md",
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Life Areas",
					title: "Focused astrology services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-card p-5",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-1 text-sm text-muted-foreground",
								children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", b] }, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "hero",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/$slug",
										params: { slug: s.slug },
										children: "Details"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										children: ["Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})]
							})
						]
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { ServicesPage as component };
