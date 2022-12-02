"use strict";
// if a class is implementing an interface, it has to have all the properties of the interface, with right types.
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// if a class is implementing more than one interface, it has to have every property and method of every interface it is using
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story created");
        return "story created";
    }
}
