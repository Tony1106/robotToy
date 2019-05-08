module.exports = function print(robot, table, symbol) {
  newTable = Object.assign({}, table);
  const { x, y } = robot;
  let row = newTable[x].slice(0);
  row[y] = symbol || "*";
  newTable[x] = row;
  console.log(newTable);
};
