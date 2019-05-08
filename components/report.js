module.exports = function() {
  const { x, y, f } = this.robot;
  console.log(
    "The position of the Robot is: X: " + x + " Y: " + y + " and it face " + f
  );
  const direction = require("../variable");
  console.log(Object.values(direction));
  let symbol = "";
  Object.values(direction).map(item => {
    if (f === item.key) {
      symbol = item.symbol;
    }
  });
  const print = require("./print");
  print(this.robot, this.table, symbol);
};
