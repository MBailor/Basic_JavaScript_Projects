

function myFunction1() {
  var d = document.getElementById("try");
  d.style.color = "olivedrab" ;
}


function addition_Function() {
  var addition = 35 + 94;
  document.getElementById("banjo").innerHTML = "35 + 94 = " + addition;
}

function subtraction_Function() {
  var subtraction = 72 - 34;
  document.getElementById("Math1").innerHTML = "72 + 34 = " + subtraction;
}

function multiplication() {
  var simple_Math = 74 * 21;
  document.getElementById("Math2").innerHTML = "74 x 21 = " + simple_Math;
}

function division() {
  var simple_Math = 79 / 6;
  document.getElementById("Math3").innerHTML = "79 / 6 = " + simple_Math;
}

function more_Math() {
  var simple_Math = (35 + 94) * 38 / 2 - 13.166;
  document.getElementById("Math4").innerHTML = "(35 + 94) * 38 / 2 - 13.166 = " + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 46 % 7;
  document.getElementById("Math5").innerHTML = "When you divide 46 by 7 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
  var x = 15;
  document.getElementById("Math6").innerHTML = -x;
}

function increment() {
  var w = 23;
  w++;
  document.getElementById("Math7").innerHTML = w;
}

function deincrement() {
  var q = 23;
  q--;
  document.getElementById("Math8").innerHTML = q;
}

window.alert(Math.random() * 50);

function piFunction() {
  Math.PI;
  document.getElementById("Math9").innerHTML = Math.PI;
}

function roundFunction() {
  Math.round(3.8);
  document.getElementById("Math10").innerHTML = Math.round(3.8);
}
