module.exports = class Validation {
  constructor(tableX, tableY) {
    this._tableX = tableX;
    this._tableY = tableY;
  }
  validate(x, y, f) {
    const direction = require("../variable");
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
      f !== direction.North.key &&
      f !== direction.South.key &&
      f !== direction.West.key &&
      f !== direction.East.key
    ) {
      console.log(
        "Please input the right direction of the Robot. MUST be NORTH SOUTH WEST or EAST"
      );
      return false;
    } else return true;
  }
  isOnTheTable(robot) {
    let x = robot.x;
    let y = robot.y;
    let f = robot.f;
    console.log("Robot hit the wall");
    if (x <= this._tableX && x >= 0 && y <= this._tableY && y >= 0) {
      return true;
    } else return false;
  }
  movement(input) {
    let direction = [
      "NORTH",
      "SOUTH",
      "WEST",
      "EAST",
      "UP",
      "DOWN",
      "LEFT",
      "RIGHT"
    ];

    if (typeof input == "string") {
      input = input.toUpperCase();
      if (!direction.includes(input)) {
        console.log(
          "Please input the string of the direction: NORTH, SOUTH, WEST,EAST or let it empty"
        );
        return false;
      } else return true;
    } else {
      return false;
    }
  }
};
