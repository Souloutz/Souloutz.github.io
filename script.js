const smoothScroll = () => {
    window.scroll({top: 0, behavior: "smooth"})
}

const headerName = document.getElementById("name");
headerName.addEventListener("click", smoothScroll);

const button = document.createElement("button");
button.className = "scroll-button"
button.textContent = "↑";
button.addEventListener("click", smoothScroll);
document.body.appendChild(button)