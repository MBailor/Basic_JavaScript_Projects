


//function my_Function() {
//  document.getElementById("test").innerHTML = 0/0;
//}

//function my_Function1() {
//  document.getElementById("test1").innerHTML = isNaN('Letterkenny');
//}

//function my_Function2() {
//  document.getElementById("test2").innerHTML = isNaN('5150');
//}

//function my_Function3() {
//  document.write(2E310);
//}

//function my_Function4() {
//  document.write(-2E310);
//}

//function my_Function5() {
//  document.write(15 < 3);
//}

//function my_Function6() {
//  document.write(23 > 4);
//}

//function my_Function7() {
//  document.write("25" + 8);
//}

//function my_Function8() {
//  document.write(30 == 30); 
//}

//function my_Function9() {
//  document.write(12 == 45); 
//}

//function my_FunctionA() {
//  F = 4;
//  R = 4;
//  document.write(F === R);
//}

//function my_FunctionB() {
//  G = "25";
//  H = 8;
//  document.write(G === H);
//}

//function my_FunctionC() {
//  K = "23";
//  J = 23;
//}

//function my_FunctionD() {
//  S = 15;
//  B = 32;
//  document.write(S === B); 
//}

//function my_FunctionE() {
//  if (4 && "4")
//  alert("true!"); 
//}

//function my_FunctionF() {
//  S = 15;
//  B = 32;
//  if (S && B)
//  alert("False!")
//}

//function my_FunctionG() {
//  H = "322";
//  L = 321;
//  var greaterThan = (H > L) ? "True":"False";
//  document.getElementById("testG").innerHTML = greaterThan + "!";
//}

//function my_FunctionH() {
//  H = "322";
//  L = 321;
//  var equalToo = (H === L) ? "True":"False";
//  document.getElementById("testH").innerHTML = equalToo + "!";
//}

//function not_Function() {
//  document.getElementById("Not").innerHTML = !(57 > 32);
//}

//function not_Function1() {
//  document.getElementById("Not1").innerHTML = !(22 > 78);
//}


//console.log(45*89); // using console.log to perform a math operation.
//console.log(46 <= 16);
//console.log(22 >= 21);



function countFunction() {
  document.getElementById("counting").innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}


function get_Date() {
  if (new Date().getHours() < 18) (
    document.getElementById("Greeting").innerHTML = "How are you today?"
  )
}

function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) (
    Vote = "You are old enough to vote!"
  )
  else (
    Vote = "You are not old enough to vote!" 
  ) 
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time <12 == Time > 0) (
    Reply = "It is the morning time!"
  )
  else if (Time > 12 == Time <18) (
    Reply= "It is the afternoon!"
  )
  else (
    Reply= "It is evening time!"
  )
  document.getElementById("Time_of_day").innerHTML = Reply;
}

function full_Sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
  var Sentence = "All work and no play makes Jack a dull boy.";
  var Section = Sentence.slice(27,33);
  document.getElementById("Slice").innerHTML = Section;
}
