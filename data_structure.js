// FUNCTIONS DATA STRUCTURE

/* #region printNRecursive */
function printNRecursive(n) {
    if (n > 1) {
        printNRecursive(n - 1);
    }
    console.log(n);
}
/* #endregion */

/* #region countDownToZero */
function countDownToZero(n) {
    // base case. Stop at 0
    if (n < 0) {
        return; // stop the function
    } else {
        console.log(n);
        countDownToZero(n - 1); // count down 1
    }
}
/* #endregion */

/* #region getNthFibo */
function getNthFibo(n) {
    if (n <= 1) return n;
    var sum = 0,
        last = 1,
        lastlast = 0;

    for (var i = 1; i < n; i++) {
        sum = lastlast + last;
        lastlast = last;
        last = sum;
    }
    console.log(sum)
}
/* #endregion */

/* #region getNthFibo_recursive */
// Fibonacci Recursive
// Time O(2^n)
function getNthFibo_recursive(n) {
    if (n <= 1) {
        return n;
    } else {
        // return getNthFibo_recursive(n - 1) + getNthFibo_recursive(n - 2);
        console.log(getNthFibo_recursive(n - 1) + getNthFibo_recursive(n - 2));
    }
}
/* #endregion */

/* #region getNthiboBetter */
function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast;
    }
    if (n == 1) {
        return last;
    }
    return getNthFiboBetter(n - 1, last, lastlast + last);
}
/* #endregion */


let n = (prompt('Ingrese un numero entero:'));
function sieveEratosthenes(n) {
    var arreglo = []
    limiteSuperior = Math.sqrt(n)
    var output = [];

    for (var i = 0; i < n; i++) {
        arreglo.push(true);//Inicializamos el arreglo para los numeros en true 
    }

    for (var i = 2; i <= limiteSuperior; i++) {
        if (arreglo[i]) {
            for (var j = i * i; j < n; j += i) {
                arreglo[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if (arreglo[i]) {
            output.push(i);
        }
    }
    return output;
}

// printNRecursive(10);
// countDownToZero(12);
// getNthFibo(10);
// getNthFibo_recursive(10);
// getNthFiboBetter(10, 1, );
console.log(sieveEratosthenes(n));

