
// create a class for my product array 
export class ProductsArray { 
    // constructor will initialize the object within a class 
    constructor(products) { 
        this.products = products.slice(); 
        // return the copy of the array 
    }
    // to get the products 
    getProducts() { 
        return this.products; 
    }
    // to get the product images
    getProductImage() { 
        return this.image;
    }
}