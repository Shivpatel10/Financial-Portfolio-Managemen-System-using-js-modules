// Task 3: Create the Transaction Module
import { assets, getAssetById } from "./asset.js";

export class Transaction { //Define and export a class Transaction
    constructor(assetId, type, quantity) {
        this.asset = getAssetById(assetId);
        this.type = type;
        this.quantity = quantity;
    }

    updateAssetQuantity() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity; //adds quantity for buy transaction
        } else if (this.type === 'sell') {
            if (this.asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}.`)
            }
            this.asset.quantity -= this.quantity; // subtracts quantity for sell transaction
        }
    }
}