module.exports = function move() {
  const { direction } = require("../variable");
  const robot = this.robot;
  const robotFace = robot[2];
  const Validation = require("../components/validation");
  const preventFall = () => {
    const isOnTheTable = new Validation(this._x, this._y).preventFall(robot);
    if (isOnTheTable) {
      console.log(robot);
      this.robot = robot;
    }
  };
  if (robotFace == direction[0].key) {
    robot[1] += 1;
    preventFall();
    return this;
  } else if (robotFace == direction[1].key) {
    robot[1] -= 1;
    preventFall();
    return this;
  } else if (robotFace == direction[2].key) {
    robot[0] -= 1;
    preventFall();
    return this;
  } else if (robotFace == direction[3].key) {
    robot[0] += 1;
    preventFall();
    return this;
  }
};
