// Initialize Three.js variables
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

// Function to update the cube's rotation and shape based on the slider values
function updateCube() {
    const rotationValue = typeSlider.value;
    cube.rotation.x = (rotationValue * Math.PI) / 180; // Convert degrees to radians

    const personalityValue = personalitySlider.value;
    // Change cube's shape based on personality slider (e.g., scale it)
    cube.scale.set(1, 1, personalityValue);
}

// Event listeners for slider changes
const typeSlider = document.getElementById("type");
typeSlider.addEventListener("input", updateCube);

const personalitySlider = document.getElementById("personality");
personalitySlider.addEventListener("input", updateCube);

// Function to generate code based on the slider values
function generateCode() {
    const rotationValue = typeSlider.value;
    const personalityValue = personalitySlider.value;

    // Generate code based on the slider values
    const code = `
        // Add code here to create a rotating cube with the selected properties
        // Rotation: ${rotationValue} degrees
        // Personality: ${personalityValue}
    `;

    // Display the generated code
    generatedCode.textContent = code;
}

// Event listener for the Generate Code button
const generateCodeButton = document.getElementById("generate-code");
generateCodeButton.addEventListener("click", generateCode);

// Function to animate the cube
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
