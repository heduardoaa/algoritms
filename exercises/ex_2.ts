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

const txtReverseX2 = wordToReverse.split("").reverse().join("");
console.info(txtReverseX2);

// solution 3

let txtReverseX3 = "";

for(let letter of wordToReverse) {
    letter += txtReverseX3
    txtReverseX3 = letter
    }
console.log(txtReverseX3);

