const textInput = document.querySelector("#name-input");
const textOutput = documet.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimmedInput = event.currentTarget.value.trim();
    if (trimmedInput !== "") {
        textOutput.textContent = trimmedInput;
    } else {
        textOutput.textContent = "Anonymous";
    }
});