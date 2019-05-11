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
}
//Register the function of the robot below:

Table.prototype.create = require("./components/create");
Table.prototype.place = require("./components/place");
Table.prototype.move = require("./components/move");
Table.prototype.report = require("./components/report");
Table.prototype.print = require("./components/print");

module.exports = Table;
