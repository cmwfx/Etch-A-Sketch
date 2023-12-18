//create a container
//inside that container make another container that will have 16 divs
//make 16 more of them
// display column

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	const innerContainer = document.createElement("div");

	for (let i = 0; i < 16; i++) {
		const innerDiv = document.createElement("div");
		innerDiv.style.borderStyle = "solid";
		innerDiv.style.borderColor = "grey";
		innerDiv.style.borderWidth = "1px";
		innerDiv.classList.add("innerDivClass");

		innerDiv.addEventListener("click", () => {
			innerDiv.style.backgroundColor = "grey";
		});

		innerDiv.style.flexGrow = "1";
		innerDiv.style.flexShrink = "1";
		innerDiv.style.flexBasis = "auto";
		innerContainer.style.display = "flex";
		innerContainer.style.flexDirection = "row";
		innerContainer.style.height = "6.25%";
		innerContainer.appendChild(innerDiv);
		container.appendChild(innerContainer);
	}
}
