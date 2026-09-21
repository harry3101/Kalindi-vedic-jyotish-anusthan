import { b as Clock, g as MapPin, m as MessageCircle, p as Phone } from "../_libs/lucide-react.mjs";
import { n as contact } from "./content-cZA_0I1g.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, n as Button, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { t as BookingForm } from "./forms-B8tKPOVB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-5TjXx3Uy.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Book your consultation",
			children: "Share your exact birth details and your question. We confirm every appointment by phone."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Contact"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-shell grid gap-10 pb-16 lg:grid-cols-[1fr_.7fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "grid content-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${contact.phone}`,
						className: "flex items-center gap-3 rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block font-display text-xl text-maroon",
							children: contact.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-muted-foreground",
							children: "Call for appointments"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block font-display text-xl text-maroon",
							children: contact.address
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-muted-foreground",
							children: "Visit by prior appointment"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-md border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-6 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block font-display text-xl text-maroon",
							children: "9 AM – 8 PM IST"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-muted-foreground",
							children: "Open all days"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						size: "xl",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${contact.whatsapp}`,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), " Chat on WhatsApp"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Contact as component };
