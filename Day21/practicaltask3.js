function areaCircle(radius) {
  return Math.PI * radius * radius;
}

function areaRectangle(length, width) {
  return length * width;
}
let circleRadius = 5;
let rectangleLength = 10;
let rectangleWidth = 6;

console.log("Area of Circle:", areaCircle(circleRadius).toFixed(2)); 
console.log("Area of Rectangle:", areaRectangle(rectangleLength, rectangleWidth)); 

