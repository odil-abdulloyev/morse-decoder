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
    // write your solution here
    let result = '';
    let exprArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        exprArr.push(expr.substr(i, 10));
    }
    for (let i = 0; i < exprArr.length; ++i) {
        if (exprArr[i] === '**********') {
            result += ' ';
            continue;
        }
        const letterCode = exprArr[i];
        let morseCode = '';
        for (let j = 0; j < letterCode.length; j += 2) {
            if (letterCode[j] === '1' && letterCode[j + 1] === '0') {
                morseCode += '.';
            } else if (letterCode[j] === '1' && letterCode[j + 1] === '1') {
                morseCode += '-';
            }
        }
        result += MORSE_TABLE[morseCode];
    }
    return result;
}

module.exports = {
    decode
}