module.exports = function place(x, y, f) {
  const Validation = require("../components/validation");
  const validate = new Validation(this._x, this._y).place(x, y, f);

  if (validate) {
    f = f.toUpperCase();
    this.robot = {
      x,
      y,
      f
    };
  }
  return this;
};
