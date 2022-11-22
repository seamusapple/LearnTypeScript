// const user: (string | number)[] = [1, "dp"];

let tUser: [string, number, boolean];

tUser = ["dp", 123, true];

let rgb: [number, number, number] = [255, 221, 121];
let rgba: [number, number, number, number] = [255, 221, 121, 0.3];

type User = [number, string];

const newUser: User = [112, "dp"];
newUser[1] = "dong";
newUser.push(true);
