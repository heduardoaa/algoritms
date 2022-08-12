// create an Array separate by spaces

const words = "lundi mardi    mercredi  jeudi    vendredi    samedi dimanche";

// solution 1

let result: any = words.replace(/\s+/g, " ");
    result = result.split(" ");

console.info(result);

// solution 2
