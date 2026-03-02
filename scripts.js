document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userform");
    const feedbavkDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username.length < 4) {
        isValid = false;
        this.ariaErrorMessageElements.push("Username must be atleast 4 characters long.");
    }
    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        this.ariaErrorMessageElements.push("Please enter a valid email address");
    }

    if (number.length !== 10 || isNaN(number)) {
        isValid = false;
        this.ariaErrorMessageElements.push("Please enter a valid 10-digit phone number");
    }

    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        isValid = false;
        this.ariaErrorMessageElements.push("Password must be at least 8 characters long and contain a number, a special character, an uppercase letter, and a lowercase letter.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "green";
    } else {
        feedbackDiv.innerHTML = this.ariaErrorMessageElements.join("<br>");
        feedbackDiv.style.color = "red";    
    }
    });
});