// pass an array of stock pricess to the function
// and it should return the best possible prices 
// to buy and sell stocks to gain max profit
// it should return -1 if profit is not possible

function maxStockProfit(pricesArr) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) { buyPrice = pricesArr[i]; }
        sellPrice = pricesArr[i + 1];
        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) { maxProfit = tempProfit; }
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}