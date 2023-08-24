const cube = document.getElementById("cube");
const colorInput = document.getElementById("color");
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
}

// Event listeners for input changes
colorInput.addEventListener("input", updateCube);
sizeSlider.addEventListener("input", updateCube);
personalitySlider.addEventListener("input", updateCube);

// Function to generate code based on the slider values
function generateCode() {
    const colorValue = colorInput.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    // Generate code based on the slider values
    const code = `
        // Create a customizable cube with the selected properties
        const cube = document.getElementById("cube");
        cube.style.backgroundColor = "${colorValue}";
        cube.style.width = "${sizeValue * 50}px";
        cube.style.height = "${sizeValue * 50}px";
        cube.style.borderRadius = "${personalityValue * 10}%";
    `;

    //
