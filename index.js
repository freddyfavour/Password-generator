const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"
];

document.getElementById('generate-btn').addEventListener('click', generatePasswords);

const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(button => {
    button.addEventListener('click', copyToClipboard);
});

function generatePasswords() {
    const length = document.getElementById('password-length').value;
    const password1 = generatePassword(length);
    const password2 = generatePassword(length);
    document.getElementById('password1').textContent = password1;
    document.getElementById('password2').textContent = password2;
}

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

function copyToClipboard(event) {
    const targetId = event.target.getAttribute('data-target');
    const passwordText = document.getElementById(targetId).textContent;
    const textArea = document.createElement("textarea");
    textArea.value = passwordText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert('Password copied to clipboard!');
}
