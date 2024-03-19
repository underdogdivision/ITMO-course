let num = prompt("Vvedite chislo", "num");

let n = Number(num);

let a = Math.floor(n / 100); // 1 cifra

let b = Math.floor((n / 10) % 10); // 2 cifra

let c = Math.floor((n % 100) % 10); // 3 cifra

let sum = a + b + c;

if ((sum % 2) == 0) {
  alert(sum)
} else {
  alert("ne chetnoe")
}