"use strict";
// enums are a great option when we want to restrict the number of options, regarding the values which can be assigned to a variable which uses the chosen type.
exports.__esModule = true;
// type SeatChoice has following options:
var SeatChoice;
(function (SeatChoice) {
    // in this case, AISLE is the default and has index 0
    // if we assign a different value to AISLE, all subsequent indexes will increment from that number
    // AISLE = 10 means MIDDLE will be 11, WINDOW 12, etc
    // if we assign a string value to AISLE, for example, AISLE = "aisle"
    // all subsequent options have to have values
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    // we can change MIDDLE from MIDDLE = 11 to, for example, MIDDLE = 22
    // WINDOW, in that case, will be WINDOW = 23
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    // added subsequently, because enums can be expanded
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
var hcSeat2 = "aisle" /* SeatChoice2.AISLE */;
