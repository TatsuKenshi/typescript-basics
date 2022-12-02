abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  // abstract methods
  // we're telling TS we don't know how this method will be implemented
  // but, since it exists in the parent class, it has to be extended to the extender class
  abstract getSepia(): void;

  // standard (non-abstract) methods are automatically available on objects created from children classes
  getReelsTime(): number {
    // calculations
    return 1;
  }
}

// abstract classes don't let us create objects from them
// the object on the next line will throw an error
// const mikiTakesPhoto = new TakePhoto("portrait", "sepia");

class Twitter extends TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("get sepia");
  }
}

// however, we can create objects from classes which extend abstract classes
const mikiTakesPhoto = new Twitter("landscape", "clarendon");
mikiTakesPhoto.getReelsTime();
