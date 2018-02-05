//Arrays

var verbs =  [
"Brainstorm",
"Utilize",
"Working Independently",
"Working from Home",
"Winning",
"Producing",
"Diversify",
"Pivot",
"Reframe",
"Realign",
"Innovate",
"Redefine",
"Removing Blockers",
"Thinking Outside the Box",
"Stretch",
"Reach",
"Take Offline",
"Boil the Ocean",
"Peel the Onion",
"Giving 110%",
"Taking to the Next Level",
"Motivate",
"Circle Back",
"Touch Base"
];

var adjectives = [
"Agile",
"Efficient",
"Realtime",
"Integrated",
"Boundryless",
"Managerial",
"Fundamental",
"360",
"Vertical",
"Remote",
"High-margin",
"Virtual",
"Scalable",
"Robust",
"Online",
"Mission Critical",
"End to End",
"Next Level"
];

var nouns = [
"Cloud",
"Waterfall",
"Expectations",
"Leadership",
"Synergy",
"Efficiency",
"Collaboration",
"Motivation",
"Solutions",
"Opportunities",
"Diversity",
"Behavior",
"Values",
"Services",
"Dresscode",
"Food-chain",
"Diagnostics",
"Pyramid",
"Assets",
"Productivity",
"Acquisition",
"Merger",
"Customers",
"Clients",
"Diversity",
"CRUD App",
"agile",
"Startup",
"Networking",
"Integration",
"Model",
"Buy-In",
"Core Competency",
"Cutting Edge",
"Moving Parts",
"Ducks in a row",
"Sphere",
"Ecosystem",
"Leverage",
"Syngergize",
"Hard Stop",
"Impact",
"Price Point",
"Window of Opportunity",
"Low hanging fruit",
"Best Practices",
"Deep Dive"
];

function nameMeeting() {
//3 random variables
var randomVerb =Math.floor(Math.random() * verbs.length);
var randomAdj = Math.floor(Math.random() * adjectives.length);
var randomNoun = Math.floor(Math.random() * nouns.length);

var verb = verbs[randomVerb];
var adj = adjectives[randomAdj];
var noun = nouns[randomNoun];

var meeting =  verb + ' ' + adj + ' ' + noun;

document.getElementById("result").innerHTML = meeting;
}
