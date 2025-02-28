//Propt user to enter a string 
const userFlavors = prompt(
    "Type froyo flavors separated by a comma",
    "vanilla,chocolate,strawberry"
  );

//Turn string into array  
const flavorArray = userFlavors.split(",");

console.log(flavorArray);

//..to be continued...
