"use strict"; // строгий режим, так как мы работаем на новом стандарте EC6, то старые ошибки не работают, а
//эта приблуда их замечает.

let money, time;
 
function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате', 'YYYY-MM-DD');
  while(isNaN(money) || money == "" || money == null){ /* команда isNan возвращает true, 
    когда в содержимое попадают не цифры, а буквы и т.д. => суть в том, что цикл while(пока) - 
    будет повторяться до тех пор, пока пользователь не введет цифры.
    Поэтому далее мы через || (или) прописываем еще "" - пустые строки и null - кнопка отмены.*/
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
  start();

  let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income: [],
      timeData: time,
      savings: true
  };
  
function chooseExpenses() {
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
}  
chooseExpenses();

 

  function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); /*.toFixed() округляет число, если в скобках 
  поставить 1, то после запятой добавится еще десятая - 1,3. Также это команда превращает в строковое число*/
  
  let everyDaybudget = ("Ежедневный бюджет: " + appData.moneyPerDay);
  return everyDaybudget;
  }
  
  let z = detectDayBudget();
  detectDayBudget(z);

  function detectLevel() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
  }
  detectLevel();

  function checkSavings() {
    if(appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  }
  checkSavings();
  
  let optionalExpenses = {
     
  };
  
    //       name: "Jack",
    //       age: 37,
    //       isMarried: true
    //   };
    //   console.log(persone.name);
  
  function chooseOptExpenses() {
    for(let q = 0; q < 3; q++) {
      let quest = prompt("Статья необязательных расходов?");
      
    }    
  }
  chooseOptExpenses();

  