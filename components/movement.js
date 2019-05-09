const direction = require("../variable");
function down(robot) {
  let x = robot.x;
  let y = robot.y;
  robot.y = y - 1;
  return robot;
}
function up(robot) {
  let x = robot.x;
  let y = robot.y;
  robot.y = y + 1;
  return robot;
}
function left(robot) {
  let x = robot.x;
  let y = robot.y;
  robot.x = x - 1;
  return robot;
}
function right(robot) {
  let x = robot.x;
  let y = robot.y;
  robot.x = x + 1;
  return robot;
}
function autoMove(robot) {
  let x = robot.x;
  let y = robot.y;
  let f = robot.f;
  const direction = require("../variable");

  switch (f) {
    case direction.North.key:
      y++;
      break;
    case direction.South.key:
      y--;
      break;
    case direction.East.key:
      x++;
      break;
    case direction.West.key:
      x--;
      break;
    default:
      break;
  }
  robot.x = x;
  robot.y = y;
  return robot;
}

module.exports = {
  up,
  down,
  right,
  left,
  autoMove
};
