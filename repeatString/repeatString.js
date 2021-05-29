const repeatString = function(str, rep) {
    let str2 ="";
    if(rep < 0){
        return("ERROR")
    }
    for(let i = 0; i < rep; i++){
        str2+=str;
    }
    return(str2);
};

module.exports = repeatString;
