"use strict"; // строгий режим, так как мы работаем на новом стандарте EC6, то старые ошибки не работают, а
//эта приблуда их замечает.

 

  let money = +prompt("Ваш бюджет на месяц?", ''),
      time = prompt('Введите дату в формате', 'YYYY-MM-DD');
  
  let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income: [],
      timeData: time,
      savings: false
  };
  
for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');
  
  if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
  a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b; 
         
      } else {
       console.log('Ответьте пожалуйста на вопросы');
      i--;
      }          
  }   
          


 
//  let i = 0;
//  while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');
//   if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null && 
//       a != "" && b != "" && a.length < 50) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//     i++;
//   }
// }
//   let i = 0;
//   do { // Когда мы хотим что-то сделать (do), а затем проверить это условие (while)
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');
//   if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null && 
//       a != "" && b != "" && a.length < 50) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//     i++;
//   }
// }
//   while (i < 2);

  appData.moneyPerDay = appData.budget / 30;  
  
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
  
  if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }

