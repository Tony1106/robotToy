module.exports = function down(robot) {
  let x = robot[0];
  let y = robot[1];
  let f = robot[2];
  robot[1] = y - 1;
  return robot;
};
