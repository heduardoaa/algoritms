// create an Array separate by spaces

const words = " lundi mardi    mercredi  jeudi    vendredi    samedi dimanche";

// solution 1

let result: any = words.replace(/\s+/g, " ").trim().split(" ");

console.info(result);

// solution 2

let result2: any = [];
let wordTmp = "";
for (let letter of words) {
    wordTmp += ((letter === " ") ? "" : letter);

    if (wordTmp !== "" && letter === " ") {
        result2[result2.length] = wordTmp;
        wordTmp = "";
    }
}

if(wordTmp !== "") {
    result2[result2.length] = wordTmp;
}

console.info(result2)
