const form = document.querySelector("#email-container");
form.addEventListener("submit", handleSubmit);

const inputContainer = document.querySelector("#input-container");

function handleSubmit(event) {
	event.preventDefault();
	inputContainer.classList.remove("error");
	const formData = new FormData(form);
	const [_, value] = [...formData.entries()][0];
	if (!value) {
		inputContainer.dataset.error =
			'Whoops! It looks like you forgot to add your email"';
		inputContainer.classList.add("error");
	} else if (!/^\w+@\w+\.\w+$/.test(value)) {
		inputContainer.dataset.error = "Please provide a valid email addres";
		inputContainer.classList.add("error");
	}
}
