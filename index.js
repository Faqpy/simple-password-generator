function passwdGen() {

    const lengthBox = document.getElementById("lengthBox");
    const upperCheck = document.getElementById("includeUppercase-check");
    const lowerCheck = document.getElementById("includeLowercase-check");
    const symbolCheck = document.getElementById("includeSymbols-check");
    const numberCheck = document.getElementById("includeNumbers-check");
    const passwdPara = document.getElementById("passwdPara");

    const passwdLength = parseInt(lengthBox.value);
    const includeUppercase = upperCheck.checked;
    const includeLowercase = lowerCheck.checked;
    const includeSymbol = symbolCheck.checked;
    const includeNum = numberCheck.checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";
    
    let allowedChars = "";
    let passwd = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNum ? numChars : "";
    allowedChars += includeSymbol ? symbolChars : "";
    
    if (passwdLength <= 0 || isNaN(passwdLength)) {
        passwdPara.textContent = "ERR: Length must be greater than 0.";
        return;
    }
    
    if (allowedChars.length === 0) {
        passwdPara.textContent = "ERR: Select at least one character type.";
        return;
    }

    for (let i = 0; i < passwdLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwd += allowedChars[randomIndex];
    }
    

    passwdPara.textContent = passwd;
}