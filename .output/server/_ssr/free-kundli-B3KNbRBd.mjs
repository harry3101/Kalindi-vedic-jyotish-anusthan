import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Header, i as Footer, o as PageHero, r as Disclaimer, s as PageShellStyles, t as Breadcrumbs } from "./site-BM2AtIc7.mjs";
import { n as KundliForm } from "./forms-B8tKPOVB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/free-kundli-B3KNbRBd.js
var import_jsx_runtime = require_jsx_runtime();
function FreeKundli() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShellStyles, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Free Tool",
			title: "Free Kundli & Birth Chart",
			children: "Enter accurate birth details to generate your Vedic chart. Your request is saved so our astrologer can review it if you book a consultation."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: ["Free Kundli"] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KundliForm, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-shell pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { FreeKundli as component };
