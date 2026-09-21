import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as ChevronUp, T as Check, d as Printer, w as ChevronDown, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as services } from "./content-cZA_0I1g.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as cn, n as Button } from "./site-BM2AtIc7.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as supabase } from "./client-Bxc8_G9k.mjs";
import { n as Label, t as Input } from "./label-ve2ju-pW.mjs";
import { a as matchKundli, n as cityOptions, r as generateKundli } from "./astrology-BdczybOe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-B8tKPOVB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var field = "grid gap-2";
function KundliForm() {
	const [result, setResult] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setError("");
		const f = new FormData(e.currentTarget);
		const input = {
			name: String(f.get("name")),
			gender: String(f.get("gender")),
			birthDate: String(f.get("birthDate")),
			birthTime: String(f.get("birthTime")),
			birthPlace: String(f.get("birthPlace"))
		};
		const generated = generateKundli(input);
		const { error: dbError } = await supabase.from("kundli_requests").insert({
			name: input.name,
			gender: input.gender,
			birth_date: input.birthDate,
			birth_time: input.birthTime,
			birth_place: input.birthPlace,
			email: String(f.get("email") || "") || null,
			phone: String(f.get("phone") || "") || null,
			generated_data: generated
		});
		setBusy(false);
		if (dbError) {
			setError("We could not save your request. Please try again.");
			return;
		}
		setResult(generated);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "grid gap-4 rounded-md border border-border bg-card p-5 shadow-sm md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${field} md:col-span-2`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						required: true,
						minLength: 2,
						maxLength: 100
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Gender" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						name: "gender",
						required: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "male",
								children: "Male"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "female",
								children: "Female"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "other",
								children: "Other"
							})
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "birthDate",
						children: "Date of birth"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "birthDate",
						name: "birthDate",
						type: "date",
						required: true,
						max: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "birthTime",
						children: "Exact birth time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "birthTime",
						name: "birthTime",
						type: "time",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "birthPlace",
							children: "Place of birth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "birthPlace",
							name: "birthPlace",
							list: "cities",
							required: true,
							maxLength: 160
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
							id: "cities",
							children: cityOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c.name }, c.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						maxLength: 255
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: field,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						name: "phone",
						type: "tel",
						pattern: "[0-9+ -]{7,20}"
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive md:col-span-2",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "md:col-span-2",
					size: "xl",
					disabled: busy,
					children: busy ? "Preparing chart…" : "Generate My Kundli"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KundliResult, { result }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid min-h-96 place-items-center rounded-md border border-dashed border-border bg-muted/50 p-8 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-7xl text-gold",
					children: "ॐ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-2xl text-maroon",
					children: "Your Vedic chart appears here"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Enter exact birth details for the most useful result."
				})
			] })
		}) })]
	});
}
function KundliResult({ result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-gold bg-card p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase text-saffron",
					children: "Generated successfully"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-3xl text-maroon",
					children: ["Lagna: ", result.lagna]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					onClick: () => window.print(),
					"aria-label": "Print kundli",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: result.planets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded border border-border bg-muted p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-muted-foreground",
						children: [
							p.sign,
							" · ",
							p.degree,
							" · H",
							p.house
						]
					})]
				}, p.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl text-maroon",
				children: "Basic Dasha overview"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: result.dasha
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl text-maroon",
				children: "Dosha review"
			}),
			Object.entries(result.doshas).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border-b border-border py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [k, ":"] }),
					" ",
					v
				]
			}, k))
		]
	});
}
function MatchingForm() {
	const [result, setResult] = (0, import_react.useState)(null);
	async function submit(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const boy = {
			name: String(f.get("boyName")),
			birthDate: String(f.get("boyDate")),
			birthTime: String(f.get("boyTime")),
			birthPlace: String(f.get("boyPlace"))
		};
		const girl = {
			name: String(f.get("girlName")),
			birthDate: String(f.get("girlDate")),
			birthTime: String(f.get("girlTime")),
			birthPlace: String(f.get("girlPlace"))
		};
		const generated = matchKundli(boy, girl);
		await supabase.from("matching_requests").insert({
			requester_name: String(f.get("requester")),
			email: String(f.get("email") || "") || null,
			phone: String(f.get("phone") || "") || null,
			boy_details: boy,
			girl_details: girl,
			generated_data: generated
		});
		setResult(generated);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "rounded-md border border-border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						required: true,
						name: "requester",
						placeholder: "Your name",
						minLength: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						placeholder: "Phone",
						pattern: "[0-9+ -]{7,20}"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						placeholder: "Email",
						className: "sm:col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonFields, {
						prefix: "boy",
						title: "Boy's details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonFields, {
						prefix: "girl",
						title: "Girl's details"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5 w-full",
				size: "xl",
				children: "Check Guna Milan"
			})]
		}), result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md border border-gold bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase text-saffron",
					children: "Ashtakoot score"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-7xl text-maroon",
					children: [result.total, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl text-muted-foreground",
						children: "/36"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: result.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-b border-border py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: i.score })]
					}, i.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-muted-foreground",
					children: "A complete compatibility reading also examines Manglik status, Dasha compatibility, seventh houses and both Navamsa charts."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center rounded-md bg-maroon p-8 text-center text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl text-gold",
					children: "36 गुण"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-2xl",
					children: "Compatibility, with context"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm opacity-75",
					children: "Guna Milan is a starting point, not the entire marriage decision."
				})
			] })
		})]
	});
}
function PersonFields({ prefix, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "grid gap-3 rounded border border-border p-4 sm:col-span-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "px-2 font-display text-xl text-maroon",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				required: true,
				name: `${prefix}Name`,
				placeholder: "Name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				required: true,
				name: `${prefix}Date`,
				type: "date"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				required: true,
				name: `${prefix}Time`,
				type: "time"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				required: true,
				name: `${prefix}Place`,
				placeholder: "Place of birth"
			})
		]
	});
}
function BookingForm({ defaultService = "Personal Consultation" }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		const f = new FormData(e.currentTarget);
		const { error } = await supabase.from("consultation_requests").insert({
			name: String(f.get("name")),
			phone: String(f.get("phone")),
			email: String(f.get("email") || "") || null,
			service: String(f.get("service")),
			preferred_date: String(f.get("date") || "") || null,
			preferred_time: String(f.get("time") || "") || null,
			message: String(f.get("message") || "") || null
		});
		setBusy(false);
		if (!error) setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-gold bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-12 text-saffron" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-3xl text-maroon",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Our team will call you shortly to confirm the consultation."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "name",
					required: true,
					minLength: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "phone",
					required: true,
					pattern: "[0-9+ -]{7,20}"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "email",
					type: "email"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					name: "service",
					defaultValue: defaultService,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: defaultService,
						children: defaultService
					}), services.filter((s) => s.title !== defaultService).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: s.title,
						children: s.title
					}, s.slug))] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Preferred date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "date",
					type: "date",
					min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Preferred time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "time",
					placeholder: "e.g. 4–6 PM",
					maxLength: 50
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${field} sm:col-span-2`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Your concern" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "message",
					maxLength: 1500,
					rows: 4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "xl",
				className: "sm:col-span-2",
				disabled: busy,
				children: busy ? "Saving…" : "Request Appointment"
			})
		]
	});
}
//#endregion
export { KundliForm as n, MatchingForm as r, BookingForm as t };
