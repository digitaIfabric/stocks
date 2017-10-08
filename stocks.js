function maxProfit(A){
    // Define max value from array A
    var maxValue = Math.max.apply(0, A);
    // Check the index of the MaxV
    var indexMaxV = A.lastIndexOf(maxValue);
    var minValue = Math.min.apply(0, A.slice(0, indexMaxV));
    // If index value of maxValue is 0, then remove from array A
    if (indexMaxV === 0){
        return maxProfit(A.slice(1));
    }
    // If index is not before min value, return profit
    return maxValue - minValue;
}

module.exports = maxProfit;