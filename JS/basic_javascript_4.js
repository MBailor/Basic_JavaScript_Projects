function my_Dictionary() {
  var Motorcycles = {
    Make:"Kawasaki",
    Model:"KLR650",
    Year:"2000",
    Dry_Weight: "370.4 pounds",
    Top_Speed: "108 mph"
  };
 
document.getElementById("Dictionary").innerHTML = Motorcycles.Year;
}


  function myFunction() {
    var Motorcycles = {
      Make:"Kawasaki",
      Model:"KLR650",
      Year:"2000",
      Dry_Weight: "370.4 pounds",
      Top_Speed: "108 mph"
    };
    delete Motorcycles.Model;
  document.getElementById("btn").innerHTML = Motorcycles.Model;
}
