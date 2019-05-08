const direction = require("../variable");
function down(robot) {
  let x = robot.x;
  let y = robot.y;
  let f = direction.South.direction;
  robot.y = y - 1;
  robot.f = f;
  return robot;
}
function up(robot) {
  let x = robot.x;
  let y = robot.y;
  let f = direction.North.direction;
  robot.y = y + 1;
  robot.f = f;
  return robot;
}
function left(robot) {
  let x = robot.x;
  let y = robot.y;
  let f = direction.West.direction;
  robot.x = x - 1;
  robot.f = f;
  return robot;
}
function right(robot) {
  let x = robot.x;
  let y = robot.y;
  let f = direction.East.direction;
  robot.x = x + 1;
  robot.f = f;
  return robot;
}

module.exports = {
  up,
  down,
  right,
  left
};
