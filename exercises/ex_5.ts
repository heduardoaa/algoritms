// word counter

const text: string = "a text that have words";

const arrSpl: any = text.split(" ");
const wordsCounter: number = arrSpl.length;
console.info(`Number of words is ${wordsCounter}`);