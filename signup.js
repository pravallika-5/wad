function validatePassword(password) {
    // Check for at least 8 characters, uppercase letter, number, and special character
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}

function handleSignUp(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordWarning = document.getElementById('password-warning');
    const confirmPasswordWarning = document.getElementById('confirm-password-warning');
    const successMessage = document.getElementById('success-message');

    // Reset warnings
    passwordWarning.style.display = 'none';
    confirmPasswordWarning.style.display = 'none';

    // Check password strength
    if (!validatePassword(password)) {
        passwordWarning.style.display = 'block';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordWarning.style.display = 'block';
        return;
    }

    // Display success message
    successMessage.style.display = 'block';
}
