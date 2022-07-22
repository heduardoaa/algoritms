// What is the runtime of the below code?
const foo = ( arr: any = [] ) => {
    let sum: number = 0;
    let product: number = 1;
    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[ i ];
    }
    for ( let j = 0; j < arr.length; j++ ) {
        product *= arr[ j ];
    }
    return ( sum + ", " + product );
}

const arrd: any = [1,2];

console.log(foo(arrd));