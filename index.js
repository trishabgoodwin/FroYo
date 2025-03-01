//Propt user to enter a string separated by commas
const userFlavors = prompt(
    "Type froyo flavors separated by a comma - Leave no spaces!",
    "vanilla,chocolate,strawberry,vanilla,vanilla,vanilla"
  );

//Turn string into array  
const flavorArray = userFlavors.split(",");

console.log(flavorArray);

//Build an object to track how many of each flavor in flavorArray
 const counts={};

 //Iterate through the array to count each item and add one for each time item is counted
 //Make sure item = 1 if the item is only seen once
 for (const item of flavorArray) {
  if (counts[item]) {
    counts [item] ++;
  }
  else {
    counts [item] =1;
  }
 }
//Create a table that shows the flavor counts
 console.table(counts);
