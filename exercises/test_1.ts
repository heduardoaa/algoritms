// create a function for get how many pairs of number have on number's array
// resolved

const n = 9;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

let prime = [];
const dataObj: any = {};

for (let i = 0; i < arr.length; i++) {
    prime.push(arr[i]);
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] === prime[j]) {
        const number: string = prime[j].toString();
        if (dataObj && Object.keys(dataObj).indexOf(number) > -1) {
            dataObj[number] = dataObj[number] + 1;
        } else {
            dataObj[number] = 0;
        }
    }
}

console.info(dataObj);