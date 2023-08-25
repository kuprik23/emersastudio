const cube = document.getElementById("cube");
const colorInput = document.getElementById("color");
const sizeSlider = document.getElementById("size");
const personalitySlider = document.getElementById("personality");
const generateAccessCodeButton = document.getElementById("generate-access-code");
const generateAvatarButton = document.getElementById("generate-avatar");
const accessCode = document.getElementById("access-code");
const backstoryInput = document.getElementById("backstory");
const uploadPictureButton = document.getElementById("upload-picture");
const connectWalletButton = document.getElementById("connect-wallet");
const webglCheckbox = document.getElementById("webgl");
const unityCheckbox = document.getElementById("unity");
const threejsCheckbox = document.getElementById("threejs");
const unrealCheckbox = document.getElementById("unreal");
const mersaGptjCheckbox = document.getElementById("mersa-gptj");
const gptLlamCheckbox = document.getElementById("gpt-llam");
const jadaCheckbox = document.getElementById("jada");
const warningWindow = document.getElementById("warning");

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

// Function to generate access code based on the slider values and options
function generateAccessCode() {
    const colorValue = colorInput.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;
    const backstory = backstoryInput.value;

    // Check if language model, rigging option, and polygon optimization are selected
    const languageModelSelected = mersaGptjCheckbox.checked || gptLlamCheckbox.checked || jadaCheckbox.checked;
    const riggingOptionSelected = webglCheckbox.checked || unityCheckbox.checked || threejsCheckbox.checked || unrealCheckbox.checked;
    const polygonOptimized = true; // Implement polygon optimization logic

    if (!languageModelSelected || !riggingOptionSelected || !polygonOptimized) {
        warningWindow.style.display = "block";
        return;
    }

    // Generate access code based on the slider values and options
    let code = `
        // Access Code for Your Custom Avatar:
        // Color: "${colorValue}"
        // Size: ${sizeValue}
        // Personality: ${personalityValue}
        
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

    code += "\n        // Language Models:";

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
    accessCode.value = code;
    warningWindow.style.display = "none"; // Hide the warning
}

// Event listener for the Generate Access Code button
generateAccessCodeButton.addEventListener("click", generateAccessCode);

// Function to copy generated access code to the clipboard
function copyAccessCode() {
    accessCode.select();
    document.execCommand("copy");
}

// Event listener for the Copy Access Code button
generateAccessCodeButton.addEventListener("click", copyAccessCode);

// Event listener for Backstory input
backstoryInput.addEventListener("input", () => {
    // Store the backstory text if needed
    const backstory = backstoryInput.value;
    console.log("Backstory:", backstory);
});

// Function to handle picture upload
function uploadPicture() {
    // Implement picture upload logic here
    console.log("Picture uploaded");
}

// Event listener for Upload Picture button
uploadPictureButton.addEventListener("click", uploadPicture);

// Function to handle wallet connection
function connectWallet() {
    // Implement wallet connection logic here
    console.log("Wallet connected");
}

// Event listener for Connect Wallet button
connectWalletButton.addEventListener("click", connectWallet);

// Toggle warning message visibility
function toggleWarningVisibility() {
    warningWindow.style.display = "none";
}

// Event listeners for the checkboxes to update the warning message
mersaGptjCheckbox.addEventListener("change", toggleWarningVisibility);
gptLlamCheckbox.addEventListener("change", toggleWarningVisibility);
jadaCheckbox.addEventListener("change", toggleWarningVisibility);
webglCheckbox.addEventListener("change", toggleWarningVisibility);
unityCheckbox.addEventListener("change", toggleWarningVisibility);
threejsCheckbox.addEventListener("change", toggleWarningVisibility);
unrealCheckbox.addEventListener("change", toggleWarningVisibility);
