module.exports = function print(robot, table, symbol) {
  //Length, height of the table
  const lenght = table[0].length - 1;
  const height = table.length - 1;
  newTable = Object.assign({}, table);
  const { x, y } = robot;
  let row = newTable[x].slice(0);
  row[x] = symbol || "*";
  newTable[height - y] = row;
  console.log(newTable);
};
