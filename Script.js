const captchaText = document.getElementById('captchaText');
const captchaInput = document.getElementById('captchaInput');
const verifyButton = document.getElementById('verifyButton');
const refreshButton = document.getElementById('refreshButton');
const resultMessage = document.getElementById('resultMessage');

// Function to generate random CAPTCHA
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Function to refresh CAPTCHA
function refreshCaptcha() {
    const newCaptcha = generateCaptcha();
    captchaText.textContent = newCaptcha;
    captchaInput.value = '';
    resultMessage.textContent = '';
}

// Verify CAPTCHA
verifyButton.addEventListener('click', () => {
    if (captchaInput.value === captchaText.textContent) {
        resultMessage.textContent = 'CAPTCHA Verified Successfully!';
        resultMessage.classList.add('success');
        resultMessage.classList.remove('error');
    } else {
        resultMessage.textContent = 'Incorrect CAPTCHA. Please try again.';
        resultMessage.classList.remove('success');
        resultMessage.classList.add('error');
    }
});

// Refresh CAPTCHA on button click
refreshButton.addEventListener('click', refreshCaptcha);

// Generate initial CAPTCHA on load
refreshCaptcha();