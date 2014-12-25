var color = ['black', 'white', 'orange', 'red', 'blue'];

color[1] = "yellow";
var el = document.getElementById("colors");
el.textContent = color[1];