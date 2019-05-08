module.exports = function move(input) {
  const Validation = require("../components/validation");
  const validation = new Validation(this._x, this._y);
  const isValid = validation.movement(input);

  //Validate the input
  if (input) {
    if (isValid) {
      const { up, down, left, right } = require("./movement");
      //clone object
      let robot = {};
      Object.assign(robot, this.robot);
      input = input.toUpperCase();
      switch (input) {
        case "NORTH":
        case "UP":
          robot = up(robot);
          //If robot hit the wall, it will auto ignore the movement
          if (validation.preventFall(robot)) {
            this.robot = robot;
          }
          break;
        case "SOUTH":
        case "DOWN":
          robot = down(robot);
          if (validation.preventFall(robot)) {
            this.robot = robot;
          }
          break;
        case "WEST":
        case "LEFT":
          robot = left(robot);
          console.log(robot);

          if (validation.preventFall(robot)) {
            this.robot = robot;
          }
          break;
        case "EAST":
        case "RIGHT":
          robot = right(robot);
          if (validation.preventFall(robot)) {
            this.robot = robot;
          }
          break;
        default:
          break;
      }
      return this;
    }
  } else {
    const { autoMove } = require("./movement");
    let robot = {};
    Object.assign(robot, this.robot);
    robot = autoMove(robot);
    if (validation.preventFall(robot)) {
      this.robot = robot;
    }
    return this;
  }
};
