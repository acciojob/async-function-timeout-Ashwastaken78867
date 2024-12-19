document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value; // Get the text input
  const delay = document.getElementById("delay").value; // Get the delay input
  
  // Check if text is not empty and delay is positive
  if (text && delay > 0) {
    // Create a promise that resolves after the given delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // After the delay, display the text in the output div
    document.getElementById("output").textContent = text;
  } else {
    // If input is invalid, show an error message
    document.getElementById("output").textContent = "Enter valid text and delay.";
  }
});
