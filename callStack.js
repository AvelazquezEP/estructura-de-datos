// FUNCTIONS DATA STRUCTURE
function printNRecursive(n) {
    if (n > 1) {
        printNRecursive(n - 1);
    }
    console.log(n);
}

function countDownToZero(n) {
    // base case. Stop at 0
    if (n < 0) {
        return; // stop the function
    } else {
        console.log(n);
        countDownToZero(n - 1); // count down 1
    }
}

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
    // return sum;
}

// printNRecursive(10);
countDownToZero(12);
// getNthFibo(3);

