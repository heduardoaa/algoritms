/*
Write  a program that permit show numbers from 1 to 100
replacing multiples of 3 by "fizz", multiples of 5 for "buzz"
and multiples of both (3 and 5) "fizzbuzz"
*/

function showNumber() {
    let number = [];
    for(let i = 1; i<=100; i++) {
        if (i % 3) {
            number.push(i);
        } else {
            number.push("fizz");
        }

        if (number.length % 5) {
            // nothing to do
        } else {
            if (number[number.length - 1] === "fizz") {
                number[number.length - 1] = 'fizzbuzz';
            } else {
                number[number.length - 1] = "buzz";
            }
        }
    }
    return number;
}

console.log(showNumber());
