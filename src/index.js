const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";

    while(expr.length % 10 != 0)
        expr = '0' + expr;

    for(let j = 0; j + 10 <= expr.length; j += 10) {
        let letter = expr.substr(j, 10);
        
        if(letter === "**********")
            result += ' ';
        else {

            letter = letter.replace(/10/g,".");
            letter = letter.replace(/11/g,"-");
            letter = letter.replace(/0/g,"");

            result += MORSE_TABLE[letter];
        }
    }

    return result;
}

module.exports = {
    decode
}
