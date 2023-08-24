const cube = document.getElementById("cube");
const typeSlider = document.getElementById("type");
// Add similar variables for other sliders

const generatedCode = document.getElementById("generated-code");
const generateCodeButton = document.getElementById("generate-code");
const copyCodeButton = document.getElementById("copy-code");

// Function to update the cube's rotation based on the slider values
function updateCubeRotation() {
    const typeValue = typeSlider.value;
    // Get values from other sliders and adjust the cube as needed

    cube.style.transform = `rotateX(${typeValue}deg)`;
}

// Function to generate and display code
function generateCode() {
    const typeValue = typeSlider.value;
    // Get values from other sliders

    // Generate code based on the slider values
    const code = `
        // Add code here to create a rotating cube with the selected properties
        // Type: ${typeValue}
        // Add other properties here
    `;

    // Display the generated code
    generatedCode.textContent = code;
}

// Event listeners for slider changes
typeSlider.addEventListener("input", updateCubeRotation);
// Add similar listeners for other sliders

// Event listener for the Generate Code button
generateCodeButton.addEventListener("click", generateCode);

// Event listener for the Copy Code button
copyCodeButton.addEventListener("click", () => {
    const codeToCopy = generatedCode.textContent;
    copyToClipboard(codeToCopy);
});

// Function to copy text to the clipboard
function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Code copied to clipboard!");
}
