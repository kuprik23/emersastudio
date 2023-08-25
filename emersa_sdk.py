import requests

# URL of the web application
BASE_URL = "http://your-web-app-url.com"

# Function to generate an avatar access code
def generate_avatar_access_code(shape, personality, color, backstory, language_models):
    endpoint = f"{BASE_URL}/generate-access-code"
    
    # Prepare the payload
    payload = {
        "shape": shape,
        "personality": personality,
        "color": color,
        "backstory": backstory,
        "language_models": language_models
    }
    
    # Send a POST request to generate the access code
    response = requests.post(endpoint, json=payload)
    
    if response.status_code == 200:
        return response.text
    else:
        return None

# Example usage:
if __name__ == "__main__":
    shape = "cube"
    personality = "friendly"
    color = "#00FF00"
    backstory = "Once upon a time..."
    language_models = ["mersa-gptj", "gpt-llam"]
    
    access_code = generate_avatar_access_code(shape, personality, color, backstory, language_models)
    
    if access_code:
        print(f"Generated Access Code:\n{access_code}")
    else:
        print("Access code generation failed.")
