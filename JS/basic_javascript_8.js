


function Pocket() {      //Concatenate a sentence
  var part_1 = "Once upon ";
  var part_2 = "a time there was ";
  var part_3 = "a cat named ";
  var part_4 = "Banjo Tuppins Esq. III";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("banjo").innerHTML = whole_sentence;
}

function Homer() {         //Slice a sentence
  var Sentence = "No TV and No Beer Makes Homer Go Crazt!!";
  var Section = Sentence.slice(17,32);
  document.getElementById("Homer_Slice").innerHTML = Section;
}

function upperCase() {                          //toUppercase method
  var str = "string should appear in all caps";
  var res = str.toUpperCase();
  document.getElementById("upper").innerHTML = res;
}

function sEaRcH() {                         //search method
  var str = "One morning I shot an elephant in my pajamas. How he got into my pajamas I'll never know>"
  var e = str.search("elephant");
  document.getElementById("seek").innerHTML= e;
}

function Method_of_string() {                 //toString method
  var l =198
  document.getElementById("numbers_to_string").innerHTML = l.toString();
}

function method_of_precision() {        //toPrecision method
  var j = 17568943.2343456587983454984394;
  document.getElementById("precision").innerHTML = j.toPrecision(14);
}

function fixed() {                  //toFixed method
  var num = 33.383738373
  var k = num.toFixed(4);
  document.getElementById("fixit").innerHTML = k;
}

function ValueOf() {                      //valueOf method
  var str = "This is the primitive value of the string object";
  var res = str.valueOf();
  document.getElementById("REtuRN").innerHTML = res;
}

