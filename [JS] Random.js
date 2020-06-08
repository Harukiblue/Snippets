
function GetRandomInt(max, min){
    max = max === undefined ? 0 : max;
    min = min === undefined ? 0 : min;
    if(max < min){
        var tmax = max;
        max = min;
        min = tmax;
    }
    return Math.floor(Math.random() * ((max - min) + 1)) + min; 
}

function GetRandomDecimal(max, min){
    if(max < min){
        var tmax = max;
        max = min;
        min = tmax;
    }
    max = max === undefined ? 0 : max;
    min = min === undefined ? 0 : min;
    return Math.random() * (max - min) + min; 
}