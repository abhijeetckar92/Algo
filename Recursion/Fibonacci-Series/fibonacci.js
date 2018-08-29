arrFib=[0,1,1]

const fib = (n)=>{
    if(arrFib[n]){
        return arrFib[n];
    }

    console.log(`fib(${n})`);

    if(n <= 2){
        return 1;
    }

    arrFib[n] = fib(n-1) + fib(n-2);

    return arrFib[n];
}

console.log(fib(6));