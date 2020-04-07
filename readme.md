 Типы переменных
 
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



  // Условие


  // let num = 50;
  // if (num < 49) {
  //   console.log('Неверно')
  // } else if (num > 100) {
  //   console.log('Много')
  // } else {
  //   console.log('Верно')
  // }

  // (num == 50) ? console.log('Верно') : console.log('Неверно');

  // switch (num) { //В этой штуке главное ставить break и проверять значение без знака =, а вот так - case 50:
  //   case num < 49:
  //     console.log('Неверно');
  //     break; //Останавливает код, иначе он выполнет все команды подряд
  //   case num > 100:
  //     console.log('Много');
  //     break;
  //   case num > 80:
  //     console.log('Все еще много');
  //     break;
  //   case 50:
  //   console.log('Верно');
  //   break;
  //   default:
  //     console.log('Что-то пошло не так');
  //     break;
  // }



  //Циклы

  
  // while (num < 55) {
  //   console.log(num);
  //   num++;
  // }

  // do { // Когда мы хотим что-то сделать (do), а затем проверить это условие (while)
  //   console.log(num);
  //   num++;
  // }
  // while (num < 55);

  
  // for (let i = 1; i < 8; i++) {
  //   if (i == 6){// Чтобы пораньше прекратить цикл, на 6-ти
  //     break;
  //     //continue; - команда, которая продолжит цикл, вместо break
  //   }    
  //   console.log(i);
  // }