const user = {
  name: "miki",
  email: "a@a.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {
  // this tells TS that we're expecting an object with name/string and isPaid/boolean keys
}

// we have to invoke the function with an object with name/string and isPaid/boolean keys
createUser({ name: "miki", isPaid: false });

// TS won't allow invoking the function with a third argument. To avoid errors, we can define an object variable with all the keys we want
const newUser = { name: "mike", isPaid: true, email: "a@a.com" };
createUser(newUser);

function createCourse(): {} {
  // here, we're telling TS we'll return an object (any object)
  return {};
}

function createCourse2(): { course: string; price: number } {
  // here, we're specifying we'll return an object with course/string and price/number keys
  return { course: "reactjs", price: 99.99 };
  // return can't contain anything other than what was specified
}

// we invoke the function with 0 arguments
createCourse2();

// // // // // // //
//                //
//                //
//  Type Aliases  //
//                //
//                //
// // // // // // //

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createMyUser(user: User): User {
  // (user: User) tells TS that this function is expecting an object with the specified keys which have the specified types

  // ;User tells TS this function will only return an object in the specified User object format
  return { name: "John", email: "a@a.com", isActive: false };
}

createMyUser({ name: "John", email: "a@a.com", isActive: false });

// // // // // // // // // //
//                         //
//                         //
//   read-only & optional  //
//                         //
//                         //
// // // // // // // // // //

type User2 = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};
// readonly means no one can tamper with the type
// the value, once assigned to a key, can't be changed

// the key?: type syntax means that the key is optional
// an instance may or may not contain it

let myNewUser: User2 = {
  _id: 123,
  name: "Mike",
  email: "a@a.com",
  isActive: false,
  // doesn't contain the credCardDetails key
};

myNewUser.email = "b@b.com";
// myNewUser._id = 456;

// // // //
//
// mix & match
//
// // // //

// TS allows us to compose new types out of existing ones

type userCardNumber = {
  cardnumber: string;
};

type userCardDate = {
  carddate: string;
};

type userCardDetails = userCardNumber &
  userCardDate & {
    // we can also add new types onto a composed one, like this object for example.
    cvv: number;
  };

export {};
