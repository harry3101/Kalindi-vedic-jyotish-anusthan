import { s as siteName, t as articles } from "./content-cZA_0I1g.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-s5cTZ1yf.js
var $$splitComponentImporter = () => import("./blog._slug-D7B9Wqrm.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const a = articles.find((x) => x[0] === params.slug);
		if (!a) throw notFound();
		return {
			slug: a[0],
			title: a[1],
			category: a[2],
			text: a[3]
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Article"} | ${siteName}` },
		{
			name: "description",
			content: loaderData?.text ?? "Vedic astrology article"
		},
		{
			property: "og:title",
			content: `${loaderData?.title ?? "Article"} | ${siteName}`
		},
		{
			property: "og:description",
			content: loaderData?.text ?? "Vedic astrology article"
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
