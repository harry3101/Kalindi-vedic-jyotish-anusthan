import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { i as periods, n as getHoroscope } from "./horoscope-FWj93Eil.mjs";
import { t as Route } from "./horoscope._rashi-Cv9bpTS9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horoscope._rashi-C6dzB29p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RashiPage() {
	const { index, en, hi, sym } = Route.useLoaderData();
	const [period, setPeriod] = (0, import_react.useState)("daily");
	const h = getHoroscope(index, period);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Horoscope",
			title: `${en} ${hi} ${sym}`,
			children: "Predictions are based on the Moon sign. For precise guidance, a personal chart reading is recommended."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Horoscope", en] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex flex-wrap gap-2",
					children: periods.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: p === period ? "hero" : "outline",
						onClick: () => setPeriod(p),
						className: "capitalize",
						children: p
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [[
						["General", h.general],
						["Career", h.career],
						["Finance", h.finance],
						["Love & Relationships", h.love],
						["Health", h.health]
					].map(([t, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-maroon",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-muted-foreground",
							children: v
						})]
					}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-gold bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-maroon",
							children: "Lucky today"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-7 text-muted-foreground",
							children: [
								"Number ",
								h.lucky.number,
								" · Colour ",
								h.lucky.colour,
								" · Day ",
								h.lucky.day
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/horoscope",
							children: "All Rashis"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Book a personal reading"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { RashiPage as component };
