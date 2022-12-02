"use strict";
const score = [];
const names = [];
// function with union types - not very good approach
function identityOne(val) {
    return val;
}
// function with any type - plain bad approach
function identityTwo(val) {
    return val;
}
// function with <Type> type declaration - good approach to generics
// unlike any, <Type> locks down the type once it receives the type
function identityThree(val) {
    return val;
}
identityThree(true);
// same as identityThree, but with a slightly shorter syntax
function identityFour(val) {
    return val;
}
identityFour({ brand: "coca-cola", type: 2 });
// the next function takes in an array of <T> types and returns a value of the T type
function getSearchProducts(products) {
    // database operations
    const myIndex = 3;
    return products[myIndex];
}
// let's turn getSearchProducts into an arrow function
const getSearchProducts2 = (products) => {
    // the comma in <T,> denotes that this is not JSX, rather TS
    // database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunc(3, {
    connection: "string",
    userName: "string",
    password: "string",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
