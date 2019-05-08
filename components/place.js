module.exports = function place(x, y, f) {
  const Validation = require("../components/validation");
  const validate = new Validation(this._x, this._y).validate(x, y, f);
  console.log(validate, x, y, f, this._x, this._y);

  if (validate) {
    this.robot = {
      x,
      y,
      f
    };
  }
  return this;
};
