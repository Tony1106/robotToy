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
    for (let i = 0; i <= this._x; i++) {
      length.push("O");
    }
    for (let j = 0; j <= this._y; j++) {
      this.table.push(length);
    }
    return this;
  }
}

Table.prototype.place = require("./components/place");
Table.prototype.move = require("./components/move");
Table.prototype.report = require("./components/report");
Table.prototype.print = require("./components/print");

module.exports = Table;
