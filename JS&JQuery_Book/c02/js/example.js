var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order."

var welcomeMessage = greeting + name + message;

var customSign = "Montague House";
var totalTiles = customSign.length;
var subTotal = totalTiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;




var el = document.getElementById("greeting");
el.textContent = welcomeMessage;


var elCustomSign = document.getElementById("userSign");
elCustomSign.textContent = customSign;

var elTotalTiles = document.getElementById("tiles");
elTotalTiles.textContent = totalTiles;

var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = subTotal;

var elShipping = document.getElementById("shipping");
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = grandTotal;
