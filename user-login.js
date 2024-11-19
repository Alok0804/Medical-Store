document.getElementById("userLoginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy user credentials for validation
    const userUsername = "user";
    const userPassword = "user123";

    if (username === userUsername && password === userPassword) {
        alert("User login successful!");
        window.location.href = "inventory.html"; // Redirect to Inventory
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});
