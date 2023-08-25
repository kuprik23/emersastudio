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
const webglCheckbox = document.getElementById("webgl");
const unityCheckbox = document.getElementById("unity");
const threejsCheckbox = document.getElementById("threejs");
const unrealCheckbox = document.getElementById("unreal");
const mersaGptjCheckbox = document.getElementById("mersa-gptj");
const gptLlamCheckbox = document.getElementById("gpt-llam");
const jadaCheckbox = document.getElementById("jada");
const warningWindow = document.getElementById("warning");
const popup = document.getElementById("popup");

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

// Function to check if all conditions are met
function checkConditions() {
    const languageModelSelected = mersaGptjCheckbox.checked || gptLlamCheckbox.checked || jadaCheckbox.checked;
    const riggingOptionSelected = webglCheckbox.checked || unityCheckbox.checked || threejsCheckbox.checked || unrealCheckbox.checked;
    const polygonOptimized = true; // Implement polygon optimization logic
    const backstory = backstoryInput.value;

    if (!languageModelSelected || !riggingOptionSelected || !polygonOptimized || !backstory.trim() || !colorInput.value || !sizeSlider.value || !personalitySlider.value) {
        popup.style.display = "block"; // Display the warning
        // Highlight the specific items that need attention
        if (!languageModelSelected) {
            mersaGptjCheckbox.parentElement.style.backgroundColor = "red";
            gptLlamCheckbox.parentElement.style.backgroundColor = "red";
            jadaCheckbox.parentElement.style.backgroundColor = "red";
        } else {
            mersaGptjCheckbox.parentElement.style.backgroundColor = "";
            gptLlamCheckbox.parentElement.style.backgroundColor = "";
            jadaCheckbox.parentElement.style.backgroundColor = "";
        }

        if (!riggingOptionSelected) {
            webglCheckbox.parentElement.style.backgroundColor = "red";
            unityCheckbox.parentElement.style.backgroundColor = "red";
            threejsCheckbox.parentElement.style.backgroundColor = "red";
            unrealCheckbox.parentElement.style.backgroundColor = "red";
        } else {
            webglCheckbox.parentElement.style.backgroundColor = "";
            unityCheckbox.parentElement.style.backgroundColor = "";
            threejsCheckbox.parentElement.style.backgroundColor = "";
            unrealCheckbox.parentElement.style.backgroundColor = "";
        }

        if (!polygonOptimized) {
            polygonOptimizationButton.style.backgroundColor = "red";
        } else {
            polygonOptimizationButton.style.backgroundColor = "";
        }

        if (!backstory.trim()) {
            backstoryInput.style.backgroundColor = "red";
        } else {
            backstoryInput.style.backgroundColor = "";
        }

        if (!colorInput.value) {
            colorInput.style.backgroundColor = "red";
        } else {
            colorInput.style.backgroundColor = "";
        }

        if (!sizeSlider.value) {
            sizeSlider.style.backgroundColor = "red";
        } else {
            sizeSlider.style.backgroundColor = "";
        }

        if (!personalitySlider.value) {
            personalitySlider.style.backgroundColor = "red";
        } else {
            personalitySlider.style.backgroundColor = "";
        }

        return;
    } else {
        popup.style.display = "none"; // Hide the warning
        // Remove highlighting
        mersaGptjCheckbox.parentElement.style.backgroundColor = "";
        gptLlamCheckbox.parentElement.style.backgroundColor = "";
        jadaCheckbox.parentElement.style.backgroundColor = "";
        webglCheckbox.parentElement.style.backgroundColor = "";
        unityCheckbox.parentElement.style.backgroundColor = "";
        threejsCheckbox.parentElement.style.backgroundColor = "";
        unrealCheckbox.parentElement.style.backgroundColor = "";
        polygonOptimizationButton.style.backgroundColor = "";
        backstoryInput.style.backgroundColor = "";
        colorInput.style.backgroundColor = "";
        sizeSlider.style.backgroundColor = "";
        personalitySlider.style.backgroundColor = "";
    }

    // Generate access code based on the slider values and options
    let code = `
        // Access Code for Your Custom Avatar:
        // Color: "${colorInput.value}"
        // Size: ${sizeSlider.value}
        // Personality: ${personalitySlider.value}
        
        // Backstory:
        // "${backstory}"
        
        // Rigging Options:`;

    if (webglCheckbox.checked) {
        code += "\n        // WebGL";
    }
    if (unityCheckbox.checked) {
        code += "\n        // Unity";
    }
    if (threejsCheckbox.checked) {
        code += "\n        // Three.js";
    }
    if (unrealCheckbox.checked) {
        code += "\n        // Unreal";
    }

    code += "\n\n        // Language Models:";

    if (mersaGptjCheckbox.checked) {
        code += "\n        // Mersa GPT-J";
    }
    if (gptLlamCheckbox.checked) {
        code += "\n        // GPT-LLAM";
    }
    if (jadaCheckbox.checked) {
        code += "\n        // JADA";
    }

    code += "\n\n        // Use this code to access your custom avatar.";

    // Display the generated access code
    accessCode.innerHTML = code;
}

// Event listener for Generate Access Code button
generateAccessCodeButton.addEventListener("click", checkConditions);

// Function to copy generated access code to the clipboard
function copyAccessCode() {
    accessCode.select();
    document.execCommand("copy");
}

// Event listener for the Copy Access Code button
generateAccessCodeButton.addEventListener("click", copyAccessCode);

// Function to handle Backstory input
function handleBackstory() {
    const backstory = backstoryInput.value;
    if (!backstory.trim()) {
        popup.style.display = "block"; // Display the warning
        popup.innerHTML = "<p>Please provide a backstory.</p>";
    } else {
        popup.style.display = "none"; // Hide the warning
    }
}

// Event listener for Backstory input
backstoryInput.addEventListener("input", handleBackstory);

// Event listener for Polygon Optimization button
polygonOptimizationButton.addEventListener("click", () => {
    // Implement polygon optimization logic here
    polygonOptimizationButton.style.backgroundColor = ""; // Remove highlighting
});
