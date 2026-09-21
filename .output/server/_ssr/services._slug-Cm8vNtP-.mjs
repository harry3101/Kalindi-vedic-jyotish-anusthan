import { x as CircleCheck } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { t as BookingForm } from "./forms-B8tKPOVB.mjs";
import { t as Route } from "./services._slug-BRxyAQ6E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-Cm8vNtP-.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const s = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Service",
			title: s.title,
			children: s.text
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Services", s.title] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell grid gap-10 pb-16 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-maroon",
						children: "What this reading covers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-7 text-muted-foreground",
						children: "Your Lagna chart and Navamsa are studied together with the running Vimshottari Dasha and current transits. You receive the reasoning behind every conclusion, the likely timing, and remedies that are simple, affordable and optional."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2",
						children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 rounded border border-border bg-card p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-saffron" }), b]
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold text-saffron",
						children: ["Fee: ", s.price]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							children: "Back to all services"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-3xl text-maroon",
				children: "Book now / Get report"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, { defaultService: s.title })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { ServiceDetail as component };
