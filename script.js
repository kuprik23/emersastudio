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

// Function to generate pseudo code based on the slider values
function generateCode() {
    const colorValue = colorInput.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    // Generate pseudo code based on the slider values
    const code = `
        // Create a customizable 3D cube with the following properties:
        // Color: "${colorValue}"
        // Size: ${sizeValue}
        // Personality: ${personalityValue}
        
        // Add your code to create the cube here
    `;

    // Display the generated pseudo code
    generatedCode.value = code;
}

// Event listener for the Generate Pseudo Code button
generateCodeButton.addEventListener("click", generateCode);

// Function to copy generated pseudo code to the clipboard
function copyCode() {
    generatedCode.select();
    document.execCommand("copy");
}

// Event listener for the Copy Code button
copyCodeButton.addEventListener("click", copyCode);
