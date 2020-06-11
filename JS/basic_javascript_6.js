

function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You are too short":"You are tell enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
  var Age, Can_gamble;
  Age = document.getElementById("Age").value;
  Can_gamble = (Age < 18) ? "You are too young":"You are of Age";
  document.getElementById("Gamble").innerHTML = Can_gamble + " to gamble.";
}

function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("keywords_and_constructors").innerHTML =
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in " + Erik.Vehicle_Year;
}

function Fishing(Species, BoW, From) {
  this.Fishing_Species = Species;
  this.Fishing_BoW = BoW;
  this.Fishing_From = From;
}

var Mark = new Fishing("Northern Pike", "Flathead River", "a boat"); // Changed this and the approps words in the function below to a reserved word and it made the whole page stop working 


function myFunction1() {
  document.getElementById("new_and_this").innerHTML =
  "Mark caught a " + Mark.Fishing_Species + "While fishing in the " + Mark.Fishing_BoW +
  "from a " + Mark.Fishing_From;
}

function objectConstructor(Species, Speciees, Riding, Style) {
  this.Hunting_Species = Species;
  this.Fishing_Species = Speciees;
  this.Moto_Riding = Riding; 
  this.Camping_Style = Style; 
}

var Bailor = new objectConstructor("Elk", "Surf Perch", "Trail Riding", "Tent");

function myFunction2() {
  document.getElementById("objectConstructor").innerHTML =
"Mark couldn't go hunting for " + Bailor.Hunting_Species + " So he went to the beach to fish for " + Bailor.Fishing_Speciees + 
" Mark also likes to do a bit of " + Bailor.Moto_Riding + " As well as camping in a " + Bailor.Camping_Style;
}


function outNest() {
  document.getElementById("nested_function").innerHTML= inNest();
  function inNest() {
    var Starting_point = 23
    function addOne() {Starting_point += 1;}
    addOne();
    return Starting_point;
  }
}