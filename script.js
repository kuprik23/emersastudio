const cube = document.getElementById("cube");
const colorInput = document.getElementById("color");
const sizeSlider = document.getElementById("size");
const personalitySlider = document.getElementById("personality");
const generateAccessCodeButton = document.getElementById("generate-access-code");
const accessCode = document.getElementById("access-code");
const backstoryInput = document.getElementById("backstory");
const uploadPictureButton = document.getElementById("upload-picture");
const connectWalletButton = document.getElementById("connect-wallet");
const polygonOptimizationButton = document.getElementById("polygon-optimization");
const warningWindow = document.getElementById("warning");
const languageModelCheckboxes = document.querySelectorAll(".checkbox-container input");

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

// Function to update the language model selection
function updateLanguageModelSelection() {
    let selectedModels = [];
    languageModelCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedModels.push(checkbox.id);
        }
    });

    return selectedModels.join(", ");
}

// Function to check if all conditions are met and generate the access code
function checkConditions() {
    const backstory = backstoryInput.value.trim();
    const selectedModels = updateLanguageModelSelection();

    if (!selectedModels || !backstory || !colorInput.value || !sizeSlider.value || !personalitySlider.value) {
        warningWindow.style.display = "block"; // Display the warning
        return;
    } else {
        warningWindow.style.display = "none"; // Hide the warning
    }

    // Generate access code based on the slider values, options, and backstory
    let code = `
        // Access Code for Your Custom Avatar:
        // Color: "${colorInput.value}"
        // Size: ${sizeSlider.value}
        // Personality: ${personalitySlider.value}
        
        // Backstory:
        // "${backstory}"
        
        // Language Model(s): ${selectedModels}
        
        // Use this code to access your custom avatar.`;

    // Display the generated access code
    accessCode.value = code;
}

// Event listeners for input changes
colorInput.addEventListener("input", updateCube);
sizeSlider.addEventListener("input", updateCube);
personalitySlider.addEventListener("input", updateCube);

// Event listener for Generate Access Code button
generateAccessCodeButton.addEventListener("click", checkConditions);

// Event listener for Copy Access Code button
document.getElementById("copy-access-code").addEventListener("click", () => {
    accessCode.select();
    document.execCommand("copy");
});

// Event listener for Backstory input
backstoryInput.addEventListener("input", () => {
    if (backstoryInput.value.trim() !== "") {
        warningWindow.style.display = "none"; // Hide the warning
    }
});

// Event listeners for language model checkboxes
languageModelCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            warningWindow.style.display = "none"; // Hide the warning when a checkbox is selected
        }
    });
});
