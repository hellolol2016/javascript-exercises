const removeFromArray = function(arr, item, item2) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===item || arr[i] == item2){
            arr.splice(i,1);
        }
    }
    return arr
};

module.exports = removeFromArray;
