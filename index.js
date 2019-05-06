//X, Y start from 0 to 4 on the table
let table = [
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"]
];

//Declare variable
let direction = [
  { value: 1, key: "North", symbol: "^" },
  { value: 2, key: "South", symbol: "⌄" },
  { value: 3, key: "West", symbol: "<" },
  { value: 4, key: "East", symbol: ">" }
];

//Display the table on console
console.log(" ");
console.log(" ");
console.log(["-", "-", "North", "-", "-"]);
console.log(" ");
console.log(" ");
table.map(item => console.log(item));
console.log(" ");
console.log(" ");
console.log(["-", "-", "South", "-", "-"]);
console.log(" ");
console.log(" ");
let [x, y, f] = [2, 3, 4];
console.log(x, y, f);
