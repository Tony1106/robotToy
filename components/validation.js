module.exports = class Validation {
  constructor(tableX, tableY) {
    this._tableX = tableX;
    this._tableY = tableY;
  }
  validate(x, y, f) {
    const { direction } = require("../variable");
    if (x < 0 || x > this._tableX) {
      console.log(
        "Your Robot place X in is not valid. Must be between " +
          0 +
          " and " +
          this._tableX
      );
      return false;
    } else if (y < 0 || y > this._tableY) {
      console.log(
        "Your Robot place Y in is not valid. Must be between " +
          0 +
          " and " +
          this._tableY
      );
      return false;
    } else if (
      f !== direction[0].key &&
      f !== direction[1].key &&
      f !== direction[2].key &&
      f !== direction[3].key
    ) {
      console.log(
        "Please input the right direction of the Robot. MUST be NORTH SOUTH WEST or EAST"
      );
      return false;
    } else return true;
  }
  preventFall(robot) {
    let x = robot[0];
    let y = robot[1];
    console.log(this._tableX, x);

    if (x > this._tableX || x < 0) {
      return false;
    } else if (y > this._tableY || y < 0) {
      return false;
    } else return true;
  }
};
