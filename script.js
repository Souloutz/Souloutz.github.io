const hobbies = document.getElementsByClassName("hobbies");
const swenList = document.querySelector("ul.swen_list");
var info = document.createElement("li");
info.textContent = "Click here to add a new list item";
swenList.appendChild(info);

for (var index = 0; index < hobbies.length; index++) {
	hobbies[index].addEventListener("click", async function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		}

		else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

info.onclick = async function() {
	const listItem = document.createElement("li");
	const listContent = prompt("Enter a list item: ");
	listItem.textContent = listContent;
	swenList.removeChild(swenList.lastElementChild);
	swenList.appendChild(listItem);
	swenList.appendChild(info);
}