import { a as reports, o as services, s as siteName } from "./content-cZA_0I1g.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BRxyAQ6E.js
var $$splitComponentImporter = () => import("./services._slug-Cm8vNtP-.mjs");
function findService(slug) {
	const s = services.find((x) => x.slug === slug);
	if (s) return {
		title: s.title,
		text: s.short,
		benefits: [...s.benefits],
		price: "On assessment"
	};
	const r = reports.find((x) => x.slug === slug);
	if (r) return {
		title: r.title,
		text: r.text,
		benefits: [
			"Personally prepared",
			"Clear timing guidance",
			"Practical remedies"
		],
		price: r.price
	};
	return null;
}
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = findService(params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => {
		const title = loaderData?.title ?? "Service";
		return { meta: [
			{ title: `${title} | ${siteName}` },
			{
				name: "description",
				content: `${title}: ${loaderData?.text ?? "Vedic astrology guidance"} Book a consultation or request a detailed report.`
			},
			{
				property: "og:title",
				content: `${title} | ${siteName}`
			},
			{
				property: "og:description",
				content: loaderData?.text ?? "Vedic astrology guidance"
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
