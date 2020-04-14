// // import functions and data 
// import rawProducts from './data/products.js'; 

// //establish remaining products from rawProducts 
// const allRemainingProducts = rawProducts.slice(); //to make a copy of allRemaingProducts but not mutate the state (live different palces in memory)
// const unchosenProducts = []; //make a new array



// when user clicks image they prefer 
    // remove that product from allRemainingProducts list 

// if there are products left, do this: 
// show two random products 
    // one product must be the tree chosen by user from allRemainingProducts
    // the other products must be a different products from rawProducts
        // if user selects this, remove the product from allRemaining products
        //we also want to keep track of what images they did not choose and add products to 'not chosen' array

// if no products left (or 25 limit)

    // send them to the results page in separate html using localStorage