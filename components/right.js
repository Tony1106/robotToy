module.exports = function right(robot) {
  let x = robot[0];
  let y = robot[1];
  let f = robot[2];
  robot[0] = x + 1;
  return robot;
};
