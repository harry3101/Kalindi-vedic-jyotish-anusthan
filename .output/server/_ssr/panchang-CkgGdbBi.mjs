import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { n as Label, t as Input } from "./label-ve2ju-pW.mjs";
import { i as getPanchang, n as cityOptions, t as choghadiya } from "./astrology-BdczybOe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panchang-CkgGdbBi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PanchangPage() {
	const [date, setDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [city, setCity] = (0, import_react.useState)("Aligarh");
	const place = cityOptions.find((c) => c.name === city) ?? cityOptions[0];
	const d = /* @__PURE__ */ new Date(`${date}T06:00:00+05:30`);
	const p = getPanchang(d, place.lat, place.lng);
	const ch = choghadiya(d);
	const rows = [
		["Tithi", p.tithi],
		["Paksha", p.paksha],
		["Nakshatra", p.nakshatra],
		["Yoga", p.yoga],
		["Karana", p.karana],
		["Moon Rashi (चंद्र राशि)", p.moonRashi],
		["Sun Rashi (सूर्य राशि)", p.sunRashi],
		["Vikram Samvat", p.vikram],
		["Shaka Samvat", p.shaka],
		["Month (मास)", p.month]
	];
	const times = [
		["Sunrise (सूर्योदय)", p.sunrise],
		["Sunset (सूर्यास्त)", p.sunset],
		["Moonrise (चंद्रोदय)", p.moonrise],
		["Moonset (चंद्रास्त)", p.moonset]
	];
	const kaal = [
		["Rahu Kaal", p.rahu],
		["Yamaganda", p.yamaganda],
		["Gulika Kaal", p.gulika],
		["Abhijit Muhurat", p.abhijit],
		["Brahma Muhurat", p.brahma]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Panchang",
			title: "Aaj Ka Panchang",
			children: "Choose a date and city to view the complete daily Panchang, auspicious muhurats and Choghadiya."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Panchang"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pdate",
								children: "Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pdate",
								type: "date",
								value: date,
								onChange: (e) => setDate(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pcity",
									children: "City"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "pcity",
									list: "pcities",
									value: city,
									onChange: (e) => setCity(e.target.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "pcities",
									children: cityOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c.name }, c.name))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								setDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
								setCity("Aligarh");
							},
							children: "Today"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Panchang elements",
							rows
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Celestial timings",
							rows: times
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Kaal & Muhurat",
							rows: kaal
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoghadiyaTable, {
						title: "Day Choghadiya",
						items: ch.day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoghadiyaTable, {
						title: "Night Choghadiya",
						items: ch.night
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/calendar",
							children: "Astrology Calendar"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Ask for a muhurat"
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
function Panel({ title, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-gold bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 font-display text-2xl text-maroon",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid gap-2 text-sm",
			children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-3 border-b border-border pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-semibold",
					children: v
				})]
			}, k))
		})]
	});
}
function ChoghadiyaTable({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 font-display text-2xl text-maroon",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-xs uppercase text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-2",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-2",
						children: "Nature"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-2",
						children: "Time"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-1.5 font-semibold",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: c.nature === "Good" ? "text-saffron" : c.nature === "Neutral" ? "text-muted-foreground" : "text-destructive",
						children: c.nature
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-1.5",
						children: c.time
					})
				]
			}, c.time)) })]
		})]
	});
}
//#endregion
export { PanchangPage as component };
