/*
    We're only dealing with 2d vectors and 2x2 matrices here!
*/

/*
    Determines whether a matrix/vector is valid.
    To be valid, all inputs must be nonempty numbers
*/
function isValid(x) {
    for(let i = 0; i < x.length; i ++) {
        if(isNaN(x[i]) || x[i] === '') {
            return false;
        }
    }

    return true;
}


/*
    Multiplies the matrices in the order m1 * m2

    [0  1]      [0  1]
    [2  3]      [2  3]
*/
export function multiplyMatrices(m1 , m2) {
    if(isValid(m1) && isValid(m2))
    {
        return( 
            [
                m1[0] * m2[0] + m1[1] * m2[2] ,
                m1[0] * m2[1] + m1[1] * m2[3] ,
                m1[2] * m2[0] + m1[3] * m2[2] ,
                m1[2] * m2[1] + m1[3] * m2[3] ,
            ]
        );
    } else {
        return [1 , 0 , 0 , 1];
    }
}


/*
    [0  1]  [0]
    [2  3]  [1]
*/
export function multiplyVector(m , v) {
    if(isValid(m) && isValid(v)) {
        return(
            [
                m[0] * v[0] + m[1] * v[1] ,
                m[2] * v[0] + m[3] * v[1] ,
            ]
        );
    } else {
        return v;
    }
}