var budget;
var savingPriority;

var rent;
var utilities;
var newLaptop = 1200;


var totalCosts = rent + utilities;
var budgetLeft = budget - totalCosts; 
var buyLaptop = budgetLeft >= newLaptop;
console.log("New Laptop Within Budget:");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead:");
console.log(savingPriority == "high");