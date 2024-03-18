let a = 10;
let b = 7;
let c = 8;

if (a > b) {
  if (b > c) {
    console.log(c, b, a)
  } else {
    console.log(b, c, a)
  }
} else {
  if (a > c) {
    console.log(c, a, b)
  } else {
    console.log(a, c, b)
  }
}