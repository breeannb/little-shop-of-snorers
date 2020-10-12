// Step 2: The thing you want to build today will select three random photos from the available product images and display them side-by-side-by-side in the browser window.

// // import functions and data 
import rawProducts from './data/products.js'; 
import findById from './common/find-by-id.js';
// import { incremementTimesSeen, incremementTimesPicked } from './increments.js';

// establish products and corresponding images from html static design or the DOM
const imageOne = document.getElementById('image-one'); 
const imageTwo = document.getElementById('image-two'); 
const imageThree = document.getElementById('image-three');

const productRadioOne = document.getElementById('product-one'); 
const productRadioTwo = document.getElementById('product-two');
const productRadioThree = document.getElementById('product-three');

// const productOne = getRandomProduct(rawProducts);
// const productTwo = getRandomProduct(rawProducts);
// const productThree = getRandomProduct(rawProducts);

// let choicesArray = []; 
// let clickCounter = 0; 


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

    // incremementTimesSeen(choicesArray, userChoice);
    // incremementTimesPicked(choicesArray, userChoice);

    // updateChoicesArray();

    // clickCounter++; 

    // if (clickCounter >= 25) { 
    //     window.location = '../results-page/index.html'; 
    // } else {
    //     getRandomSurveyProducts(); 
    // }

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
    // incremementTimesPicked(); 
    // incremementTimesSeen();
}); 

getThreeProducts();

// function updateChoicesArray() { 
//     localStorage.setItem('CHOICES', JSON.stringify(choicesArray)); 
// }

// function getRandomSurveyProducts() { 
//     productRadioOne.checked = false; 
//     productRadioTwo.checked = false; 
//     productRadioThree.checked = false; 

//     const randomArray = getRandomProduct(rawProducts); 

//     productOne.textContent = randomArray[0].name; 
//     imageOne.src = randomArray[0].image;
//     productRadioOne.value = randomArray[0].id; 

//     productTwo.textContent = randomArray[0].name; 
//     imageTwo.src = randomArray[0].image;
//     productRadioTwo.value = randomArray[0].id; 

//     productThree.textContent = randomArray[0].name; 
//     imageThree.src = randomArray[0].image;
//     productRadioThree.value = randomArray[0].id; 

//     incremementTimesSeen(choicesArray, randomArray[0].id);
//     incremementTimesSeen(choicesArray, randomArray[1].id);
//     incremementTimesSeen(choicesArray, randomArray[2].id);
// }