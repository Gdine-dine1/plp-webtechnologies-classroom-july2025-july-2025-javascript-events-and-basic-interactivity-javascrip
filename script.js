// script.js
// Handles all interactive features and form validation

// 1. Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleThemeBtn.textContent = 'Switch to Dark Mode';
    }
});

// 2. Counter Feature
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
let count = 0;

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});
decrementBtn.addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
});

// 3. Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// 4. Form Validation
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address.';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    if (validName && validEmail && validPassword) {
        formSuccess.textContent = 'Sign up successful!';
        form.reset();
        setTimeout(() => { formSuccess.textContent = ''; }, 3000);
    } else {
        formSuccess.textContent = '';
    }
});
