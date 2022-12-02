"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // standard (non-abstract) methods are automatically available on objects created from children classes
    getReelsTime() {
        // calculations
        return 1;
    }
}
// abstract classes don't let us create objects from them
// the object on the next line will throw an error
// const mikiTakesPhoto = new TakePhoto("portrait", "sepia");
class Twitter extends TakePhoto2 {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("get sepia");
    }
}
// however, we can create objects from classes which extend abstract classes
const mikiTakesPhoto = new Twitter("landscape", "clarendon");
mikiTakesPhoto.getReelsTime();
