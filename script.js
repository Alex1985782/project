"use strict"; 

                                  // Объект

// const obj = {
//     name: "Alex",
//     age: 35,
//     isMarried: true
// };
// console.log(obj.age);


                                 // Объект массив

// let arr = ["plum.png", "балбес", "47", {}, []];
// console.log(arr[0]);


                                // Обратная связь с пользователем

// let answer = confirm('Вам есть 18?', '');
// console.log(answer);

// let question = +prompt('Сколько вам лет?', '18');
// console.log(question);


                                // Запись в массив

// const arrs = [];
// arrs[0] = prompt('Как тебя зовут?', '');
// arrs[1] = prompt('Какая у тебя фамилия?', '');
// arrs[2] = prompt('Сколько тебе лет?', '');
// console.log(arrs);



                                     // TASK 1


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMoveDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMoveDB.movies[a] = b;
//       personalMoveDB.movies[c] = d;
//       console.log(personalMoveDB);



                              // УСЛОВИЕ


//       let num = 50;

//       if (num < 49) {
//           console.log('Error');
//       } else if (num > 100) {
//           console.log('no');
//       } else {
//           console.log('ok');
//       }


//       // Тернарный оператор

//       (num == 50) ? console.log('ok') :  console.log('no'); 




      //Строгое сравнение и только. Можно сравнивать  не только числа, но и к примеру строки


    //   let num = 50;

    //   switch (num) {    
    //       case 49:
    //           console.log('Неверно');
    //           break;
    //       case 100:
    //           console.log('Неверно');
    //           break;
    //       case 50:
    //           console.log('В точку!');
    //           break;
    //       default:
    //           console.log('Не в этот раз');
    //   }


                                        // ЦИКЛЫ 3 ВИДА


    //   let num = 50;

    //   while (num <= 60) {
    //       console.log(num);
    //       num++;
    //   }


    // do {
    //     console.log(num);
    //     num++;
    // } while (num <= 55);


    // for (let i = 0; i < 7; i++ ) {  
    //Если условие будет 0, то есть i < 0, то цикл будет выполнятся вечно, 
    //поскольку значение i каждый раз будет увеличиваться на 1
    //     console.log(num);
    //     num++;        
    // }

    // for ( let i = 1; i < 7; i++) {
    //     if (i === 3) {
    //         // break; //прерывает итерацию по достижению значения = 3
    //         continue; //в отличие от команды break - команда continue продолжает итерацию, но не выводит значеиие 3
    //     }
    //     console.log(i);
    // }
   

                               // TASK 2


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
// const personalMoveDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// if (personalMoveDB.count <= 10) {
//   console.log('Просмотрено довольно мало фильмов');
// } else if (personalMoveDB.count <= 30) {
//   console.log('Вы классический зритель');
// } else if (personalMoveDB.count > 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }

// for (let i = 1; i < 3; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         personalMoveDB.movies[a] = b;
//           if (a == '' || a == null || b == '' || b == null || a.length > 50) {           
//            i--;           
//           }          
// }

// let i = 1;
// while (i < 3) {
//  let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         personalMoveDB.movies[a] = b;
//           if (a == '' || a == null || b == '' || b == null || a.length > 50) {           
//            i--;           
//           }
// }

// let i = 1;
// do {
//   let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
//           personalMoveDB.movies[a] = b;
//           i++;
//             if (a == '' || a == null || b == '' || b == null || a.length > 50) {           
//              i--;           
//             }
//           } while (i < 3);           
//       console.log(personalMoveDB);


// Препод
// for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
         
//             if (a != '' && b != '' && a != null && b != null && a.length < 50) {  
//              personalMoveDB.movies[a] = b;         
//              console.log('done');           
//             } else {               
//               console.log('error');
//                i--;
//             }
//           }



                                       // ФУНКЦИИ

//DECLARATION

// function showFirstMessage(text) {
//   console.log(text);
// }
// showFirstMessage('Hello world!');

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(5, 7));
// console.log(calc(4, 7));
// console.log(calc(8, 7));

// function ret() {
//     let num = 50;
//     return num; // данная команда вытаскивает переменную num на ружу
// }
// const anotherNum = ret();
// console.log(anotherNum);


// // EXSPRESSION

// const logger = function() {
//   console.log('Hello');
// };

// logger();

//СТРЕЛОЧНАЯ ФУНКЦИЯ

// const calc = (a, b) => {
//   console.log('1');
//   return a + b;
// };


                                   // TASK 3

// let numberOfFilms;

// function start() {

//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//           numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
// }
// start();

//     const personalMoveDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };

// function rememberMyFilms() {

//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
       
//           if (a != '' && b != '' && a != null && b != null && a.length < 50) {  
//            personalMoveDB.movies[a] = b;         
//            console.log('done');           
//           } else {            
//             console.log('error');
//             i--;
//           }
//         }
//   }
//   // rememberMyFilms();

//   function detectPersonalLevel() {

//       if (personalMoveDB.count <= 10) {
//             console.log('Просмотрено довольно мало фильмов');
//          } else if (personalMoveDB.count <= 30) {
//             console.log('Вы классический зритель');
//           } else if (personalMoveDB.count > 30) {
//             console.log('Вы киноман');
//          } else {
//             console.log('Произошла ошибка');
//           }
//   }
//   // detectPersonalLevel();

//   console.log(personalMoveDB);

//   function showMyDB(hidden) {

//       if(!hidden) {
//           console.log(personalMoveDB);
//       }

// }
// showMyDB(personalMoveDB.privat);
// // Функция showMyDB использует аргумент hidden, который по своей природе как и цифра "1" является true.
// // Таким образом, подставляя к hidden знак отрицания - "!", мы указываем, что если hidden не true, то выводим объект.
// // Привязка к объекту, где находится значение privat:false, осуществляется посредством вызова функции 
// // showMyDB(personalMoveDB.privat), собственно для которой и выполняется тело функции showMyDB.
// // hidden - пер. с англ. скрытый


// function writeYourGenres() {
 
//     for(let i = 1; i <= 3; i++) { // начинаем с i = 1, так как обыватель не привык вести отсчет с 0       
//         personalMoveDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//   //i - 1, чтобы запись в массив осуществляласть с 0, а не с 1, иначе под 0 зпишется значение - empty(пустой)      
//     }
// }
//     writeYourGenres();



                                       // CALLBACK - ФУНКЦИИ

// function first() {
//   setTimeout (function() {
//     console.log(1);
//   }, 500); //задержка выполнения функции на 500 м/с
// }
// function second() {
//   console.log(2);
// }
// first();
// second();
// Функции first() и second() являются доказательством того, что в JS функции вызываются хоть и по порядку, 
// но это не означает, что если первая функция долго тележится, то вторая будет дожидаться ее выполнения 
// А вот функция callback(), как раз таки дает такую гарантию, о чем доказывается ниже...

      // function learnJS(lang, callback) {
      //     console.log(`Я учу: ${lang}`);
      //     callback();
      // }
      // learnJS('JavaScript', function() {
      //   console.log('Я прошел этот урок!');
      // });
// Функция learnJS() выполняется так: сначала в нее вносятся два аргумента (lang, callback)
// В тело функции вносится оплределенная логика, а при вызове функции аргументу lang присваивается
// значение 'JavaScript'. Таким образом, при выполнении логики тела функции learnJS сначала выводится в
// консоль конкатенация значений `Я учу: ${lang}` в виде Я учу: 'JavaScript', а затем выполняется 
// в порядке установленной последовательности функция callback, которая вызывалась без именной функцией
// function() {console.log('Я прошел этот урок!');} в рамках вызова функции learnJS.

// Еще один способ
// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }
// function done() {
//   console.log('Я прошел этот урок!');
// }
// learnJS('JavaScript', done);
// При вызове функции done в команде learnJS('JavaScript', done); мы не ставим круглые скобки "done()",
// поскольку мы ее привязываем к аргументу callback, и соответственно эта функция начинает свое выполнение
// после завершение логики console.log(`Я учу: ${lang}`); в теле функции learnJS


                                 //ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ (ES6)

    // const options = {
    //   name: 'test',
    //   width: 1024,
    //   height: 1024,
    //   colors: {
    //     border: 'black',
    //     bg: 'red'
    //   },
    //   makeTest: function() {// эта фукция и есть метод объекта, которая работает внутри самого объекта
        // console.log('test');// Object.keys - это метод встроенный в js, а makeTest - это созданный нами свой метод 
    //   }
    // };
    //     options.makeTest();
    // delete options.name; //Удаляет свойство name
    // console.log(options['colors]['border']); // эта команда позволяет вывести в консоль значение 
    // встроенного в объект options объекта colors, а в частности значение свойства border. Есть еще лучше способ,
    // так называемый деструктуризация:
    // const {border, bg} = options.colors;
    //   console.log(border); 

    // Чтобы установить количество элементов в объекте можно прибегнуть к команде: 
    // console.log(Object.keys(options).length); // Без команды length, создастся массив, который будет содержать
    // в себе перечень элементов объекта, а при помощи length осуществляется подсчет содержания массива.
    // Тем самым мы получаем количество элементоа в объекте (по факту в консоль выводятся свойства).
    
    // for (let key in options) {
    //   console.log(`Свойство ${key} имеет значение ${options[key]}`);
    // }
    // Цикл for мы используем для перебора объекта. Для этой цели мы создаем аргументы, а именно переменную key.
    // Key, потому что ключем называют свойства объекта. Смысл в том, что нам неизвестны наименования свойств(ключей)
    // объекта options, поэтому мы им даем общее название key, а in позволяет заглядывать внутрь объекта.
    //Далее в console.log, путем конкатенации мы выводим в консоль все итерации цикла, а их будет ровно столько, 
    //сколько имеется свойств(ключей) в объекте options.
    // То есть команда for (let key in options) перебирает все свойства объекта options, которые помещаются в переменную
    // key. А затем посредством команды console.log выводим все, что находится в объекте option, где key выводит 
    // свойства, а options[key] их значения - аналог обращения к свойству объекта через options.name
    // Как ты заметил, при выводе значений объекта options, не получилось вывести содержание объекта colors.
    // Эта не является ошибкой, просто JS выводит информацию в качестве строк, и с внутренним объектом у него
    // возникают сложности. Код ниже позволяет вывести значения и их свойства встроенного объекта colors.

    // for (let key in options) {
    //     if (typeof(options[key]) === 'object') {//Если одно из свойств в объекте - это объект,
    //       for (let i in options[key]) {// то в этом встроенном объекте выполняется перебор и данные записываются в i
    //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
    //       }
    //     }
    //     else {console.log(`Свойство ${key} имеет значение ${options[key]}`);
    //   }
    // }



                                         // МАССИВЫ И ПСЕВДОМАССИВЫ

    // const arr = [2, 4, 7, 9];
      // arr.pop(); // метод, который удаляет последний элемент массива
      // arr.push(10); // метод, который добавляет в конце массива элемент 10
      // // для того чтобы удалять и добавлять в элементы в начало массива служат команды shift и unshift.
      // // Однако в реальности они практически не используются, поскольку добавление и удаление элемента в 
      // // в начало массива служит переиндексации порядкового номера всех элементов, что при больших объемах 
      // // массива отнимает много времени
      // на собеседовании часто спрашивают как соотносится length с порядковым номером элементов массива - 
      // равнозначны ли они? Ответ нет. Порядковый номер начинается с нуля, однако length выдает в конце
      // плюс один [2, 4, 7, 9] - поэтому length в этом примере покажет 4, а не 3 (порядковый номер)
      // const arr = [2, 4, 7, 9];
      // console.log(arr.length);
      // console.log(arr);


      // Также как и с объектами, массивы перебираются:
      // const arr = [2, 4, 7, 9];
      // for (let i = 0; i < arr.length; i++) { // i < arr.length - то есть, итерации будут продолжаться, пока 
      //     console.log(arr[i]);               // не закончится длина массива (его элементы)
      // }

      // // второй способ:
      //   for (let value of arr) { // перебор при помощи команды of, с объектами она не сработает
      //     console.log(value);
      //   }

      // третий способ:
      // arr.forEach(function(item, i, arr) {// внутри функции могут быть только 3 аргумента
      //     console.log(`${i}: ${item} внутри массива ${arr}`);// i - это порядковый номер элементов в массиве
      // });                                                    // item - это элемент в массиве
                                
      // Есть методы создания из строк массивов и наоборот:
      // const str = prompt('', '');
      // const products = str.split(', ');// метод split добавляет в массив ответы в виде элементов полученных от user
      // products.sort(); // сортирует строковые элементы в алфавитном порядке, цифры тоже, но по своей логике 
      // console.log(products.join('; '));// метод join из массива выводит элементы в строку через ;

      // //код ниже позволят выстроить элементы применяя метод sort по возрастанию, благодаря function compareNum 
      // const arr = [2, 4, 7, 9];
      //   arr.sort(compareNum);
      //     console.log(arr);

      //     function compareNum(a, b) {
      //       return a - b;
      //     }


                                  //ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ,Spread ОПЕРАТОР ES6

  //  let a = 5,
  //      b = a + 5;
  //      console.log(b); // b выведет в консоль 10, так как с примитивными типами данными происходит присваивание

  //  const obj = {
  //    a: 5,
  //    b: 7
  //  };

  //  let copy = obj;
  //      copy.a = 10;
  //       console.log(copy);
  //       console.log(obj); // С объектами как с примитивными данными передача значения не получится, поскольку 
        // структура объекта не передается, в случае с объектом оператор присваивания(=) выступает в качестве 
        // ссылки. Таким образом при присваивании copy.a = 10; нового значения - это значение по ссылке
        // записывается в объект. Для того чтобы присвоить значения объекта(копировать), необходимо прибегнуть
        // к функции:
        
//         function copy(mainObj) { 
//           let objCopy = {};

//           let key;
//           for (key in mainObj) {
//             objCopy[key] = mainObj[key];
//           }
//             return objCopy;
//         }
//         // В вышеуказанной функции мы создаем аргумент mainObj куда будет помещаться для перебора и копирования 
//         // нужный нам объект. Далее мы создаем пустой объект let objCopy = {}; в него мы будем копировать.
//         // Создаем переменную key для перебора (key in mainObj) свойств объекта и их присваивания в наш 
//         // пустой объект (objCopy[key] = mainObj[key]). Командой return objCopy - мы выводим объкт из функции.

//         const numbers = {
//           a: 5,
//           b: 7,
//           c: {
//             x: 8,
//             y: 9
//           }
//         };

//      const newNumbers = copy(numbers); // Для аргумента mainObj функции copy мы для перебора передаем объект(numbers)

//           newNumbers.a = 10; 
//           newNumbers.c.x = 10;
// // В свойствах основного объекта копии произошли изменения, а в оригинале нет. Таким образом мы добились 
// // копирования как и в случае с примитивными данными. Однако это все же поверхностное копирование, поскольку
// // вложенный объект (с) изменяется вместе с копией, так как он остается пока еще ссылкой.
//           console.log(newNumbers);
//           console.log(numbers);

// Для того чтобы вложить новый объект в уже созданный объект есть команда Object.assign, пример ниже:

// Для копирования массива есть метод .slice, пример ниже:

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'fat';

// console.log(newArray);
// console.log(oldArray);

// Также для копирования массива и объекта есть оператор разворот(Spread) (...), пример ниже:

// const cars = ['mers', 'bmw', 'audi'],
//       bike = ['suzuki', 'harley', 'ducati'],
//       shop = [...bike, ...cars, 'toyota'];

//       console.log(shop);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [1, 2 ,3];

// log(...num);

// const obj2 = {
//   one: 1,
//   two: 2
// };

// const numer = {...obj2};




                                  // ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ
  // Наследование позволяет сделать прототип, а затем в послдующем, брать необходимые из него элементы для нового
  // объекта и т.д. пример ниже: 
  // const soldier = {
  //   health: 400,
  //   armor: 100,
  //   sayHello: function() {
  //     console.log('Hello');
  //   }
  // };
  

  // const john = {
  //   health: 100
  // };
  
  // // john.__proto__ = soldier; //Старая команда, предоставлена для примера, современная ниже:
  // Object.setPrototypeOf(john, soldier);

    // console.log(john.armor);// Таким образом, объект john получил от прототипа объекта soldier значение armor
   
    // john.sayHello();

    // const john = Object.create(soldier); // Метод Object.create, также создает прототипную связь



                                   // TASK 4

//let numberOfFilms; эту переменную мы удаляем и заменяем ее в объекте на personalMoveDB.count

    const personalMoveDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
          personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');          
              while(personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
                personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
              }
      },

       rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
          const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');             
                if (a != '' && b != '' && a != null && b != null && a.length < 50) {  
                 personalMoveDB.movies[a] = b;         
                 console.log('done');           
                } else {            
                  console.log('error');
                  i--;
                }
              }
        },

        detectPersonalLevel: function () {
          if (personalMoveDB.count <= 10) {
                console.log('Просмотрено довольно мало фильмов');
             } else if (personalMoveDB.count <= 30) {
                console.log('Вы классический зритель');
              } else if (personalMoveDB.count > 30) {
                console.log('Вы киноман');
             } else {
                console.log('Произошла ошибка');
              }
          },

          showMyDB: function (hidden) {
            if(!hidden) {
              console.log(personalMoveDB);
            }  
        },

        toggleVisibleMyDB: function () {
          if(personalMoveDB.privat) {
            personalMoveDB.privat = false;
          } else {
             personalMoveDB.privat = true;
          }            
        },

          writeYourGenres: function () { 
            for(let i = 1; i <= 3; i++) { // начинаем с i = 1, так как обыватель не привык вести отсчет с 0 
              let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
             
              if (genre == "" || genre == null) {
                console.log('Вы ввели некорректоные данные или не ввели их вовсе');
                i--;
              } else {
                personalMoveDB.genres[i - 1] = genre;
              }
          }
          personalMoveDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
          });
        }                
          };
        
        personalMoveDB.writeYourGenres();
        
       
  




   