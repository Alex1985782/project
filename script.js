"use strict"; // строгий режим, так как мы работаем на новом стандарте EC6, то старые ошибки не работают, а
//эта приблуда их замечает.

  // var number = 5; (все числа в том числе и дробные, а также слова infinity (4/0) и NaN ("Раздел"/2))
  // var string = "Hello!";
  // var sym = Symbol();
  // var boolean = true;
  // null; (ссылка на не существующий элемент)
  // undefined; (к примеру когда переменную не обозначили)
  // var obj = {}; (комплекс данных)

  /*let arr ["","",]; - это массив, он содержит любые типы данных и оборачивается в [] скобки)
  console.log(arr[2]); выведет значение под номером два, нумерация стартует с нуля.*/
 
  /* let answer = +prompt("Есть ли вам 18?", "Да");
     console.log(typeof(answer)); выводит название типа данных*/

//   let persone = {
//       name: "Jack",
//       age: 37,
//       isMarried: true
//   };
//   console.log(persone.name);

  
/*let plus = 10,
    minus = 10;

    plus++;
    minus--;
    console.log(minus, plus);*/
    
    // let bober = true,
    //     rat = true;

    //  console.log(bober && rat);   


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



