const para = document.getElementById("status");

function enterText() {
	const newElement = document.createElement("h1");
	newElement.innerText = "Entered Metaverse";
	para.appendChild(newElement);
}
