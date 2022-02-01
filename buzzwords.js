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
"Shared", 
"Vertical",
"Remote",
"Sustainable", 
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
"Capacity",
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
"Leadership",
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
//"CRUD App",
//"Agile",
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
"Low Hanging Fruit",
"Best Practices",
"Deep Dive"
];

var octoBand = 0; 

function nameMeeting() {
//3 random variables
const oct = document.getElementById("myImg");
oct.classList.add("octo"); 
var randomVerb =Math.floor(Math.random() * verbs.length);
var randomAdj = Math.floor(Math.random() * adjectives.length);
var randomNoun = Math.floor(Math.random() * nouns.length);

var verb = verbs[randomVerb];
var adj = adjectives[randomAdj];
var noun = nouns[randomNoun];

var meeting =  verb + ' ' + adj + ' ' + noun;

document.getElementById("result").innerHTML = meeting;

promoteOcto(); 

setTimeout(function() {
    oct.classList.remove("octo"); 
  }, 500);

}

function promoteOcto() {
 octoBand++; 

switch(octoBand) {
  case 5:
    document.getElementById("promoteMe").innerHTML = "Octopus Nailed his conference call!"; 
    break;
  case 9:
    document.getElementById("promoteMe").innerHTML = "Octopus got promoted to Assistant Manager!"; 
    break;
  case 13:
        document.getElementById("promoteMe").innerHTML = "Octopus is taking night classes for his Master's"; 
        break; 
  case 20:
        document.getElementById("promoteMe").innerHTML = "Octopus got promoted to Manager!"; 
       break;
  case 24:
    document.getElementById("promoteMe").innerHTML = "Octopus got promoted Vice President of Technology!"; 
    break;      
   case 29:
        document.getElementById("promoteMe").innerHTML = "Octopus made it to CEO!! ";       
    break;  
    case 33:
        document.getElementById("promoteMe").innerHTML = "Octopus fired your lazy ass";    
        break;    
   case 37:
            document.getElementById("promoteMe").innerHTML = "Octopus sold the company for a cool billion";       
    break;  
    case 40:
        document.getElementById("promoteMe").innerHTML = "Octopus is on a yacht with supermodels";       
    break;   
  
}
}
