function passwdGen(passwdLength, includeLowercase, includeUppercase, includeNum, includeSymbol){

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
    
    if(passwdLength <= 0){
        console.log("ERR: The length of password cannot be less than 0.")
    };
    if(allowedChars.length === 0){
        console.log("ERR: Select atleast one option to generate a password.")
    };
    for(let i=0; i<passwdLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwd += allowedChars[randomIndex];
    }
    
    return passwd;
};
const passwdLength = window.prompt(`Enter the Require Length`);
const includeLowercase = true;
const includeUppercase = true;
const includeNum = true;
const includeSymbol = true;

const passwd = passwdGen(passwdLength, includeLowercase, includeUppercase, includeNum, includeSymbol);

if(passwdLength === null || passwdLength <= 0){
    document.getElementById("passwdHead").textContent = `Password couldn't be generated`
    document.getElementById("passwdPara").textContent = `ERR: You can't have 0 or a negative integer as your password length`;
}
else{
    document.getElementById("passwdPara").textContent = passwd;
}

