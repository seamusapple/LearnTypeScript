// const User = {
//   name: "dong",
//   email: "dong@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "dong", isPaid: false, email: "dong@gmail.com" };

// createUser(newUser);

// createUser({ name: "dong", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: false };
// }

// createUser({ name: "", email: "", isActive: false });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "dong",
  email: "dong@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetail = cardNumber & cardDate & { cvv: number };

myUser.email = "dong.pan@essexlg.com";
// myUser._id = "1234";

export {};
