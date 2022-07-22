
// Space complexity is a parallel concept to time complexity


// Code like this would take 0(n) time and 0(n^2) space.
const sum = (n: any) => {
    if(n <= 0) {
        return 0;
    }
    const x: any = n + sum(n - 1);
    return x;
};

console.log("result sum() : " + sum(2));

// Just because you have n calls total doesn't mean it takes 0(n) space. 
const pairSumSequence = (n: number) => {
    let sum = 0; 
    for(let i = 0; i < n; i++) {
        sum += pairSum(i, i + 1);
    }
    return sum;
}
 const pairSum = (a: number, b: number) => {
    const result = a + b;
    return result;
 }

 console.log("result pairSumSequence() : " + pairSumSequence(2));
