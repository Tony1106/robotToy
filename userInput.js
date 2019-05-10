const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you want to place the robot (OK/No)", answer => {
  // TODO: Log the answer in a database
  if (answer.toUpperCase() == "OK") {
    rl.question("Please input the x: ", x => {
      rl.question("Please input the y: ", y => {
        rl.question("Please input the f: ", f => {
          const Table = require("./index");
          const robot2 = new Table(5, 5);
          console.log(`Your input: x ${x}, ${y}, ${f}`);
          robot2
            .create()
            .place(x, y, f.toString())
            .print();

          console.log(
            "Now you can move your robot. Please use: keyword below to move the robot"
          );
          console.log(
            "***Hit ENTER--> will move the toy robot one unit forward in the direction it is currently facing."
          );
          console.log(
            "***LEFT,RIGHT,UP,DOWN --> Move the robot up, down, left, right and change its direction"
          );
          rl.question("Do you want to continue? (OK/No)", answer2 => {
            if (answer2.toUpperCase() == "NO") {
              rl.close();
            } else if (answer2.toUpperCase() == "OK") {
              console.log(
                "You can start move the robot from now by hit ENTER or UP, DOWN, RIGHT, LEFT // NORTH, SOUTH, WEST, EAST"
              );
              rl.on("line", input => {
                robot2.move(input).print();
              });
            }
          });
        });
      });
    });
  } else if (answer.toLowerCase() == "no") {
    rl.close();
  }
});
