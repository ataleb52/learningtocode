// Create three variables to store the information needed.
var price = 5;
var numTiles = 14;
// Calculate the total by multiplying the price by quantity.
var total = price * numTiles;
// Get the element with an id of cost.
var el = document.getElementById("cost");
el.textContent = '$' + total;
