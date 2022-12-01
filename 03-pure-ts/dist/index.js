"use strict";
class User {
    // also, all properties not marked as private are public
    constructor(email, name, street) {
        // since city is not in constructor, it needs initial value
        this.city = "";
        this.email = email;
        this.name = name;
        this.street = street;
    }
}
const miki = new User("a@a.com", "miki", "Husova 12");
miki.city = "London";
console.log(miki);
// we can't log miki.street because street is private
// console.log(miki.street);
//
// // //
// Classes shorter syntax
// // //
//
class User2 {
    constructor(name, street) {
        this.name = name;
        this.street = street;
        this.email = "a@a.com";
    }
}
const miki2 = new User2("miki", "Husova 12");
console.log(miki2);
//
// // //
// Getters and Setters
// // //
//
// getters and setters are mainly there to give limited access to private properties outside the class.
class User3 {
    constructor(name, email, street) {
        this.name = name;
        this.email = email;
        this.street = street;
        this._courseCount = 1;
        this.city = "London";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        // setters can't have anything as return type
        if (courseNumber <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("token deleted");
    }
}
const miki3 = new User3("miki", "a@a.com", "Husova 12");
console.log(miki3);
// TS doesn't allow acccess to the deleteToken private method outside it's native class
// console.log(miki3.deleteToken);
