module.exports = function move(input) {
  if (input) {
    console.log("there is ard", input);
  } else {
    console.log("no input");
  }
  return this;
  //   if (robotFace == direction[0].key) {
  //     robot[1] += 1;
  //     preventFall();
  //     return this;
  //   } else if (robotFace == direction[1].key) {
  //     robot[1] -= 1;
  //     preventFall();
  //     return this;
  //   } else if (robotFace == direction[2].key) {
  //     robot[0] -= 1;
  //     preventFall();
  //     return this;
  //   } else if (robotFace == direction[3].key) {
  //     robot[0] += 1;
  //     preventFall();
  //     return this;
  //   }
};
