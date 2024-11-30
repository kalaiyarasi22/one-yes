// script.js

// Simulating real-time data (Replace with API or sensor integration in actual implementation)
function updateSensors() {
    // Generate mock data for sensors
    const temperature = (Math.random() * (35 - 15) + 15).toFixed(1);
    const light = (Math.random() * 1000).toFixed(0);
    const sound = (Math.random() * (100 - 30) + 30).toFixed(0);
    const motion = Math.random() > 0.5 ? "Detected" : "Not Detected";
    const humidity = (Math.random() * (80 - 20) + 20).toFixed(0);

    // Update the dashboard
    document.getElementById("temp-value").textContent = temperature;
    document.getElementById("light-value").textContent = light;
    document.getElementById("sound-value").textContent = sound;
    document.getElementById("motion-status").textContent = motion;
    document.getElementById("humidity-value").textContent = humidity;
}

// Update sensors every 2 seconds
setInterval(updateSensors, 2000);

// Initialize the dashboard with data
updateSensors();
