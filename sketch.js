var text1 = ["On the serions of the new gospel who have present a revolutionary attache to the bourgeois class, the proletarian moteller, has nothing now: under a change for the individual to be significant. Thus most individuals are unable to influence measurably the major decisions that affect their lives."];
var text2 = ['Our most of these images. At first confining itself to submitting to them, it soon perceives that there is a true preamune of those machinery obliterates all distinctions of labor.'];
var text3 = ['For instance, when someonedefentest images support of the system, and that is made of this Golden Rule reulity made a more real opportunity to kie demandd a permentary forms of power and utterly and falls for his choice, and the fberions and destruction will result in an anxious and pointless quest for object - things '];
var text4 = ["Repeatedly any plarte or the mechanical ones of communication, draws all, even the most barbarian, nations into civilization."];
var text5 = ["The patriarchal system was found attesting to the surface of the elements that are troubled in a Cirturated aftering for the freedom that the First Amendment guaranteed."];
var text6 = ["All we ask for is what the founding futures of social life, to which they may bear a certain likeness."];
var text7 = ["The same this was sent men of the worlds days."];
var text8 = ["Technologies and computers can go indienated protections the courte, the family, but the love too themselves passion to buy the struggle of the dean, for the sense of the teading car culture a little too wholeheartedly."];
var text9 = ["It is oppositional, utopian, and completely without indicates to victory and varied within the actual person? It has a seen, just the whole and beyond them."];
var text10 = ["Modern wealth being exceptions for the figure of society. The contralities of his children, short oralities and the support of a planned system."];
var text11 = ["We taking into account the knowledge and material grounds that any promise or created by experiences and lessons Mankind has learned from highly respected and successful democracies."];

var allText = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11];

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
  background(0);
}

function draw() {
  // put drawing code here
  if (frameCount % 600 == 0) {
    background(0);
    text(random(allText), width / 2, height / 2, 2 * width / 3, (2 * height / 3));

  }
  print(frameCount);
}