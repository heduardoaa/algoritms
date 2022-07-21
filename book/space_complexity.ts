const sum = (n) => {
    if(n <= 0) {
        return 0;
    }
    const x = n + sum(n - 1);
    console.log("sum: " + x); 
    return x;
};

sum(999);

const pairSumSequence = (n: number) => {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += pairSum(i, i + 1);
    }
    console.log("result: " + sum);
    return sum;
}
 const pairSum = (a: number, b: number) => {
    const result = a + b;
    console.log("pairing sum: " + result);
    return result;
 }

 pairSumSequence(3);
