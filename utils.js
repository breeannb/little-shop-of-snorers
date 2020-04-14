// imports
import products from './data/products.js'; 

// need a function to removeProduct from the list 

export function removeProductFromList() { 

}

// need function to find product by ID 
export function findProductById() { 

}

// this function will be 
export function chooseTwoProducts() { 
    const AllRemainingProducts = JSON.parse(localStorage.get('AllRemainingProducts')); //parsing the string from local storage

    const userChoiceProductIndex = Math.floor(Math.random(AllRemainingProducts.length)); //get a random number between our remaining products array 
    const userChoiceProduct = AllRemainingProducts[userChoiceProductIndex]; 
}

// this function will choose two other products that were not chosen by the user in the guess previous
export function 