module.exports = function() {
  const Validation = require("../components/validation");
  const validation = new Validation(this._x, this._y);

  const { x, y, f } = this.robot;
  console.log(
    "The position of the Robot is: X: " + x + " Y: " + y + " and it face " + f
  );
  return this.robot;
};
