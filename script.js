const input = document.getElementById('form-input');
const message = document.getElementById('message');
const button = document.getElementById('form-submit');

// Check if the email is valid
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// When the button is clicked, check if the input is not empty and valid
button.addEventListener('click', (e) => {
  e.preventDefault();

  const value = input.value;
  const isValidEmail = validateEmail(value);

  input.style.border = isValidEmail ? '1px solid var(--pale-blue)' : '1px solid var(--light-red)';
  message.style.color = isValidEmail ? 'var(--blue)' : 'var(--light-red)';

  if (!value || !isValidEmail) {
    message.textContent = 'Please provide a valid email';
  } else {
    message.textContent = 'Thank you for subscribing!';
  }
});