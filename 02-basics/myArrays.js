"use strict";
exports.__esModule = true;
var superHeroes = [];
// array declared like this has a type of never
// this means we can't push any values into it the standard way
// superheroes.push("spiderman")
// Argument of type string is not assignable to parameter of type never
var superHeroes2 = [];
// the above declaration means we're creating an empty array which will always remain empty
// It won't accept any strings or numbers or booleans, or anything else
var superHeroes3 = [];
// the above string will only accept string values
var superHeroes4 = [];
var allUsers = [];
// the above array accepts only variables of the User type
allUsers.push({ name: "miki", isActive: false }, { name: "john", isActive: true });
var superArray = [];
