// Task 2: Create Portfolio Module
import { assetList } from "./asset"; //Importing named exports from portfolio.js

export function calculatePortfolio(assetList) { //function to sum the total value of portfolio
    return assetList.reduce((totalValue, asset) => {
        return totalValue + (asset.price * asset.quantity)
    }, 0);
};

