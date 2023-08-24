const cube = document.getElementById("cube");
const rotationSlider = document.getElementById("rotation");
const sizeSlider = document.getElementById("size");
const personalitySlider = document.getElementById("personality");
const generateCodeButton = document.getElementById("generate-code");
const copyCodeButton = document.getElementById("copy-code");
const generatedCode = document.getElementById("generated-code");

// Function to update the cube's rotation, size, and shape based on the slider values
function updateCube() {
    const rotationValue = rotationSlider.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    cube.style.transform = `rotateX(${rotationValue}deg) rotateY(${rotationValue}deg) scale(${sizeValue})`;
    cube.style.borderRadius = `${personalityValue * 10}%`;
}

// Event listeners for slider changes
rotationSlider.addEventListener("input", updateCube);
sizeSlider.addEventListener("input", updateCube);
personalitySlider.addEventListener("input", updateCube);

// Function to generate code based on the slider values
function generateCode() {
    const rotationValue = rotationSlider.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    // Generate code based on the slider values
    const code = `
        // Add code here to create a rotating cube with the selected properties
        // Rotation: ${rotationValue} degrees
        // Size: ${sizeValue}
        // Personality: ${personalityValue}
    `;

    // Display the generated code
    generatedCode.value = code;
}

// Event listener for the Generate Code button
generateCodeButton.addEventListener("click", generateCode);

// Function to copy generated code to the clipboard
function copyCode() {
    generatedCode.select();
    document.execCommand("copy");
}

// Event listener for the Copy Code button
copyCodeButton.addEventListener("click", copyCode);
