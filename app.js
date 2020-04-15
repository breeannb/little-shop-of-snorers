// Step Two of Lab Assignment: Select three random photos from the available product images and display them side-by-side-by-side in the browser window.

// // import functions and data 
import rawProducts from './data/products.js'; 
// import { ProductsArray } from './products-array.js'; 

// establish products and corresponding images from html
const imageOne = document.getElementById('image-one'); 
const imageTwo = document.getElementById('image-two'); 
const imageThree = document.getElementById('image-three');

// const productOptionOne = document.getElementById('product-one');
// const productOptionTwo = document.getElementById('product-two');  
// const productOptionThree = document.getElementById('product-three'); 

// const productName = document.getElementById('product-name'); 
const button = document.getElementById('next-button'); 


// get a random product from my rawArray 
function getRandomProduct(rawProducts) { 
    // console.log(rawProducts);
    let arrayLength = rawProducts.length;
    const randomProductIndex = Math.floor(Math.random() * arrayLength); 
    // console.log(randomProductIndex);
    return rawProducts[randomProductIndex]; 
} 

// get three random products in one function 
function getThreeProducts() {
    let productOne = getRandomProduct(rawProducts);
    let productTwo = getRandomProduct(rawProducts);
    let productThree = getRandomProduct(rawProducts);
    console.log(productOne);
    
    // make sure all three products are completely different from one another 
    while (productOne.id === productTwo.id || productTwo.id === productThree.id || productThree.id === productOne.id) {
        productOne = getRandomProduct(rawProducts); 
        productTwo = getRandomProduct(rawProducts); 
        productThree = getRandomProduct(rawProducts);
    }

    // display the images and content on HTML 
    imageOne.src = productOne.image; 
    imageTwo.src = productTwo.image; 
    imageThree.src = productThree.image; 

}

// event listener for submit button 

button.addEventListener('submit', (getThreeProducts)); 
getThreeProducts();  


