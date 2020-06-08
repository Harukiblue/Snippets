function GetRandomNumber(max, min){
    max = max === undefined ? 0 : max;
    min = min === undefined ? 0 : min;
    return Math.floor(Math.random() * ((max - min) + 1)) + min; 
}