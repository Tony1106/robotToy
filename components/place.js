module.exports = function place(x, y, f) {
  const Validation = require("../components/validation");
  const validate = new Validation(this._x, this._y).validate(x, y, f);

  if (validate) {
    this.robot = {
      x,
      y,
      f
    };
  }
  return this;
};
