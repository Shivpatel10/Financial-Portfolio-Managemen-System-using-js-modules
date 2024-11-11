// Task 2: Create Portfolio Module
import { assets } from "./asset.js"; //Importing named exports from portfolio.js

export function calculatePortfolioValue() { //function to sum the total value of portfolio
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
    const totalPortfolioValue = calculatePortfolioValue() //creating variable
    
    return assets.map(asset => {
        const allocationPercentage = ((asset.price * asset.quantity) / totalPortfolioValue) * 100;
        return {
            name: asset.name,
            allocation: Number(allocationPercentage.toFixed(2))
        };
    });
}