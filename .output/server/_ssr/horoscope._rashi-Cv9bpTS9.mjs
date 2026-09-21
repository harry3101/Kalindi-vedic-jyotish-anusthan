import { i as rashis, s as siteName } from "./content-cZA_0I1g.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horoscope._rashi-Cv9bpTS9.js
var $$splitComponentImporter = () => import("./horoscope._rashi-C6dzB29p.mjs");
var Route = createFileRoute("/horoscope/$rashi")({
	loader: ({ params }) => {
		const index = rashis.findIndex((r) => r[0].toLowerCase() === params.rashi.toLowerCase());
		if (index < 0) throw notFound();
		return {
			index,
			en: rashis[index][0],
			hi: rashis[index][1],
			sym: rashis[index][2]
		};
	},
	head: ({ loaderData }) => {
		const en = loaderData?.en ?? "Rashi";
		return { meta: [
			{ title: `${en} Horoscope — Daily, Weekly, Monthly & Yearly | ${siteName}` },
			{
				name: "description",
				content: `Free ${en} (${loaderData?.hi ?? ""}) horoscope covering general, career, finance, love and health guidance for today, this week, this month and this year.`
			},
			{
				property: "og:title",
				content: `${en} Horoscope | ${siteName}`
			},
			{
				property: "og:description",
				content: `${en} predictions for career, finance, love and health.`
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
