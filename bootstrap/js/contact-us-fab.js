document.getElementById("fab").addEventListener("click", toggleContactUs);
// document.getElementById('contactUs').addEventListener('click', toggleContactUs);

function toggleContactUs() {
	const chatWidget = document.getElementById("chatWidget");
	if (chatWidget.style.display === "none" || chatWidget.style.display === "") {
		chatWidget.style.display = "flex";
		console.log("show", chatWidget);
	} else {
		console.log("hide");
		chatWidget.style.display = "none";
	}
}
