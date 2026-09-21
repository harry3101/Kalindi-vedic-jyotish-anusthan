import { t as articles } from "./content-cZA_0I1g.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, o as PageHero, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-DCYACbjO.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Articles",
			title: "Vedic astrology, explained without myths",
			children: "Practical writing on the questions people ask most often in consultations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Blog"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3",
			children: articles.map(([slug, title, cat, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug },
				className: "rounded-md border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-widest text-saffron",
						children: cat
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl text-maroon",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: text
					})
				]
			}, slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { BlogIndex as component };
