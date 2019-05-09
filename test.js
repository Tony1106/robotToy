const Table = require("./index");
describe("Report the position of the robot", () => {
  test("It should return an default position (0, 0, NORTH)", () => {
    const robot1 = new Table(5, 5);
    expect(robot1.report()).toEqual({
      x: 0,
      y: 0,
      f: "NORTH"
    });
  });
});

describe("place the robot on the table", () => {
  test("test case 1: it should return the position of the robot", () => {
    const robot1 = new Table(5, 5);
    let [x, y, f] = [2, 3, "EAST"];
    expect(robot1.place(x, y, f).report()).toEqual({
      x,
      y,
      f
    });
  });
  test("test case 2: it should ignore the placement if wrong input", () => {
    const robot1 = new Table(5, 5);
    let [x, y, f] = [10, -2, "EASTSFS"];
    expect(robot1.place(x, y, f).report()).toEqual({
      x: 0,
      y: 0,
      f: "NORTH"
    });
  });
});

describe("MOVE the robot", () => {
  test("case 1: y would be add 1 as original position is (0, 0, NORTH)", () => {
    const robot1 = new Table(5, 5);
    expect(robot1.move().report()).toEqual({
      x: 0,
      y: 1,
      f: "NORTH"
    });
  });
  test("case 2: move by key same as move by direction", () => {
    const robot1 = new Table(5, 5);
    const robot2 = new Table(5, 5);
    expect(robot1.move("UP").report()).toEqual(robot2.move("NORTH").report());
    expect(robot1.move("DOWN").report()).toEqual(robot2.move("SOUTH").report());
    expect(robot1.move("LEFT").report()).toEqual(robot2.move("WEST").report());
    expect(robot1.move("RIGHT").report()).toEqual(robot2.move("EAST").report());
  });
  test("case 3: should only change the direction to prevent the robot hit the wall", () => {
    const robot1 = new Table(5, 5);
    expect(robot1.move("DOWN").report()).toEqual({
      x: 0,
      y: 0,
      f: "SOUTH"
    });
  });
  test("case 4: should return x + 1 when move right", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("RIGHT")
        .report()
    ).toEqual({
      x: 3,
      y: 2,
      f: "EAST"
    });
  });
  test("case 5: should return x - 1 when move left", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("LEFT")
        .report()
    ).toEqual({
      x: 1,
      y: 2,
      f: "WEST"
    });
  });
  test("case 6: should return y + 1 when move up", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("UP")
        .report()
    ).toEqual({
      x: 2,
      y: 3,
      f: "NORTH"
    });
  });
  test("case 7: should return y - 1 when move down", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("DOWN")
        .report()
    ).toEqual({
      x: 2,
      y: 1,
      f: "SOUTH"
    });
  });
  test("case 8: complex movement", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("DOWN")
        .move("UP")
        .move("LEFT")
        .move("right")
        .report()
    ).toEqual({
      x: 2,
      y: 2,
      f: "EAST"
    });
  });
  test("case 8: complex movement", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("DOWN")
        .move("down")
        .move("Down")
        .move("DoWn")
        .move("RIGHT")
        .move("Right")
        .move("right")
        .report()
    ).toEqual({
      x: 4,
      y: 0,
      f: "EAST"
    });
  });
  test("case 9: complex movement", () => {
    const robot1 = new Table(5, 5);
    expect(
      robot1
        .place(2, 2, "NORTH")
        .move("DOWN")
        .move()
        .move()
        .move()
        .move("RIGHT")
        .move()
        .move()
        .report()
    ).toEqual({
      x: 4,
      y: 0,
      f: "EAST"
    });
  });
});
