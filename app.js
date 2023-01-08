let css = document.querySelector("h3");
let colorA = document.getElementById("color1");
let colorB = document.getElementById("color2");
let body = document.getElementById("gradient");

function setGradient () {
	body.style.background =
	 "linear-gradient(to right, " 
	 + colorA.value 
	 + ", " 
	 + colorB.value 
	 + ")";
	 css.textContent = body.style.background + ";";
}



colorA.addEventListener("input", setGradient);

colorB.addEventListener("input", setGradient);