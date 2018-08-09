function factorial(data){
    //let result = 1;
    if(data>0){
        return data * factorial(data-1);
    }
    return 1;
}

let result = factorial(5);

console.log(result);