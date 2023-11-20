const para = document.getElementById("status");

function enterText() {
	const newElement = document.createElement("p");
	newElement.innerText = "Entered Metaverse";
	para.appendChild(newElement);
}
