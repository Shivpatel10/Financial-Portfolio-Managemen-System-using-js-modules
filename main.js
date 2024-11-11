// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";


//initial total portfolio value
let totalPortfolioValue = calculatePortfolioValue();
console.log(`Initial Portfolio Value: $${totalPortfolioValue.toFixed(2)}`);

//a buy transaction for JPM and sell transaction for C
console.log("\nProcessing Transactions:");

    //buying 10 of JPM
    const buyTransaction = new Transaction(1, 'buy', 10); // assetId 1 for JPM
    buyTransaction.updateAssetQuantity();
    console.log(`Transaction: Bought 10 units of ${buyTransaction.asset.name}`);

    //selling 5 of C
    const sellTransaction = new Transaction(4, 'sell', 5); // assetId 4 for C
    sellTransaction.updateAssetQuantity();
    console.log(`Transaction: Sold 5 units of ${sellTransaction.asset.name}`);


//the updated total portfolio value
totalPortfolioValue = calculatePortfolioValue();
console.log(`\nUpdated Portfolio Value: $${totalPortfolioValue.toFixed(2)}`);

//the updated allocation percentages
console.log("Updated Portfolio Allocation:");
getPortfolioAllocation().forEach(asset => {
    console.log(`Asset: ${asset.name}, Allocation: ${asset.allocation}%`);
});