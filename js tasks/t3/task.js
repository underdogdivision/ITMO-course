let year = prompt("Введите год", "year");

let yearNum = Number(year);

let centure = ((yearNum - 1) / 100) + 1;

alert(Math.floor(centure));
