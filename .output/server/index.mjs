globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-CTugHMY4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1202-6+wRMXSSoRduTCzk4o0eDCvAdjs\"",
		"mtime": "2026-09-21T12:24:32.776Z",
		"size": 4610,
		"path": "../public/assets/about-CTugHMY4.js"
	},
	"/assets/arrow-right-C5OljcTP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-Fpe26dDj+TmGmptUYWTWTgg7vcs\"",
		"mtime": "2026-09-21T12:24:32.776Z",
		"size": 156,
		"path": "../public/assets/arrow-right-C5OljcTP.js"
	},
	"/assets/blog._slug-334gS8-1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a22-IX0gtEXuZW3po6as9rlnFu+ABMM\"",
		"mtime": "2026-09-21T12:24:32.792Z",
		"size": 2594,
		"path": "../public/assets/blog._slug-334gS8-1.js"
	},
	"/assets/blog.index-BacdQIHt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"407-a1tF9d3kD0pId1USrzB550GeJSw\"",
		"mtime": "2026-09-21T12:24:32.792Z",
		"size": 1031,
		"path": "../public/assets/blog.index-BacdQIHt.js"
	},
	"/assets/astrology-79Id8yr7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e024-PRBqWuYYqe+eqWQbaas3t/KJvQ4\"",
		"mtime": "2026-09-21T12:24:32.792Z",
		"size": 57380,
		"path": "../public/assets/astrology-79Id8yr7.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"31b-7A4LJ4qSxzxp/8ck6CWIEaaBvt8\"",
		"mtime": "2026-09-21T01:23:38.168Z",
		"size": 795,
		"path": "../public/favicon.png"
	},
	"/assets/calendar-CsWvLXu_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be9-2pbubucpjmpX3TXdZAMp5BhBHrU\"",
		"mtime": "2026-09-21T12:24:32.792Z",
		"size": 3049,
		"path": "../public/assets/calendar-CsWvLXu_.js"
	},
	"/assets/contact-CvIRXsIs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"885-LMkP6+nnZaGXjgrph1M6vd2fmdo\"",
		"mtime": "2026-09-21T12:24:32.794Z",
		"size": 2181,
		"path": "../public/assets/contact-CvIRXsIs.js"
	},
	"/assets/content-BfWWBSH4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0f1-0whYKA01MvsAFiX0y/Opl8HCzVY\"",
		"mtime": "2026-09-21T12:24:32.794Z",
		"size": 45297,
		"path": "../public/assets/content-BfWWBSH4.js"
	},
	"/assets/dist-Dt9Yw59G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29b-6tf8nn6heDZEuxVyj5A7AM83KJI\"",
		"mtime": "2026-09-21T12:24:32.794Z",
		"size": 667,
		"path": "../public/assets/dist-Dt9Yw59G.js"
	},
	"/assets/dist-LuZ_Rdd_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38ad-edeFd3ysSJiDWasJ/OHjPNty7Iw\"",
		"mtime": "2026-09-21T12:24:32.794Z",
		"size": 14509,
		"path": "../public/assets/dist-LuZ_Rdd_.js"
	},
	"/assets/faq-DGrJkoz3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e81-nbNlBbyBO8h0bcS911M3FYQ3Obg\"",
		"mtime": "2026-09-21T12:24:32.794Z",
		"size": 7809,
		"path": "../public/assets/faq-DGrJkoz3.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-21T01:23:38.186Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/horoscope-CoDxN6UE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12e1-ZyxVddiHkeK484ITLe5czLohSE8\"",
		"mtime": "2026-09-21T12:24:32.796Z",
		"size": 4833,
		"path": "../public/assets/horoscope-CoDxN6UE.js"
	},
	"/assets/free-kundli-C4iYENLy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c6-qQXEZOqxa9WCjtrPMHzG7fV1Iug\"",
		"mtime": "2026-09-21T12:24:32.796Z",
		"size": 710,
		"path": "../public/assets/free-kundli-C4iYENLy.js"
	},
	"/assets/forms-Disqa-kp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c4a-lX1Bn4sHZPJEf6St6wUtt0G0LSU\"",
		"mtime": "2026-09-21T12:24:32.796Z",
		"size": 80970,
		"path": "../public/assets/forms-Disqa-kp.js"
	},
	"/assets/horoscope.index-CJnO6ar5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499-zD0+tQXl5T/EG3okLdPWUuoM5XM\"",
		"mtime": "2026-09-21T12:24:32.798Z",
		"size": 1177,
		"path": "../public/assets/horoscope.index-CJnO6ar5.js"
	},
	"/assets/horoscope._rashi-CSNaYM07.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"805-EtH4gtPA6vvzSFtQyJj8mEZrLc8\"",
		"mtime": "2026-09-21T12:24:32.798Z",
		"size": 2053,
		"path": "../public/assets/horoscope._rashi-CSNaYM07.js"
	},
	"/assets/kundli-matching-Cbc51DvD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cc-G09qMBT8xwa4LwhoxPwYK5Q64LQ\"",
		"mtime": "2026-09-21T12:24:32.806Z",
		"size": 716,
		"path": "../public/assets/kundli-matching-Cbc51DvD.js"
	},
	"/assets/panchang-Cka9UwDD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f6-aHDMF/VLjU2dNyjRYtt5RNMFcE8\"",
		"mtime": "2026-09-21T12:24:32.807Z",
		"size": 4342,
		"path": "../public/assets/panchang-Cka9UwDD.js"
	},
	"/assets/label-KRG1-BJm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499-BpW4IoxEpoXsHZPFA05DGapwkpM\"",
		"mtime": "2026-09-21T12:24:32.807Z",
		"size": 1177,
		"path": "../public/assets/label-KRG1-BJm.js"
	},
	"/assets/routes-DSD5vO3x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2692-CDQAql5tQPZPBmGddRcROR+D4O0\"",
		"mtime": "2026-09-21T12:24:32.807Z",
		"size": 9874,
		"path": "../public/assets/routes-DSD5vO3x.js"
	},
	"/assets/services.index-BakZGBYe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90c-wlFJu0uJF0Z7xGuV4AXCRbGrysc\"",
		"mtime": "2026-09-21T12:24:32.809Z",
		"size": 2316,
		"path": "../public/assets/services.index-BakZGBYe.js"
	},
	"/assets/kundli-method-dZWFzqWG.jpg": {
		"type": "image/jpeg",
		"etag": "\"299ad-LCpzhB0d+U2umsJCWOKZqI7KIak\"",
		"mtime": "2026-09-21T12:24:32.809Z",
		"size": 170413,
		"path": "../public/assets/kundli-method-dZWFzqWG.jpg"
	},
	"/assets/index-CDTLEq2g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c007-+VlXthmnxOTllvsvzBD0fVanFCs\"",
		"mtime": "2026-09-21T12:24:32.776Z",
		"size": 573447,
		"path": "../public/assets/index-CDTLEq2g.js"
	},
	"/assets/services._slug-D6Nj2Uki.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"681-aHKLORe17FovZMvx/h+jWSBrXhs\"",
		"mtime": "2026-09-21T12:24:32.809Z",
		"size": 1665,
		"path": "../public/assets/services._slug-D6Nj2Uki.js"
	},
	"/assets/styles-CxzbbuTT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14269-dZxFjwJywGBPHSvOEzUgEiVV82A\"",
		"mtime": "2026-09-21T12:24:32.809Z",
		"size": 82537,
		"path": "../public/assets/styles-CxzbbuTT.css"
	},
	"/assets/site-DVINBBmv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f9b-dBWoB3SA7WVXYwbZ/7ho4Be/bhw\"",
		"mtime": "2026-09-21T12:24:32.809Z",
		"size": 40859,
		"path": "../public/assets/site-DVINBBmv.js"
	},
	"/assets/vedic-temple-hero-DTVkq4hK.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f810-gR1uHINp5LeCvXWeybczYOztfKY\"",
		"mtime": "2026-09-21T12:24:32.814Z",
		"size": 194576,
		"path": "../public/assets/vedic-temple-hero-DTVkq4hK.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_nPx6og = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_nPx6og
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
