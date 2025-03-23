document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = "Nama harus lebih dari 3 karakter";
        isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Email tidak valid";
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password harus minimal 8 karakter";
        isValid = false;
    }

    if (isValid) {
        alert("Pendaftaran berhasil!");
    }
});