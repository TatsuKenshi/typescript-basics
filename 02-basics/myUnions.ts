// union is a combination of two, three, or more types. We use usnions when we expect (or want to allow) more than one type of data.

let score: number | string = 33;

score = 44;
score = "55";
// score = false;
// we can assign a number or a string to score.
// however, it rejects booleans

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// here, we'll define miki as either a user or admin
// we can assign any of the existing keys with any of the existing types (keys and types which exist on one of those two types)
let miki: User | Admin = {
  name: "miki",
  id: 335,
};

// we can also reassign keys and values to miki, as long as they exist on either User or Admin types.
miki = { username: "m1k1", id: 335 };

function getDbId(id: number | string) {
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
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

//
// // //
// Arrays and Unions
// // //
//

const data: number[] = [1, 2, 3]; // good type declaration
const data2: string[] = ["1", "2", "3"]; // good type declaration

// mistakes when declaring unions in arrays
// const data3: string | number[] = ["1", "2", "3", 4, 5, 6];
// const data4: string[] | number[] = ["1", "2", "3", 4, 5, 6];
// data4 means either we'll have all numbers or all strings

const data5: (string | number)[] = ["1", "2", "3", 4, 5, 6];

//
// // //
// assigning an unchangeable value in TS
// // //
//

let seatAllotment: "aisle" | "middle" | "window";
// this means that we can only ever assign one of the three values to the seatAllotment variable.
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
// seatAllotment = "economy" would give an error

export {};
