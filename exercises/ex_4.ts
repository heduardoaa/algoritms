// Hamming distance

const text1: string = "hello hamming";
const text2: string = "salut hamming";

let distance = 0;

if (text1.length != text2.length) {
    throw new Error("distinct length");
    }

    for(let i = 0; i< text1.length; i++) {
        if (text1[i] != text2[i]){
            distance ++;
        }
    }

    console.info(`The distance is ${distance}`)