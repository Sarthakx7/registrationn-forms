document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    if (name && email && password && dob) {
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
    } else {
        alert('Please fill in all fields.');
    }
});

// Optionally, retrieve user data from Local Storage
document.addEventListener('DOMContentLoaded', function() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Stored user data:', user);
    }
});
