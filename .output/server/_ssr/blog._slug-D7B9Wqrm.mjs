import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { t as Route } from "./blog._slug-s5cTZ1yf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-D7B9Wqrm.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const a = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: a.category,
			title: a.title,
			children: a.text
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Blog", a.title] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "section-shell max-w-3xl space-y-4 pb-16 leading-7 text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In classical Vedic astrology, no single placement decides an outcome. The chart is read as a whole: the Lagna and its lord establish the foundation, the relevant house and its significator describe the subject, and the Navamsa (D-9) shows how much strength that promise actually carries." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-maroon",
					children: "What the chart actually shows"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Once the promise is established, the running Vimshottari Dasha tells us when it is likely to unfold. A strong period can bring a long-pending matter to completion quickly; a weak one asks for preparation rather than action. Transits of Saturn and Jupiter then act as triggers, which is why timing often shifts by a few months rather than years." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-maroon",
					children: "Common misunderstandings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Popular descriptions tend to treat doshas as verdicts. In practice, cancellation rules, the strength of the concerned planets and the Navamsa position frequently soften or remove the difficulty entirely. A careful astrologer checks all of these before saying anything alarming." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-maroon",
					children: "Practical steps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Remedies should be simple, affordable and sustainable: a regular mantra, charity aligned with the weak planet, discipline in daily routine, and realistic decisions during difficult periods. Expensive rituals are rarely necessary and are never a substitute for effort." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If this topic concerns you personally, a reading of your own chart will give far more useful direction than any general article." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Book a consultation"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							children: "More articles"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Article as component };
