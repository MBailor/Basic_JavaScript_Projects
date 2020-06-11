function my_Function() {
  document.getElementById("test").innerHTML = 0/0;
}

function my_Function1() {
  document.getElementById("test1").innerHTML = isNaN('Letterkenny');
}

function my_Function2() {
  document.getElementById("test2").innerHTML = isNaN('5150');
}

function my_Function3() {
  document.write(2E310);
}

function my_Function4() {
  document.write(-2E310);
}

function my_Function5() {
  document.write(15 < 3);
}

function my_Function6() {
  document.write(23 > 4);
}

function my_Function7() {
  document.write("25" + 8);
}

function my_Function8() {
  document.write(30 == 30); 
}

function my_Function9() {
  document.write(12 == 45); 
}

function my_FunctionA() {
  F = 4;
  R = 4;
  document.write(F === R);
}

function my_FunctionB() {
  G = "25";
  H = 8;
  document.write(G === H);
}

function my_FunctionC() {
  K = "23";
  J = 23;
}

function my_FunctionD() {
  S = 15;
  B = 32;
  document.write(S === B); 
}

function my_FunctionE() {
  if (4 && "4")
  alert("true!"); 
}

function my_FunctionF() {
  S = 15;
  B = 32;
  if (S && B)
  alert("False!")
}

function my_FunctionG() {
  H = "322";
  L = 321;
  var greaterThan = (H > L) ? "True":"False";
  document.getElementById("testG").innerHTML = greaterThan + "!";
}

function my_FunctionH() {
  H = "322";
  L = 321;
  var equalToo = (H === L) ? "True":"False";
  document.getElementById("testH").innerHTML = equalToo + "!";
}

function not_Function() {
  document.getElementById("Not").innerHTML = !(57 > 32);
}

function not_Function1() {
  document.getElementById("Not1").innerHTML = !(22 > 78);
}