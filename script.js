const cube = document.getElementById("cube");
const colorInput = document.getElementById("color");
const hexColorInput = document.getElementById("hex-color");
const sizeSlider = document.getElementById("size");
const personalitySlider = document.getElementById("personality");
const generateCodeButton = document.getElementById("generate-code");
const copyCodeButton = document.getElementById("copy-code");
const generatedCode = document.getElementById("generated-code");

// Function to update the cube's color, size, and shape based on the slider values
function updateCube() {
    const colorValue = colorInput.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    cube.style.backgroundColor = colorValue;
    cube.style.width = `${sizeValue * 50}px`;
    cube.style.height = `${sizeValue * 50}px`;
    cube.style.borderRadius = `${personalityValue * 10}%`;

    // Update the hex color input
    hexColorInput.value = colorValue;
}

// Event listeners for input changes
colorInput.addEventListener("input", updateCube);
hexColorInput.addEventListener("input", () => {
    // Ensure the hex color input is in the correct format (#RRGGBB)
    const hexColor = hexColorInput.value;
    if (/^#([0-9A
