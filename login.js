// Get the form element
const form = document.getElementById('loginForm');

// Add event listener to form submission
form.addEventListener('submit', function (e) {
    // Prevent form from submitting immediately
    e.preventDefault();

    // Get email and password values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate the form inputs
    if (validateForm(email, password)) {
        // If validation passes, proceed with login
        loginUser(email, password);
    }
});

// Function to validate email and password
function validateForm(email, password) {
    // Clear any previous error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    // Validate email format
    if (!validateEmail(email)) {
        showError('Please enter a valid email address.');
        return false; // Stop form submission
    }

    // Validate password length and strength
    if (!validatePassword(password)) {
        showError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
        return false; // Stop form submission
    }

    return true; // Validation passed
}

// Function to display error messages
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password strength
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
}

// Simulated function to handle login (replace this with actual server request)
function loginUser(email, password) {
    // Simulate a successful login (this is just for testing purposes)
    alert('Login successful');
    // Redirect to the timetable generation page after successful login
    window.location.href = 'timetablegen.html';
}
