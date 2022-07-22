// TODO: function to reverse a string
const reverseStr = (str: string) => {
    let txt = "";    
    for(let i = str.length -1; i >= 0; i--) {
        txt += str[i];
    }
    return txt;
};

const txtReverse = reverseStr("hello world");
console.info(txtReverse)

