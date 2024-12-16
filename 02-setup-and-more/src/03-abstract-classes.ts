// Abstract Classes

// Abstract classes serve as a base class for other classes and cannot be instantiated directly.

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // Abstract method 'getSepia' to be implemented by subclasses
  abstract getSepia(): void;

  // Regular method 'getReelTime' with a default implementation
  getReelTime(): number {
    // Perform some calculations
    return 1;
  }
  // so the diffrence here in b/w abstact and regular method is we can not implement abstact methods here we just declared them what they are returning or not and in regular methods we can declare and implement them here and also can override them in inherit classes.
}

// Class 'Instagram' extending 'TakePhoto'
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // Call to the superclass constructor
  }

  // Implementation of the abstract method 'getSepia'
  getSepia(): void {
    console.log("This is an abstract method implementation for Instagram");
  }
}

// we can not directly create objects from an abstract class, but can extend them to any classes and then can create object from that inherit class which extend the abstract class.
const bm = new Instagram("test", "Test", 5);

// Abstract classes serve as templates for other classes and cannot be directly instantiated.
// They provide a common structure and set of features for subclasses to inherit and implement.
// Abstract methods define a contract that subclasses must adhere to, ensuring a consistent interface across all subclasses.

// The summary is, We can make classes abtract which can not create there own objects, but they help to define class who are inheriting them to get a better structure of there classes and some compulsary thing that we want to put, if we want to put some method that are compulsary need to there we can make those methods abstact as well but in case we want some feature by default by giving them a method we can go and do that also by creating a regular method.

// Summary:
// Abstract classes are used to define a common structure and behavior for subclasses.
// They enforce the implementation of abstract methods in subclasses, ensuring consistency.
// Regular methods in abstract classes provide default behavior that can be shared or customized by subclasses.

export {};
