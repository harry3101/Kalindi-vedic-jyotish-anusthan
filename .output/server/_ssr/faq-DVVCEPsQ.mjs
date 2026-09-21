import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as contact } from "./content-cZA_0I1g.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header$1, d as cn, i as Footer, o as PageHero, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { t as faqs } from "./faq-qpMsTOro.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DVVCEPsQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header$1, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "FAQ",
			title: "Questions people ask before booking",
			children: [
				"If your question is not answered here, call ",
				contact.phone,
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["FAQ"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell max-w-3xl pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: faqs.map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `i${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left font-display text-xl text-maroon",
						children: q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "leading-7 text-muted-foreground",
						children: a
					})]
				}, q))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Faq as component };
