document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic username and password validation (you can replace with actual validation logic)
    if (username === "madhu" && password === "2302") {
        // Successful login, redirect to another page
        window.location.href = "dashboard.html";  // Change to your desired page
    } else {
        // Display error message
        document.getElementById("error-message").style.display = "block";
    }
});