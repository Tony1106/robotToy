module.exports = function print() {
  newTable = Object.assign({}, this.table);
  const { x, y, f } = this.robot;
  let row = newTable[x].slice(0);
  let symbol = createSymbol(f);
  row[x] = symbol || "*";
  newTable[this._y - y] = row;
  console.log(`Position of the robot: x: ${x}, y: ${y},  f: ${f}`);
  console.log(newTable);

  //this is the function to create the symbol UP, DOWN, RIGHT, LEFT -> ^ > < ⌄
  function createSymbol(f) {
    const direction = require("../variable");
    let symbol = "";
    Object.values(direction).map(item => {
      if (f === item.key) {
        symbol = item.symbol;
      }
    });
    return symbol;
  }
};
