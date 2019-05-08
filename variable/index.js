//Declare variable

let direction = {
  North: {
    value: 1,
    key: "NORTH",
    direction: "UP",
    symbol: "^"
  },
  South: {
    value: 2,
    key: "SOUTH",
    direction: "DOWN",
    symbol: "⌄"
  },
  West: {
    value: 3,
    key: "WEST",
    direction: "LEFT",
    symbol: "<"
  },
  East: {
    value: 4,
    key: "EAST",
    direction: "RIGHT",
    symbol: ">"
  }
};
module.exports = direction;
