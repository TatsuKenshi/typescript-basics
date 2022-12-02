interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): string;
}

// if a class is implementing an interface, it has to have all the properties of the interface, with right types.

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// if a class is implementing more than one interface, it has to have every property and method of every interface it is using

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): string {
    console.log("story created");
    return "story created";
  }
}
