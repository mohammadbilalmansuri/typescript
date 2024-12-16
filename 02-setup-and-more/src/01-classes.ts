// Classes

// Classes in TypeScript allow you to define blueprints for creating objects with properties and methods.

class NewUser {
  private email: string; // Accessible only within the class
  public name: string; // Accessible anywhere
  readonly city: string = "Chhindwara"; // Readonly property initialized in the class body

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city;
  }
}

// Creating an instance of the 'User' class
const bilal = new NewUser("b@bm.com", "bilal");
// bilal.city; // Accessing the readonly property 'city'

// Alternative syntax to achieve the same functionality in TypeScript
class User {
  // Readonly property initialized in the class body
  readonly city: string = "Chhindwara";
  protected _courseCount = 1; // Accessible within the class and inheriting classes

  // Constructor with access modifiers for parameters
  constructor(
    private email: string,
    public name: string // , private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // important interview question
  // in setters there is no return type, we can not set any return type in setter. ts does not allow us to do this.
  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }

  // Private method accessible only within the class
  private deleteTokens() {
    return "Token deleted";
  }
}

// Class 'subUser' extending 'User'
class SubUser extends User {
  isFamily: boolean = true; // Additional property specific to 'SubUser'

  // Method to modify '_courseCount'
  changeCourseCount() {
    this._courseCount = 4; // Accessing protected property '_courseCount' in inherited class
  }
}

export {};
