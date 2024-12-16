// Interfaces

// Interfaces in TypeScript are used to define the structure of an object, ensuring consistency in implementation.

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

// The 'instagram' class implements the 'takePhoto' interface, ensuring it has the properties defined in the interface.
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// The 'youtube' class implements both 'takePhoto' and 'Story' interfaces.
// This enforces the class to have the properties and methods of both interfaces.
// thats why interfaces are important because they dont allow to do certain thing untill the things defined under him not follows properly this gives the concenteny to our code.
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  // Implementation of the 'createStory' method required by the 'Story' interface
  createStory(): void {
    console.log("Story was created");
  }
}

// Interfaces ensure that classes implementing them adhere to a certain structure, providing consistency in the codebase.
// If a class implements an interface, it must provide implementations for all properties and methods defined in that interface.

export {};
