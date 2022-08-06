const caesar = function(sentence, shift) {
    let cypher = '';
    shift = shift % 27;
    for(let i = 0; i < sentence.length; i++)
    {
        if(sentence[i] == ',' || sentence[i] == '.' || sentence[i] == '!' || sentence[i] == ' ')
        {
            cypher += sentence[i];
        }
        else{
            let currentAscii = sentence.charCodeAt(i);
            let newAscii = currentAscii + shift;

            if(currentAscii >= 65 && currentAscii <= 90 && newAscii > 90)
            {
                newAscii = newAscii - 26;
            }
            else if(currentAscii >= 65 && currentAscii <= 90 && newAscii < 65)
            {
                newAscii = newAscii + 26;
            }
            else if(currentAscii >= 97 && currentAscii <= 122 && newAscii > 122)
            {
                newAscii = newAscii - 26;
            }
            else if(currentAscii >= 97 && currentAscii <= 122 && newAscii < 97)
            {
                newAscii = newAscii + 26;
            }

            cypher += String.fromCharCode(newAscii);
        }
    }

    return cypher;
};

// Do not edit below this line
module.exports = caesar;
