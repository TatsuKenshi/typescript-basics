const score: Array<number> = [];
const names: Array<string> = [];

// function with union types - not very good approach
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// function with any type - plain bad approach
function identityTwo(val: any): any {
  return val;
}

// function with <Type> type declaration - good approach to generics
// unlike any, <Type> locks down the type once it receives the type
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

// same as identityThree, but with a slightly shorter syntax
function identityFour<T>(val: T): T {
  return val;
}

// We can even pass a custom interface as the generic to a function
interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "coca-cola", type: 2 });

// the next function takes in an array of <T> types and returns a value of the T type
function getSearchProducts<T>(products: T[]): T {
  // database operations
  const myIndex = 3;
  return products[myIndex];
}

// let's turn getSearchProducts into an arrow function

const getSearchProducts2 = <T>(products: T[]): T => {
  // the comma in <T,> denotes that this is not JSX, rather TS
  // database operations
  const myIndex = 4;
  return products[myIndex];
};

//
// // //
// Generic Classes
// // //
//

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunc(3, {
  connection: "string",
  userName: "string",
  password: "string",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
