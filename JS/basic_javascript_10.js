

function count_To_Ten() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

function callLoop() {
var text = "";
var i = 0;

while (i < 10) {
  text += "<br>The Number Is " + i;
  i++;
  if (i === 7) {
    break;
  }
}  
document.getElementById("Loop").innerHTML = text;
}

function long_String() {
  var str = "Once upon a time there was a wizard named Moe.";
  var n = str.length;
  document.getElementById("Lstring").innerHTML = n;
}

var Motorcycles = ["KLR 650", "Concours", "DR650", "Fat Boy", "Monster", "Panhead", "Scout"];
var Content = "";
var Y;
function moto_Loop() {
  for (Y = 0; Y < Motorcycles.length; Y++) (
    Content += Motorcycles[Y] + "<br>"
  )
  document.getElementById("List_of_Motorcycles").innerHTML = Content;
}

function constant_function() {
  const Motorcycle = {type: "KLR 650", brand:"Kawasaki", color:"camo"};
  Motorcycle.color = "Olivedrab Green";
  Motorcycle.price = "$7,500";
  document.getElementById("Constant").innerHTML = "For an " + Motorcycle.color + Motorcycle.type + " the guy wanted no less than " + Motorcycle.price;
}

var G = 25;
document.write("<br>" + G );
{
  let G = 18;
  document.write("<br>" + G );
}



function myReturn(f,t) {
  return(f*t)
}
document

let gun = {
  make: "Ruger ",
  model: "10/22 ",
  cartridge: ".22 magnum ",
  action: "semi-automatic ",
  description : function() {
    return "The " + this.make + this.model + "is a " + this.action + "rifle that fires " + this.cartridge;
  }
};
document.getElementById("gun_Object").innerHTML = gun.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 6) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demoB").innerHTML = text;


var text = "";
var w;
for (w = 0; w < 10; w++) {
  if (w === 7) { continue; }
  text += "The number is " + w + "<br>";
}
document.getElementById("demoC").innerHTML = text;