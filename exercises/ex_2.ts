// TODO: function to reverse a string

const wordToReverse: string = "Hello World";
// solution 1
const reverseStr = (str: string) => {
    let txt = "";
    for(let i = str.length -1; i >= 0; i--) {
        txt += str[i];
    }
    return txt;
};

const txtReverse = reverseStr(wordToReverse);
console.info(txtReverse);

// solution 2

const txtReversex2 = wordToReverse.split("").reverse().join("");
console.info(txtReversex2);

// solution 3

let txtReversex3 = "";

for(let letter of wordToReverse) {
    letter += txtReversex3
    txtReversex3 = letter
    }
console.log(txtReversex3);

