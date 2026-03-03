document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("feedback");
    const viewButton = document.getElementById("view-saved-data");
    const savedDataDiv = document.getElementById("saved-data");
    const clearButton = document.getElementById("clear-saved-data");

  
    clearButton.addEventListener("click", function() {
        savedDataDiv.textContent = "";
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("number");
        localStorage.removeItem("password");

        feedbackDiv.textContent = "Saved data cleared.";
        feedbackDiv.style.color = "red";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        if (username.length < 4) {
            isValid = false;
            messages.push("Username must be at least 4 characters long.");
        }
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        if (number.length !== 10 || isNaN(number)) {
            isValid = false;
            messages.push("Please enter a valid 10-digit phone number.");
        }
        if (
            password.length < 8 ||
            !/\d/.test(password) ||
            !/[!@#$%^&*]/.test(password) ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password)
        ) {
            isValid = false;
            messages.push("Password must be at least 8 characters long and contain a number, a special character, an uppercase letter, and a lowercase letter.");
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "green";

            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("number", number);
            localStorage.setItem("password", password);


            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "red";
        }
    });

    viewButton.addEventListener("click", function() {

        if (savedDataDiv.style.display === "block") {
            savedDataDiv.style.display = "none";
        } else {
        const savedUsername = localStorage.getItem("username");
        const savedEmail = localStorage.getItem("email");
        const savedNumber = localStorage.getItem("number");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername || savedEmail || savedNumber || savedPassword) {
            savedDataDiv.innerHTML = `
                <strong>Saved Data:</strong><br>
                Username: ${savedUsername || "Not saved"}<br>
                Email: ${savedEmail || "Not saved"}<br>
                Phone: ${savedNumber || "Not saved"}<br>
                Password: ${savedPassword || "Not saved"}
            `;
            savedDataDiv.style.color = "blue";
        } else {
            savedDataDiv.textContent = "No saved data found.";
            savedDataDiv.style.color = "gray";
        }
        savedDataDiv.style.display = "block";
        }
    });
});
