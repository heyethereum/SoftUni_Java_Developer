const circleArea = (radius) => {
  if (typeof radius !== "number") {
    console.log(
      `This calculation cannot be completed using a variable of type: ${typeof radius}.`
    );
  } else if (typeof radius === "number") {
    let result = Math.pow(radius, 2) * Math.PI;
    console.log(result.toFixed(2));
  }
};

circleArea("name");
