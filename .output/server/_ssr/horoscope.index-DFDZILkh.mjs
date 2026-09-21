import { i as rashis } from "./content-cZA_0I1g.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, c as SectionHeading, i as Footer, o as PageHero, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horoscope.index-DFDZILkh.js
var import_jsx_runtime = require_jsx_runtime();
function HoroscopeHub() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Horoscope",
			title: "Free Rashi Horoscope",
			children: "Choose your Moon sign for daily, weekly, monthly and yearly guidance across career, finance, love and health."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Horoscope"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Select your Rashi",
				title: "All twelve signs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: rashis.map(([en, hi, sym]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/horoscope/$rashi",
					params: { rashi: en.toLowerCase() },
					className: "rounded-md border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-4xl text-saffron",
							children: sym
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "mt-2 block font-display text-2xl text-maroon",
							children: en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: hi
						})
					]
				}, en))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { HoroscopeHub as component };
