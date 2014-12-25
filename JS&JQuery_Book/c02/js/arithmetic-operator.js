var subtotal = 70;
var shipping = 7;
var total = subtotal + shipping;

var elSub = document.getElementById("subtotal");
elSub.textContent = "$" + subtotal;

var elShip = document.getElementById("shipping");
elShip.textContent = "$" + shipping;

var elTotal = document.getElementById("total");
elTotal.textContent = "$" + total;