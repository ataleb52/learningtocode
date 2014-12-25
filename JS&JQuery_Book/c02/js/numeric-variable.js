// Create three variables to store the information needed.
var price;
var numTiles;
// Assign values to the price and quantity variables.
price = 5;
numTiles = 14;
// Calculate the total by multiplying the price by quantity.
var total = price * numTiles;
// Get the element with an id of cost.
var el = document.getElementById("cost");
el.textContent = '$' + total;
