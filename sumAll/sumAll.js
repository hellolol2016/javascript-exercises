const sumAll = function(a, b) {
    if ( a < 0 || b < 0 || typeof a != "number" || typeof b != "number"){
        return "ERROR"
    }
    let sum = 0;
    if(a > b){
        let temp = b;
        b = a;
        a = temp;
    }
    for(let i = a; i <= b; i++){
        sum+=i;
    }
    return sum;
};

module.exports = sumAll;
