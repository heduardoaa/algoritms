// permutation
// generate all permutations of all elements of an array

// solution 1
const permutations = (text: any) => {
    if (text && typeof text !== "string") {
        throw TypeError("The text value should be a string");
    }
    if (text.length <= 2) {
        return text.length === 2 ? [text, text[1] + text[0]] : [text];
    }

    return text.split("")
        .reduce((a: any,c: any,i: number) =>
            a.concat(permutations(text.slice(0, i) + text.slice(i + 1))
            .map((v: any) => c + v)), []);
};
const result = permutations("abc");
console.info(result);
