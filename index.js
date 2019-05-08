//X, Y start from 0 to 4 on the table
let table = [
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"]
];

class Table {
  constructor(x, y) {
    this._x = x - 1;
    this._y = y - 1;
    this.robot = {
      x: 0,
      y: 0,
      f: "NORTH"
    };
    this.table = [];
    this.isValidData = true;
  }
  create() {
    let length = [];
    this.robot = [0, 0, "NORTH"];
    for (let i = 0; i <= this._x; i++) {
      length.push("O");
    }
    for (let j = 0; j <= this._y; j++) {
      this.table.push(length);
    }
    return this;
  }
}

Table.prototype.validation = require("./components/validation");
Table.prototype.place = require("./components/place");
Table.prototype.move = require("./components/move");
Table.prototype.report = require("./components/report");

let newTable = new Table(5, 5);
newTable
  .create()
  .place(2, 3, "NORTH")
  .move("helloe")
  .report();

// //Display the table on console
// console.log(" ");
// console.log(" ");
// console.log(["WEST<--", "North", "-->EAST"]);
// console.log(" ");
// console.log(" ");
// table.map(item => console.log(item));
// console.log(" ");
// console.log(" ");
// console.log(["WEST<--", "South", "-->EAST"]);
// console.log(" ");
// console.log(" ");
// let [x, y, f] = [2, 3, 4];
// console.log(x, y, f);
