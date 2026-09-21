import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as contact, s as siteName } from "./content-cZA_0I1g.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route$12 } from "./blog._slug-s5cTZ1yf.mjs";
import { t as faqs } from "./faq-qpMsTOro.mjs";
import { t as Route$13 } from "./horoscope._rashi-Cv9bpTS9.mjs";
import { t as Route$14 } from "./services._slug-BRxyAQ6E.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BSM3_exo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CxzbbuTT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-DbWFyn8-.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: `${siteName} | Vedic Astrology Consultation & Free Kundli` },
		{
			name: "description",
			content: "Trusted Vedic astrology guidance with Navamsa-based analysis: free kundli, horoscope matching, daily Panchang, horoscopes and ethical remedies."
		},
		{
			property: "og:title",
			content: `${siteName} | Vedic Astrology Consultation`
		},
		{
			property: "og:description",
			content: "Navamsa-led Vedic astrology consultation, free kundli, Panchang and horoscope matching."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-DM7BX45I.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: `About the Astrologer | ${siteName}` },
		{
			name: "description",
			content: "25+ years of Vedic practice grounded in Lagna, Navamsa (D-9), Dasha and transit analysis, with an ethical, fear-free approach to remedies."
		},
		{
			property: "og:title",
			content: `About | ${siteName}`
		},
		{
			property: "og:description",
			content: "Methodology, expertise and ethics behind our Vedic astrology consultations."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./calendar-EpAKvXY5.mjs");
var Route$8 = createFileRoute("/calendar")({
	head: () => ({ meta: [
		{ title: `Hindu Astrology Calendar — Festivals & Muhurats | ${siteName}` },
		{
			name: "description",
			content: "Monthly Hindu calendar with festivals, vrat days and guidance on auspicious muhurats for marriage, griha pravesh, vehicles and new business."
		},
		{
			property: "og:title",
			content: `Astrology Calendar | ${siteName}`
		},
		{
			property: "og:description",
			content: "Monthly festivals and auspicious muhurat guidance."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-5TjXx3Uy.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: `Book a Consultation | ${siteName}` },
		{
			name: "description",
			content: `Book an astrology consultation at ${contact.address}. Call ${contact.phone} or send your birth details and question through the appointment form.`
		},
		{
			property: "og:title",
			content: `Contact & Booking | ${siteName}`
		},
		{
			property: "og:description",
			content: "Appointment booking, phone and WhatsApp contact for Vedic astrology consultation."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faq-DVVCEPsQ.mjs");
var Route$6 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: `Frequently Asked Questions | ${siteName}` },
			{
				name: "description",
				content: "Answers about birth details required, consultation duration, fees, remedies, privacy, languages and report delivery times."
			},
			{
				property: "og:title",
				content: `FAQ | ${siteName}`
			},
			{
				property: "og:description",
				content: "Common questions about Vedic astrology consultations and reports."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map(([q, a]) => ({
					"@type": "Question",
					name: q,
					acceptedAnswer: {
						"@type": "Answer",
						text: a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./free-kundli-B3KNbRBd.mjs");
var Route$5 = createFileRoute("/free-kundli")({
	head: () => ({ meta: [
		{ title: `Free Kundli & Birth Chart Generator | ${siteName}` },
		{
			name: "description",
			content: "Generate a free Vedic Kundli with Lagna chart, planetary positions, houses, dasha overview and Manglik, Kaal Sarp and Pitra dosha notes."
		},
		{
			property: "og:title",
			content: `Free Kundli Generator | ${siteName}`
		},
		{
			property: "og:description",
			content: "Free online Vedic birth chart with planets, houses, dasha and dosha analysis."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./kundli-matching-BekFM2uD.mjs");
var Route$4 = createFileRoute("/kundli-matching")({
	head: () => ({ meta: [
		{ title: `Kundli Matching & Ashtakoot Guna Milan | ${siteName}` },
		{
			name: "description",
			content: "Free horoscope matching with Ashtakoot Guna Milan score, category breakdown and dosha notes for marriage compatibility."
		},
		{
			property: "og:title",
			content: `Kundli Milan | ${siteName}`
		},
		{
			property: "og:description",
			content: "Ashtakoot Guna Milan score with detailed breakdown and dosha guidance."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./panchang-CkgGdbBi.mjs");
var Route$3 = createFileRoute("/panchang")({
	head: () => ({ meta: [
		{ title: `Aaj Ka Panchang — Tithi, Nakshatra, Rahu Kaal & Choghadiya | ${siteName}` },
		{
			name: "description",
			content: "Today's Panchang with Tithi, Nakshatra, Yoga, Karana, Paksha, sunrise, sunset, moonrise, moonset, Rahu Kaal, Abhijit Muhurat and day/night Choghadiya."
		},
		{
			property: "og:title",
			content: `Aaj Ka Panchang | ${siteName}`
		},
		{
			property: "og:description",
			content: "Daily Panchang with muhurats, kaal periods and Choghadiya by city."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog.index-DCYACbjO.mjs");
var Route$2 = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: `Vedic Astrology Articles & Insights | ${siteName}` },
		{
			name: "description",
			content: "Articles on marriage delay, career change, Sade Sati, Manglik dosha, Navamsa, birth time rectification, Rahu-Ketu and practical Vastu."
		},
		{
			property: "og:title",
			content: `Astrology Blog | ${siteName}`
		},
		{
			property: "og:description",
			content: "Clear, myth-free writing on Vedic astrology topics."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./horoscope.index-DFDZILkh.mjs");
var Route$1 = createFileRoute("/horoscope/")({
	head: () => ({ meta: [
		{ title: `Free Daily, Weekly, Monthly & Yearly Horoscope | ${siteName}` },
		{
			name: "description",
			content: "Read free horoscopes for all 12 Rashis in English and Hindi, covering career, finance, love, health and general guidance."
		},
		{
			property: "og:title",
			content: `Horoscope | ${siteName}`
		},
		{
			property: "og:description",
			content: "Daily, weekly, monthly and yearly Rashi predictions."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.index-BLniQTTR.mjs");
var Route = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: `Astrology Services & Reports | ${siteName}` },
		{
			name: "description",
			content: "Consultation, online and voice reports, full life analysis, puja and remedies, Vastu, plus focused readings for marriage, career, health, property and more."
		},
		{
			property: "og:title",
			content: `Services | ${siteName}`
		},
		{
			property: "og:description",
			content: "Vedic astrology consultation, reports and focused life-area readings."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var CalendarRoute = Route$8.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var FaqRoute = Route$6.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$11
});
var FreeKundliRoute = Route$5.update({
	id: "/free-kundli",
	path: "/free-kundli",
	getParentRoute: () => Route$11
});
var KundliMatchingRoute = Route$4.update({
	id: "/kundli-matching",
	path: "/kundli-matching",
	getParentRoute: () => Route$11
});
var PanchangRoute = Route$3.update({
	id: "/panchang",
	path: "/panchang",
	getParentRoute: () => Route$11
});
var BlogIndexRoute = Route$2.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$11
});
var BlogSlugRoute = Route$12.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$11
});
var HoroscopeIndexRoute = Route$1.update({
	id: "/horoscope/",
	path: "/horoscope/",
	getParentRoute: () => Route$11
});
var HoroscopeRashiRoute = Route$13.update({
	id: "/horoscope/$rashi",
	path: "/horoscope/$rashi",
	getParentRoute: () => Route$11
});
var ServicesIndexRoute = Route.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CalendarRoute,
	ContactRoute,
	FaqRoute,
	FreeKundliRoute,
	KundliMatchingRoute,
	PanchangRoute,
	BlogSlugRoute,
	HoroscopeRashiRoute,
	ServicesSlugRoute: Route$14.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$11
	}),
	BlogIndexRoute,
	HoroscopeIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
