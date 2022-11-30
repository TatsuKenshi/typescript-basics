"use strict";
// interface is similar to a class. It is like a loose, superficial form of class.
exports.__esModule = true;
var miki = {
    dbid: 12,
    email: "a@a.com",
    userId: 1234,
    startTrial: function () { return "trial started"; },
    newsLetter: function () { return true; },
    getCoupon: function (name, value) {
        return 10;
    },
    // we've extended the interface down below
    // but, we also have to update this object, regardless
    githubToken: "223sasd12e1sxa312223wcw342r2"
};
var stankela = {
    role: "admin",
    dbid: 11,
    email: "b@b.com",
    userId: 2234,
    startTrial: function () { return "trial started"; },
    newsLetter: function () { return true; },
    getCoupon: function (name, value) {
        return 10;
    },
    githubToken: "323sasd12e1sxa312223wcw342r2"
};
