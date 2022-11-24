"use strict";
exports.__esModule = true;
var user = {
    name: "miki",
    email: "a@a.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    // this tells TS that we're expecting an object with name/string and isPaid/boolean keys
}
// we have to invoke the function with an object with name/string and isPaid/boolean keys
createUser({ name: "miki", isPaid: false });
// TS won't allow invoking the function with a third argument. To avoid errors, we can define an object variable with all the keys we want
var newUser = { name: "mike", isPaid: true, email: "a@a.com" };
createUser(newUser);
function createCourse() {
    // here, we're telling TS we'll return an object (any object)
    return {};
}
function createCourse2() {
    // here, we're specifying we'll return an object with course/string and price/number keys
    return { course: "reactjs", price: 99.99 };
    // return can't contain anything other than what was specified
}
// we invoke the function with 0 arguments
createCourse2();
function createMyUser(user) {
    // (user: User) tells TS that this function is expecting an object with the specified keys which have the specified types
    // ;User tells TS this function will only return an object in the specified User object format
    return { name: "John", email: "a@a.com", isActive: false };
}
createMyUser({ name: "John", email: "a@a.com", isActive: false });
// readonly means no one can tamper with the type
// the value, once assigned to a key, can't be changed
// the key?: type syntax means that the key is optional
// an instance may or may not contain it
var myNewUser = {
    _id: 123,
    name: "Mike",
    email: "a@a.com",
    isActive: false
};
myNewUser.email = "b@b.com";
