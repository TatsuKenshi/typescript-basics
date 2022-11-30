// interface is similar to a class. It is like a loose, superficial form of class.

interface User {
  // interfaces can contain readonly properties
  readonly dbid: number;

  // regular properties
  email: string;
  userId: number;

  // optional properties
  googleId?: string;

  // functions
  // // method 1 with defined return
  startTrial: () => string;

  // // method 2 with defined return
  newsLetter(): boolean;

  // // function with defined params and return
  getCoupon(couponName: string, value: number): number;
}

const miki: User = {
  dbid: 12,
  email: "a@a.com",
  userId: 1234,
  startTrial: () => "trial started",
  newsLetter: () => true,
  getCoupon: (name: "christmas10", value: 10) => {
    return 10;
  },

  // we've extended the interface down below
  // but, we also have to update this object, regardless
  githubToken: "223sasd12e1sxa312223wcw342r2",
};

// we can't change miki's dbid. The following line will give an error.
// miki.dbid = 13;

//
// // //
// Inteface Expansion
// // //
//

// we can also expand/reopen an interface down the road.
// let's see how the User interface behaves in such a case

interface User {
  githubToken: string;
}

//
// // //
// Inteface Extension
// // //
//

// similar to a class, an interface can extend another interface.
// let's expand User into Admin
// Admins will have all the properties and methods associated with the User interface, plus their own ones.
interface Admin extends User {
  role: "admin" | "ta" | "student";
}

const stankela: Admin = {
  role: "admin",
  dbid: 11,
  email: "b@b.com",
  userId: 2234,
  startTrial: () => "trial started",
  newsLetter: () => true,
  getCoupon: (name: "christmas10", value: 10) => {
    return 10;
  },
  githubToken: "323sasd12e1sxa312223wcw342r2",
};

//
// // //
// Inteface vs Type
// // //
//

// both can be extended
// interface is extended via the extends keyword
// type is extended with an empersand
// type 1 {name:string}; type 2 = type1 & {age:number};

//interface can be expanded by reopening
// type can't be expanded once declared.

export {};
