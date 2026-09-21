import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { r as MatchingForm } from "./forms-B8tKPOVB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kundli-matching-BekFM2uD.js
var import_jsx_runtime = require_jsx_runtime();
function Matching() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Kundli Milan",
			title: "Horoscope Matching for Marriage",
			children: "Ashtakoot Guna Milan with a clear breakdown. A full compatibility reading also reviews Manglik status, Dasha and both Navamsa charts."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Kundli Matching"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchingForm, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Matching as component };
