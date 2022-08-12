// how many times is repeated a character of a text;

// solution 1
const txt: string = "hello world";
const char: string = "o";

let times: number = 0;
for(let i = 0; i< txt.length; i++) {
    if (txt[i] === char) {
        times += 1;
    }
}

 console.info(`Character '${char}' is repeated ${times} times.`);
