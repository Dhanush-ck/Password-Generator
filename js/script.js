const length = 12;
const input = document.getElementById("inputBox");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}\|;:,.<>/?";
const allChar = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    input.value = password;
}

function copyText() {
    input.select();
    document.execCommand("copy");
}