"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var dong = {
    name: "dong",
    id: 345
};
dong = {
    username: "ramsey",
    id: 345
};
// function getDbId(id: number | string) {
//   // make some api calls
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // make some api calls
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id * 2;
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3];
var data4 = ["1", 2, 3];
var pie = 3.14;
var seatAllotment;
seatAllotment = "window";
