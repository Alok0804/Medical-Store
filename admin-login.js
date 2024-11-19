document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy admin credentials for validation
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (username === adminUsername && password === adminPassword) {
        alert("Admin login successful!");
        window.location.href = "dashboard.html"; // Redirect to Dashboard
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});
