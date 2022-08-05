const palindromes = function (string) {
    let newString = '';
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    for(let i = string.length - 1; i >= 0; i--)
    {
        newString += string[i];
    }

    return string == newString;

};

// Do not edit below this line
module.exports = palindromes;
