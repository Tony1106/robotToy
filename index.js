//X, Y count from 0 on the table

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
    if (this._x > 0 && this._y > 0) {
      for (let i = 0; i <= this._x; i++) {
        length.push("O");
      }
      for (let j = 0; j <= this._y; j++) {
        this.table.push(length);
      }
    } else {
      console.log("Wrong size of the table");
    }

    return this;
  }
}
//Register the function of the robot below:
Table.prototype.place = require("./components/place");
Table.prototype.move = require("./components/move");
Table.prototype.report = require("./components/report");
Table.prototype.print = require("./components/print");

module.exports = Table;
