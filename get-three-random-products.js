//import raw Data 
import rawProducts from './data/products.js';

// get a random product from my rawArray 
export function getRandomProduct(rawProducts) { 
    let arrayLength = rawProducts.lenght; 
    const randomProductIndex = Math.floor(Math.random() * arrayLength);

    return rawProducts[randomProductIndex]; 
}

// get three random products in one function 
export function getThreeProducts() { 
    let productOne = getRandomProduct(rawProducts); 
    let productTwo = getRandomProduct(rawProducts); 
    let productThree = getRandomProduct(rawProducts); 

    //we need to make sure that the three products are completely different than eachother when displayed
    while (productOne.id === productTwo.id || productTwo.id === productThree.id ||productThree.id === productOne.id) {
        productOne(getRandomProduct(rawProducts));
        productTwo(getRandomProduct(rawProducts));
        productThree(getRandomProduct(rawProducts)); 
    }

    //display those images and content on html page
    imageOne.src = productOne.image; 
    imageTwo.src = productTwo.image; 
    imageThree.src = productOne.image; 

    productRadioOne.value = productOne.id; 
    productRadioTwo.value = productTwo.id; 
    productRadioThree.value = productThree.id; 
    
}