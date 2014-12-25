var available = true;
var shipping = false;

available = false;
shipping = false;

var elAvailable = document.getElementById("stock");
elAvailable.className = available;

var elShipping = document.getElementById("shipping");
elShipping.className = shipping;