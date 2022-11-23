let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let dong: User | Admin = {
  name: "dong",
  id: 345,
};

dong = {
  username: "ramsey",
  id: 345,
};

// function getDbId(id: number | string) {
//   // make some api calls
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  // make some api calls
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id * 2;
  }
}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: number[] | string[] = [1, 2, 3];
const data4: (number | string)[] = ["1", 2, 3];

let pie: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window";
// seatAllotment = "w";

export {};
