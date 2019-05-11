# Project Title

Toy Robot Simulator

## Getting Started

A robot simulator that you can play with the robot by moving it around the table. It will talk the input from the terminal and print out on the screen.

To make the robot more flexible, I adjust the function MOVE, instead of change the direction only, I will make it change the position as well. To reverse it, just comment those line in my project:

<img src="https://imgur.com/Q5oo3Ae" >

Clone the project:

```
git clone git@github.com:Tony1106/robotToy.git
```

Install dependency:

```
npm install
```

Play with the robot in the terminal:

```
npm run play
```

## How to play

### Place the robot on the table

- The table size set the default at 5x5.
- Input the position and the direction of the robot on the table.
- If the robot gets the wrong input or it not on the table, it will automatically set the default position of the robot is {x: 0, y: 0, f: North}.

### Move the robot

- Simply move the robot by your input.
- Hit the ENTER to move the robot 1 unit in the same direction of the robot.
- Input UP, DOWN, LEFT, RIGHT to move the robot 1 unit UP, DOWN, LEFT, RIGHT. It will change the direction and position of the robot.
- It will ignore the movement if the wrong input.
  -It will only change the direction if the robot hit the wall.

## Running the tests

Most of the function already cover by unit testing.
There is some complex movement to test the robot as well.
Run the test:

```
npm run test
```

## Functionality

- `const Table = require('./index')`
- `const robot = new Table(5,5)`: create a table 5x5
- `create()`: create the table for the print() on the console log.
- `place(x,y,f)`: place the robot on the table take a position: x,y and direction f.
- `move(direction)`: move the robot by the direction. The argument `direction` can take UP, DOWN, LEFT, RIGHT or NORTH, SOUTH, WEST, EAST to move the robot or just leave it empty to move the robot 1 unit as its direction.
- `report()`: print the position of the robot to the screen.
- `print()`: print the whole table out the see the robot. The robot will have the symbol: `^ > < ⌄` the show its direction. Require to run the `create()` first.

<img src="https://imgur.com/tbtITnZ" >

## Add more function to the robot

To make the robot more functionality, simply just add more method in the `component` folder and register a new method at the `index.js` by using prototype:

```
Table.prototype.method = require("./components/mothod");
```

## Authors

- **Tony Bui** --StackOverflow-429 reps--
- Stack: https://stackoverflow.com/users/9694174/tony-bui

- Linkedin: https://www.linkedin.com/in/tienbui06/

- Git: https://github.com/Tony1106
- Phone: 0449 701 109
