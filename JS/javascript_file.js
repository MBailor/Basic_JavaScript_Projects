window.alert("What's up?!?!");


document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded. <br>");

document.write( "\"Be who you are and say what you feel "
+ " Because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss<br>");

var Family="The Bailors", Dad="Mark", Mom="Jesse", Son="Savai", Son1="Oak";
var Family=Family.fontcolor("red");
var Dad=Dad.fontcolor("olivedrab");
var Mom=Mom.fontcolor("purple");
var Son=Son.fontcolor("blue");
var Son1=Son1.fontcolor("green");

document.write(Dad);
document.write(Family);
document.write(Mom);
document.write(Son);
document.write(Son1);


var blues="<br>I have the blues.<br>";
var blues=blues.fontcolor("blue");
document.write(blues);


document.write(3+3);

function My_First_Function () {     //Defining a function and naming it
  var str="THIS TEXT IS GREEN!";    //Defining a function and giving it a string value
  var result=str.fontcolor("green");//Using the fontcolot method on str value
  document.getElementById("Green_Text").innerHTML=result; //Putting the value of result into HTML element with "Green_Text" id
}