const clubs = document.getElementsByClassName("clubs");
const languages = document.getElementsByClassName("languages");

// Only button element exists
clubs[0].addEventListener("click", async function () {
	this.classList.toggle("clubs-active");
	var content = this.nextElementSibling;

	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	}

	else {
		content.style.maxHeight = content.scrollHeight + "px";
	}	
});

// Only button element exists
languages[0].addEventListener("click", async function () {
	this.classList.toggle("languages-active");
	var content = this.nextElementSibling;

	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	}

	else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
});
