"use strict";

let money = prompt("Ваш бюджет на месяц?");
  //console.log(money);

let time = prompt("Введите дату в формате", "YYYY-MM-DD");
  //console.log(time);

let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");
let c = prompt("Введите обязательную статью расходов в этом месяце");
let d = prompt("Во сколько обойдется?");
let expenses = {};
expenses.a = b;
expenses.c = d;

let appData = {
  
  бюджет: money,
  timeData: time,
   
  expenses : {
    a: "b",
    c: "d"
  }, 

  optionalExpenses : {},

  income : [],
  //console.log(arr[2]); выведет значение под номером два, нумерация стартует с нуля.*/
 
  savings: false
};
let oneDay = (money/30);

console.log(appData.бюджет);
console.log(appData.timeData);
console.log(a, b);
console.log(c, d);
alert(oneDay);



