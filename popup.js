
function generatePassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=<>?/';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

document.addEventListener('DOMContentLoaded', function () {
    const GenButton = document.getElementById('GenerateButton');
  
    GenButton.addEventListener('click', function () {
      const newPassword = generatePassword(12);
      copyToClipboard(newPassword);
      console.log('Password copied to clipboard:', newPassword);
     });

  });
  