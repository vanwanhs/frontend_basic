function isStrongPassword(password) {
    if (password.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
}

console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass")); 
console.log(isStrongPassword("ABCD1234")); 
console.log(isStrongPassword("abcde1234"));
console.log(isStrongPassword("Abcdefgh")); 
