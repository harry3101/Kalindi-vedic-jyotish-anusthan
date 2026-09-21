import { i as rashis } from "./content-cZA_0I1g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horoscope-FWj93Eil.js
var periods = [
	"daily",
	"weekly",
	"monthly",
	"yearly"
];
var general = [
	"Momentum returns to matters you had set aside; steady effort now produces visible progress.",
	"Patience serves you better than speed. Let discussions mature before you commit.",
	"A supportive planetary influence brings clarity to a decision that felt confusing.",
	"Family matters need warmth and listening rather than argument.",
	"Recognition arrives quietly through consistent work rather than dramatic events.",
	"Travel or a change of surroundings refreshes your thinking.",
	"Balance is the theme; avoid extremes in spending, speech and sleep.",
	"An old commitment resurfaces and can finally be closed with grace.",
	"Learning and guidance from an elder proves valuable.",
	"Your discipline is being tested; hold the routine you have built.",
	"Unexpected support from friends eases a practical burden.",
	"Inner reflection gives better answers than outside opinions."
];
var career = [
	"Seniors notice your reliability; document your work clearly.",
	"A pending approval moves forward; follow up politely.",
	"Avoid office politics and focus on measurable deliverables.",
	"A new responsibility may arrive; accept it with clear boundaries.",
	"Skill-building now creates opportunity in the coming cycle.",
	"Negotiation favours you if you prepare facts in advance.",
	"Collaboration outperforms solo effort this period.",
	"Delay a job change until the current cycle stabilises.",
	"Communication roles and presentations bring good results.",
	"Long-pending recognition or an increment is indicated.",
	"Keep commitments realistic; over-promising creates strain.",
	"Guidance from a mentor reshapes your direction usefully."
];
var finance = [
	"Income is steady; avoid impulsive purchases mid-period.",
	"A delayed payment is likely to be released.",
	"Review recurring expenses; small leaks add up.",
	"Property or family-related expenditure needs planning.",
	"Savings improve if you automate a fixed monthly amount.",
	"Avoid lending large sums to acquaintances now.",
	"A secondary source of income shows early promise.",
	"Insurance and documentation deserve your attention.",
	"Market-linked decisions should stay conservative.",
	"Gains come from past work rather than new ventures.",
	"Budget before a festive or ceremonial expense.",
	"Financial clarity improves after a frank family discussion."
];
var love = [
	"Honest conversation clears a lingering misunderstanding.",
	"Marriage-related discussions progress favourably.",
	"Give your partner time rather than explanations.",
	"Single natives may meet someone through family or work.",
	"Small gestures matter more than grand plans now.",
	"Avoid raising old grievances during this period.",
	"A trip together strengthens the bond.",
	"Respect for boundaries deepens mutual trust.",
	"Elders' blessings support a relationship decision.",
	"Jealousy or comparison must be consciously set aside.",
	"Emotional maturity brings a welcome sense of peace.",
	"Shared routines rebuild closeness quietly."
];
var health = [
	"Digestion needs care; keep meals light and regular.",
	"Sleep quality is the single biggest improvement available.",
	"Stress shows up physically; breathing practice helps.",
	"Joint and back care benefits from gentle daily movement.",
	"Hydration and seasonal food keep energy stable.",
	"A pending medical check-up should not be postponed.",
	"Reduce screen time in the evening for better rest.",
	"Immunity improves with sunlight and steady routine.",
	"Avoid overexertion during the middle of the period.",
	"Mental calm improves with japa or quiet walking.",
	"Eye strain and headaches respond well to short breaks.",
	"Overall vitality is good; maintain your discipline."
];
var pick = (list, i, p) => list[(i * 5 + p * 7) % list.length];
function getHoroscope(rashiIndex, period) {
	const p = periods.indexOf(period);
	return {
		general: pick(general, rashiIndex, p),
		career: pick(career, rashiIndex, p),
		finance: pick(finance, rashiIndex, p),
		love: pick(love, rashiIndex, p),
		health: pick(health, rashiIndex, p),
		lucky: {
			number: (rashiIndex * 3 + p * 2) % 9 + 1,
			colour: [
				"Saffron",
				"Gold",
				"Maroon",
				"White",
				"Green",
				"Blue",
				"Yellow",
				"Cream"
			][(rashiIndex + p) % 8],
			day: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			][(rashiIndex + p) % 7]
		},
		rashi: rashis[rashiIndex]
	};
}
var festivals = {
	1: [[14, "Makar Sankranti"], [26, "Vasant Panchami"]],
	2: [[15, "Maha Shivaratri"]],
	3: [
		[4, "Holika Dahan"],
		[5, "Holi"],
		[30, "Chaitra Navratri begins"]
	],
	4: [[6, "Ram Navami"], [12, "Hanuman Jayanti"]],
	5: [[9, "Akshaya Tritiya"]],
	6: [[6, "Ganga Dussehra"]],
	7: [[10, "Guru Purnima"]],
	8: [[9, "Raksha Bandhan"], [16, "Janmashtami"]],
	9: [[6, "Ganesh Chaturthi"], [22, "Sharad Navratri begins"]],
	10: [[2, "Vijayadashami"], [20, "Karwa Chauth"]],
	11: [
		[8, "Diwali"],
		[12, "Chhath Puja"],
		[24, "Kartik Purnima"]
	],
	12: [[25, "Gita Jayanti"]]
};
var muhurats = [
	["Griha Pravesh", "Auspicious windows in the bright fortnight with a favourable Nakshatra."],
	["Vivah Muhurat", "Marriage timings are fixed after examining both charts and the Navamsa."],
	["Vehicle Purchase", "Choose a day free of Rahu Kaal with a stable Moon."],
	["Business Opening", "Prefer Abhijit Muhurat with a supportive lagna lord."]
];
//#endregion
export { periods as i, getHoroscope as n, muhurats as r, festivals as t };
