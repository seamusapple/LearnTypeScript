interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  startTrail2(): string;
  getCoupon(couponname: string, value: number): number;
}
type UserType = {
  email: string;
  userId: number;
};

const dp: User = {
  dbId: 22,
  email: "d.p@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail start";
  },
  startTrail2: function (): string {
    return "trail start 2";
  },
  getCoupon: (name, value: 10) => {
    if (name === "trail") {
      return 10;
    }
    return 11;
  },
  githubToken: "asd",
};
dp.email = "dong.p@gmail.com";
// do.dbId = 1;
interface User {
  githubToken: string;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
const wd: Admin = {
  githubToken: "ass",
  role: "admin",
  dbId: 0,
  email: "",
  userId: 0,
  startTrail: function (): string {
    throw new Error("Function not implemented.");
  },
  startTrail2: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoupon: function (couponname: string, value: number): number {
    throw new Error("Function not implemented.");
  },
};
