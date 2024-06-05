document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('dobError').textContent = '';

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;

    // Validate form fields
    let valid = true;

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required.';
        valid = false;
    }

    if (valid) {
        const user = {
            name: name,
            email: email,
            password: password,
            dob: dob
        };

        // Save user data to Local Storage
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        // Optionally, clear the form
        document.getElementById('registrationForm').reset();
    }
});
