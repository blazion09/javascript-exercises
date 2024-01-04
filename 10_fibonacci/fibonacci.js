const fibonacci = function (n) {
    if(n < 0){
        return 'OOPS';
    }
    let fib = [1, 1];
    n -= 1;
    let nextnumber = 0;
    for (let i = 0; i <= n; i++) {
        nextNumber = fib[i] + fib[i + 1];
        fib.push(nextNumber);
    }
    return fib[n];
}



// Do not edit below this line
module.exports = fibonacci;
