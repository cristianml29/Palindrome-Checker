const button = document.getElementById('check-btn');
const textDiv = document.getElementById('result');

button.addEventListener('click', () => {
    let textInput = document.getElementById('text-input').value;
    if (textInput === '') {
        alert("Please input a value");
    }

    let normalString = cleanString(textInput);
    let reversedString = normalString.split("").reverse().join("");
    let isPalindrome = normalString === reversedString;
    if (isPalindrome) {
        textDiv.innerText = `${textInput} is a palindrome`;
    } else {
        textDiv.innerText = `${textInput} is not a palindrome`;
    }
})

function cleanString(str) {
    let getLettersOnly = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return getLettersOnly;
}
