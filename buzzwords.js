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

//promoteOcto();
jiggleOcto();  
}

function jiggleOcto(){
    const oct = document.getElementById("myImg");
    oct.classList.add("octo"); 

    setTimeout(function() {
        oct.classList.remove("octo"); 
      }, 500);

}

var promotionText = "Help Octopus Get Promoted!"; 
var octoBand = 0; 


function promoteOcto() {
 octoBand++; 

switch(octoBand) {  //ate the last donut in the breakroom 
  case 5:
    makeProgress("Octopus Nailed his conference call!"); //this works!! 
    break;
  case 9:
    makeProgress("Octopus got promoted to Assistant Manager!"); 
    break;
  case 13:
    makeProgress("Octopus is taking night classes for his Master's"); 
    break; 
  case 20:
    makeProgress("Octopus got promoted to Manager!"); 
    break;
  case 24:
    makeProgress("Octopus got promoted Vice President of Technology!"); 
    break;      
  case 29:
    makeProgress("Octopus made it to CEO!!");       
    break;  
  case 33:
    makeProgress("Octopus fired your lazy ass");    
    break;    
  case 37:
    makeProgress("Octopus sold the company for a cool billion");       
    break;  
  case 40:
    makeProgress("Octopus is on a yacht with supermodels");       
    break;   
  case 45:
    makeProgress("Why are you still here?");       
    break;   
  default:
       jiggleOcto();
   break; 
} //end switch 

}

var progressWidth = 0; 

function makeProgress(p){
  progressWidth += 10; 
  document.getElementById("promoteMe").innerHTML = p; 
  document.getElementById("progress").style.color = "#FFF"; 
  document.getElementById("progress").style.width = progressWidth + "%"; 
  document.getElementById("progress").innerHTML = progressWidth + "%"; 
}