module.exports = function move(input) {
  const Validation = require("../components/validation");
  const validation = new Validation(this._x, this._y);
  const isValid = validation.movement(input);
  const direction = require("../variable");
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
          //comment the line below to change the direction only
          robot = up(robot);
          //If robot hit the wall, it will auto ignore the movement
          if (validation.isOnTheTable(robot)) {
            this.robot = robot;
          }
          //Always change the direction of the robot when receive a movement
          this.robot.f = direction.North.key;
          break;
        case "SOUTH":
        case "DOWN":
          //comment the line below to change the direction only
          robot = down(robot);
          if (validation.isOnTheTable(robot)) {
            this.robot = robot;
          }
          this.robot.f = direction.South.key;
          break;
        case "WEST":
        case "LEFT":
          //comment the line below to change the direction only
          robot = left(robot);
          if (validation.isOnTheTable(robot)) {
            this.robot = robot;
          }
          this.robot.f = direction.West.key;
          break;
        case "EAST":
        case "RIGHT":
          //comment the line below to change the direction only
          robot = right(robot);
          if (validation.isOnTheTable(robot)) {
            this.robot = robot;
          }
          this.robot.f = direction.East.key;
          break;
        default:
          break;
      }
    }
  } else {
    const { autoMove } = require("./movement");
    let robot = {};
    Object.assign(robot, this.robot);
    robot = autoMove(robot);
    if (validation.isOnTheTable(robot)) {
      this.robot = robot;
    }
  }
  return this;
};
