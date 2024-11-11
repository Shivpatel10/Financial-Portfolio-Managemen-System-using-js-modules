// Task 1: Create the Asset Module
//Named exports
export const assets = [
    {id: 1, name: 'JPM', type: 'stock', price: 236.98, quantity: 50},
    {id: 2, name: 'BAC', type: 'stock', price: 45.13, quantity: 50},
    {id: 3, name: 'WFC', type: 'stock', price: 70.04, quantity: 50},
    {id: 4, name: 'C', type: 'stock', price: 68.63, quantity: 50},
    {id: 5, name: 'GS', type: 'stock', price: 589.26, quantity: 50},
    {id: 6, name: 'MS', type: 'stock', price: 129.53, quantity: 50},
    {id: 7, name: 'PNC', type: 'stock', price: 203.97, quantity: 50}
];

export function getAssetById(id) { // function to get asset by its ID
    return assets.find(asset => asset.id === id);
}