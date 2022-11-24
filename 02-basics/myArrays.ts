const superHeroes = [];
// array declared like this has a type of never
// this means we can't push any values into it the standard way

// superheroes.push("spiderman")
// Argument of type string is not assignable to parameter of type never

const superHeroes2: [] = [];
// the above declaration means we're creating an empty array which will always remain empty
// It won't accept any strings or numbers or booleans, or anything else

const superHeroes3: string[] = [];
// the above string will only accept string values

const superHeroes4: Array<number> = [];
// an alternative way of declaring an array of numbers

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
// the above array accepts only variables of the User type
allUsers.push(
  { name: "miki", isActive: false },
  { name: "john", isActive: true }
);

const superArray: number[][] = [];
// the above declaration means that we are creating an empty array which will consist of arrays of number values
// good for situations where you need an array of rgb values [[255, 255, 255], [0, 0, 0], [13, 99, 45]]

export {};
