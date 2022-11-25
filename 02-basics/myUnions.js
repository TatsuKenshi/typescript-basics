"use strict";
// union is a combination of two, three, or more types. We use usnions when we expect (or want to allow) more than one type of data.
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
// here, we'll define miki as either a user or admin
// we can assign any of the existing keys with any of the existing types (keys and types which exist on one of those two types)
var miki = {
    name: "miki",
    id: 335
};
// we can also reassign keys and values to miki, as long as they exist on either User or Admin types.
miki = { username: "m1k1", id: 335 };
function getDbId(id) {
    // if we try to perform either a string or number method on the id, TS will signal an error
    // id.toLowerString() or
    // id.toString()
    // are not allowed, even though we have number | string union
    // instead, we have to explicitly check for the type of the reeived id before transforming it in any way
    if (typeof id === "number") {
        id.toString();
    }
    if (typeof id === "string") {
        id.toLowerCase();
    }
    // the console log is OK, regardless of the type
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
//
// // //
// Arrays and Unions
// // //
//
var data = [1, 2, 3]; // good type declaration
var data2 = ["1", "2", "3"]; // good type declaration
// mistakes when declaring unions in arrays
// const data3: string | number[] = ["1", "2", "3", 4, 5, 6];
// const data4: string[] | number[] = ["1", "2", "3", 4, 5, 6];
// data4 means either we'll have all numbers or all strings
var data5 = ["1", "2", "3", 4, 5, 6];
//
// // //
// assigning an unchangeable value in TS
// // //
//
var seatAllotment;
// this means that we can only ever assign one of the three values to the seatAllotment variable.
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
