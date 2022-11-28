"use strict";
exports.__esModule = true;
// union
// the user array declaration says it will contain strings or numbers
var user = [1, "hc"];
// tuple
// user2 is a tuple, and it will contain a string, number, and a boolean
// user2 will have only three items, in the exact order as specified
var user2;
user2 = ["hc", 131, true];
var newUser = [112, "a@a.com"];
// the change
newUser[0] = 113;
newUser[1] = "b@b.com";
// we can also push items into the array
// as long as we respect the declared types
newUser.push(2);
