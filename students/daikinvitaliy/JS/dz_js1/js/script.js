console.log("Задание 6");
const dolar = prompt("к-тво доларов", "");
const evro = dolar * 0.82;
console.log(evro, "евро");
console.log("Задание 7");
const gb = prompt("Объем флешки Гб", "");
const mb = 0.82;
const file = ~~(gb / mb);
console.log(file, "файла");
console.log("Задание 8");
const sum = prompt("Сумма денег в лапате", "");
const price = prompt("Цена за шоколадку", "");
const quantity = ~~(sum / price);
const bagOfChocolates = quantity * price;
const surrender = sum - bagOfChocolates;
console.log(quantity, "шт.", surrender, "сдача");
console.log("Задание 9");
let threeDigit = prompt("Ведите трехзначное число", "");
const lastDigit = (threeDigit % 10) * 100;
threeDigit = ~~(threedigit / 10);
const twoDigit = (threedigit11 % 10) * 10;
threeDigit = ~~(threedigit / 10);
const triDigit = threeDigit / 10;
const resultDigit = lastDigit + twoDigit + triDigit;
console.log(resultDigit);
console.log("Задание 10");
let contribution = +prompt("Сумма вклада", "");
let percentagePerMonth = (5 / 12) * 2;
contribution = (contribution * percentagePerMonth) / 100;
console.log(contribution);
