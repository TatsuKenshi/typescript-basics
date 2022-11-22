"use strict";
exports.__esModule = true;
function addTwo(num) {
    // we've declared the type for the argument - number
    // that doesn't stop us from returning whatever type
    // so, we declare (arg: type): type
    // to make sure we can only return proper type
    // in this case, it is number
    return num + 2;
    //   return "hello";
}
var myValue = addTwo(5);
function getUpper(value) {
    // we can apply methods corresponding to the type of the argument
    return value.toUpperCase();
}
getUpper("miki");
function signUp(name, orderCount, isPaid) {
    // we can give every argument a type
}
signUp("miki", 5, true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // we cal also define the default value for an argument
    // in this case it is false
    // isPaid: boolean = false
};
loginUser("m", "m@m.com");
function getValue(myVal) {
    // the boolean | string type says that return can be either a boolean or a string
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    // arrow function example
    // functions whose declared type is neither "void" nor "any" must return a value
    // simple --- return "" --- will do
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
var heroes2 = [1, 2, 3];
var heroes3 = [
    "batman",
    3,
    true,
    undefined,
    null,
    { name: "miki" },
    [1, "no", false],
];
// you don't need to declare types when writing arrays
// TS knows they can contain anything and everything
heroes.map(function (hero) {
    // if you hover over the hero param, it will show types for all heroes the map is iterating over.
    // if you define the type of the hero param, the return will have to match the type, or you can define the type for it with (propName: type) : returntype =>{}
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    // if you know the function will never return anything
    // return type should be void - (param: type): void
    // if you return from such a function, you'll get an error
    console.log(errmsg);
}
function handleError(errmsg) {
    // never means that the function will never return a value
    // logging gives an error when return type is never
    // console.log(errmsg);
    // however, throwing an error is ok
    // forceful termination of the program is also ok
    // also, never appears when TS determines there's nothing left in a union
    throw new Error(errmsg);
}
