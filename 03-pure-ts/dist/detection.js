"use strict";
// it is important to check for prop types if there are multiple options available
function detectType(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
// an example of what not to do from the official TS docs.
// arrays,  null, and objects are all considered objects by JS
// 0, NaN, "", 0n (the bigint version of zero), null, undefined are falsy values in JS.
// they're not false, but JS coerces their conditions to booleans to make sense of them, and then chooses the branches depending on whether the result is true or false
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// TS won't complain because null is an object, even though it is a falsy value.
// printAll function will iterate over it and log as many properties as there are on the null object. There are none, so no logs will appear in the console
printAll(null);
// again, there will be nothing in the console, as we've initialized the printAll function with an empty string. The data we've sent passed the string type check, but console log logs an empty string (nothing).
printAll("");
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
//
// // //
// instanceof
// // //
//
// instanceof in JS is used to check whether a value is an instance of another value, whether its prototype chain contains the value we're checking against. Mostly used with classes (if an object is an instace of the xyz class).
// It can also be used to check for all values that can be constructed with the keyword new - Date, Array, Object, etc.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue("miki");
const time = new Date();
logValue(time);
// function isFish can receive either a fish or a bird as the pet param
// in the return type we're saying pet is fish
// the return clause returns the pet parameter as Fish if pet.swim is not undefined
// if it is undefined, then it sets the pet parameter to the type of Bird
function isFish(pet) {
    return pet.swim !== undefined;
}
// getFood accepts the pet param, which can be either a Fish or a Bird
// if (isFish(pet) is true (Fish), we return "fish food"
// if (isFish(pet) is false (Bird), we return "bird food"
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
//
// // //
// never type
// // //
//
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
