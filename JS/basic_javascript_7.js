//function Add_numbers_1() {
//  var g = 14;
//  console.log(15 + g);
//}
//function Add_numbers_2() {
//  console.log(g + 100);
//}
//Add_numbers_1();
//Add_numbers_2(); // This code wont show up on the web page, but throws an error in console.log if the rest of the code is off. If the rest of the code is on, this section gets ignored completely. 


var g = 14;  
     // Global Variable
function add_number_1() {      
  document.write(20 + g + "<br>");
  
}
function add_number_2() {
  var o = 57;          // Local Variable
  document.write(g + o);
  
}
add_number_1();
add_number_2();


  function Banjo() {        // if
    if (new Date().getHours() >0 <12) (
      document.getElementById("pocket").innerHTML = "Good Morning!"
    )
    if (new Date().getHours() >12 <24) (
      document.getElementById("pocket").innerHTML = "Good Afternoon!"
    )
  }

  function Pocket() {          // if else
   Displacement = document.getElementById("banjo").value;
    if (Displacement > 250) (
      Braap = "BRRRAAAAPPPP!!!!"
    )
    else (
      Braap = "Railer dude! No BRAAP Today!"
    )
    document.getElementById("displacement?").innerHTML = Braap;
  }


function Cold_Gin() {
  var Time = new Date().getHours(); // Time Function
  var Reply;
  if (Time <12 == Time > 0) (
    Reply = "It's Cold Gin Time!"
  )
  else if (Time > 12 == Time <18) (
    Reply= "It's Cold Gin Time!"
  )
  else (
    Reply= "It's Cold Gin Time!"
  )
  document.getElementById("Cold_Gin_Time").innerHTML = Reply;
}