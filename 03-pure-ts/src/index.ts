class User {
  email: string;
  name: string;

  // since city is not in constructor, it needs initial value
  city: string = "";

  // private properties are not accessible outside the class
  // you can either use the private keyword or a hashtag (#)
  private street: string;
  // also, all properties not marked as private are public

  constructor(email: string, name: string, street: string) {
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
  readonly email: string = "a@a.com";
  constructor(public name: string, private street: string) {}
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
  private _courseCount = 1;
  protected _subscriptionTier: string = "basic";

  readonly city: string = "London";
  constructor(
    public name: string,
    public email: string,
    private street: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber) {
    // setters can't have anything as return type
    if (courseNumber <= 1) {
      throw new Error("course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }

  private deleteToken() {
    console.log("token deleted");
  }
}

const miki3 = new User3("miki", "a@a.com", "Husova 12");
console.log(miki3);

// TS doesn't allow acccess to the deleteToken private method outside it's native class
// console.log(miki3.deleteToken);

class SubUser extends User3 {
  isFamily: boolean = true;

  // child class can't access private properties of its parent class
  // that's why SubUser can't access/modify _courseCount
  // however, SubUser can access and modify SubscriptionTier
  // because it is a protected property
  // accessible only within class and children classes

  // changeCourseCount(){
  //   this._courseCount = 4;
  // }

  changeSubscriptionTier() {
    this._subscriptionTier = "Pro";
  }
}
