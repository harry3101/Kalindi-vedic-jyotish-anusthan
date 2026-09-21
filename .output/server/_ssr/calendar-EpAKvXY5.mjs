import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { r as muhurats, t as festivals } from "./horoscope-FWj93Eil.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendar-EpAKvXY5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
function CalendarPage() {
	const now = /* @__PURE__ */ new Date();
	const [month, setMonth] = (0, import_react.useState)(now.getMonth());
	const [year, setYear] = (0, import_react.useState)(now.getFullYear());
	const first = new Date(year, month, 1).getDay();
	const days = new Date(year, month + 1, 0).getDate();
	const list = festivals[month + 1] ?? [];
	const shift = (n) => {
		const d = new Date(year, month + n, 1);
		setMonth(d.getMonth());
		setYear(d.getFullYear());
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Calendar",
			title: "Astrology Calendar & Muhurats",
			children: "Plan the month ahead with festivals, vrat days and auspicious timings."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Calendar"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell grid gap-8 pb-16 lg:grid-cols-[1.4fr_.6fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-gold bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => shift(-1),
								children: "Previous"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl text-maroon",
								children: [
									monthNames[month],
									" ",
									year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => shift(1),
								children: "Next"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-muted-foreground",
						children: [
							"Sun",
							"Mon",
							"Tue",
							"Wed",
							"Thu",
							"Fri",
							"Sat"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pb-1",
							children: d
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-7 gap-1",
						children: [Array.from({ length: first }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `e${i}`)), Array.from({ length: days }).map((_, i) => {
							const day = i + 1;
							const fest = list.find(([d]) => d === day);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `min-h-16 rounded border p-1 text-left text-xs ${fest ? "border-gold bg-cream" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-sm text-maroon",
									children: day
								}), fest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block leading-tight text-saffron",
									children: fest[1]
								})]
							}, day);
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "grid content-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-2 font-display text-2xl text-maroon",
							children: "Festivals this month"
						}), list.length ? list.map(([d, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-b border-border py-1.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-saffron",
									children: [
										d,
										" ",
										monthNames[month]
									]
								}),
								" — ",
								n
							]
						}, n)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No major festivals listed for this month."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-2 font-display text-2xl text-maroon",
							children: "Muhurat guidance"
						}), muhurats.map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-b border-border py-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [t, ":"] }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: d
								})
							]
						}, t))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { CalendarPage as component };
