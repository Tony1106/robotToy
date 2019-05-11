module.exports = function create() {
  let length = [];
  if (this._x > 0 && this._y > 0) {
    for (let i = 0; i <= this._x; i++) {
      length.push("O");
    }
    for (let j = 0; j <= this._y; j++) {
      this.table.push(length);
    }
  } else {
    console.log("Wrong size of the table");
  }

  return this;
};
