// Interfaces

// Interfaces in TypeScript provide a way to define the shape of objects, including properties, methods, and optional features.
// They offer flexibility for extending existing interfaces and supporting inheritance for structuring complex data models.

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// We can add missing properties or methods to an existing interface without causing errors. This is a key difference between interfaces and type aliases.
// Here, we're adding a new property to the User interface.
interface User {
  githubToken: string;
}

// Another difference between type aliases and interfaces is that interfaces support inheritance, in type aliases we use "&" to add two type aliases.
// Interface representing an Admin, extending the User interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const bilal: Admin = {
  dbId: 22,
  email: "b@b.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "bilal10", off: 10) => {
    return off;
  },
};

export {};
