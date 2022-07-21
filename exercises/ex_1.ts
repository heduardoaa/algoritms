// TODO: function for get how many pairs of number have on number's array

const n = 9;
const arr = [ 10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 50, 50, 90, 90, 100, 80, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 5, 4, 6, 3, 2, 1, 5, 9, 5, 2, 6, 6, 5, 4, 1, 2, 3, 6, 9, 8, 7, 1, 1, 2, 3, 2, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9 ];

const getPairsfromArray = ( arr: any ): any => {
    let prime: any = [];
    const dataObj: any = {};

    for ( let i = 0; i < arr.length; i++ ) {
        prime.push( arr[ i ] );
    }

    for ( let j = 0; j < arr.length; j++ ) {
        if ( arr[ j ] === prime[ j ] ) {
            const number: string = prime[ j ].toString();
            if ( dataObj && Object.keys( dataObj ).indexOf( number ) > -1 ) {
                dataObj[ number ].quantity += 1;
            } else {
                dataObj[ number ] = {};
                dataObj[ number ].quantity = 1;
            }
        }
    }
    const JsonResult = dataObj;
    for ( let j = 0; j < arr.length; j++ ) {
        if ( arr[ j ] === prime[ j ] ) {
            const number: string = prime[ j ].toString();
            if ( JsonResult && Object.keys( JsonResult ).indexOf( number ) !== -1 ) {
                JsonResult[ number ].numberPairs = Number.isInteger( JsonResult[ number ].numberPairs ) ? ( JsonResult[ number ].quantity / 2 ) : Math.round( JsonResult[ number ].quantity / 2 ) - 1;
            }
        }
    }
    return JsonResult;
}

const result = getPairsfromArray( arr );
console.log( "arr" );
console.log( arr.sort() );
console.info( result );



