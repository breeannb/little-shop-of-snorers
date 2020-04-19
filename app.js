// Step 2: The thing you want to build today will select three random photos from the available product images and display them side-by-side-by-side in the browser window.

// // import functions and data 
import rawProducts from './data/products.js'; 
import findById from './common/find-by-id.js';

// establish products and corresponding images from html static design or the DOM
const imageOne = document.getElementById('image-one'); 
const imageTwo = document.getElementById('image-two'); 
const imageThree = document.getElementById('image-three');

const productRadioOne = document.getElementById('product-one'); 
const productRadioTwo = document.getElementById('product-two');
const productRadioThree = document.getElementById('product-three');


// get a random product from my rawArray 
function getRandomProduct(rawProducts) { 
    let arrayLength = rawProducts.length;
    const randomProductIndex = Math.floor(Math.random() * arrayLength); 
    return rawProducts[randomProductIndex]; 
} 

// get three random products in one function 
function getThreeProducts() {
    let productOne = getRandomProduct(rawProducts);
    let productTwo = getRandomProduct(rawProducts);
    let productThree = getRandomProduct(rawProducts);

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

    productRadioOne.value = productOne.id; 
    productRadioTwo.value = productTwo.id;
    productRadioThree.value = productThree.id;
}


const myForm = document.getElementById('add-new-product'); 

// event listener for submit button 
myForm.addEventListener('submit', () => {
    event.preventDefault(); //with a form event listener, we have to prevent default or it will change the URL
    // const userChoice = document.querySelector('input[type=radio]:checked').value;
    // const myFormData = new FormData(myForm); 

    // console.log(userChoice);


    //retrieving existing votes array from Local Storage. If no votesarray, we need an empty array. IF there is, we need to json.parse to unstringify
    let votesArrayInLocalStorage = localStorage.getItem('VOTESARRAY'); // set variable to cart in local storage
    let votesArray; //creating votesArray holder
    //if there is a votesArray holder: turn a string into an object
    if (votesArrayInLocalStorage) { 
        votesArray = JSON.parse(votesArrayInLocalStorage); 
    } 
    else { // if no votesArray, go make an empty array for votesArray 
        votesArray = []; 
    }
    //now that we have a votesArray product, lets have a product that is the same kind
    let votesArrayItem = findById(votesArray, productRadioOne.value); 

    // if findByID finds nothing of this type in the votesarray container
    if (!votesArrayItem) { // votesarray item is the radio button id, timesseen and timesviewed
        const newItem = { 
            id: productRadioOne.value, 
            timesSeen: 3, 
            timesPicked: 1
        }; 

        votesArray.push(newItem); //push item into cart
    } else {
        votesArrayItem.timesPicked++; 
        votesArrayItem.timesPicked++;// if there is an item in votes array container, add another to the quantity 
    }

    // stringify our votes array container
    const stringVotesArray = JSON.stringify(votesArray); 
    // put string in local storage
    localStorage.setItem('VOTESARRAY', stringVotesArray); 

    getThreeProducts();
}); 

getThreeProducts();
