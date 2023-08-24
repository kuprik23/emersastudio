const cube = document.getElementById("cube");
const colorInput = document.getElementById("color");
const sizeSlider = document.getElementById("size");
const personalitySlider = document.getElementById("personality");
const generateAccessCodeButton = document.getElementById("generate-access-code");
const copyAccessCodeButton = document.getElementById("copy-access-code");
const accessCode = document.getElementById("access-code");
const backstoryInput = document.getElementById("backstory");
const uploadPictureButton = document.getElementById("upload-picture");
const connectWalletButton = document.getElementById("connect-wallet");

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

// Function to generate access code based on the slider values
function generateAccessCode() {
    const colorValue = colorInput.value;
    const sizeValue = sizeSlider.value;
    const personalityValue = personalitySlider.value;

    // Generate access code based on the slider values
    const code = `
        // Access Code for Your Custom Avatar:
        // Color: "${colorValue}"
        // Size: ${sizeValue}
        // Personality: ${personalityValue}
        
        // Use this code to access your custom avatar.
    `;

    // Display the generated access code
    accessCode.value = code;
}

// Event listener for the Generate Access Code button
generateAccessCodeButton.addEventListener("click", generateAccessCode);

// Function to copy generated access code to the clipboard
function copyAccessCode() {
    accessCode.select();
    document.execCommand("copy");
}

// Event listener for the Copy Access Code button
copyAccessCodeButton.addEventListener("click", copyAccessCode);

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
