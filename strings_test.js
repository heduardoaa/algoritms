// poner alrevez el string
const str = "anita lava la tina";

console.log(str.length)
let txt = "";

for(i = str.length -1; i >= 0; i--) {
    console.log(i)
    txt += str[i];
}
console.log(txt);
