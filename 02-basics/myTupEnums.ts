// union
// the user array declaration says it will contain strings or numbers
const user: (string | number)[] = [1, "hc"];

// tuple
// user2 is a tuple, and it will contain a string, number, and a boolean
// user2 will have only three items, in the exact order as specified
let user2: [string, number, boolean];

user2 = ["hc", 131, true];

// you can change values in a tuple, even when it's declared as a const
type User = [number, string];
const newUser: User = [112, "a@a.com"];

// the change
newUser[0] = 113;
newUser[1] = "b@b.com";

// we can also push items into the array
// as long as we respect the declared types
newUser.push(2);

export {};
