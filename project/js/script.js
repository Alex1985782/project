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

//     const personalMoveDB = {
//         count: 0,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//         start: function() {
//           personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');          
//               while(personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
//                 personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//               }
//       },

//        rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//           const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');             
//                 if (a != '' && b != '' && a != null && b != null && a.length < 50) {  
//                  personalMoveDB.movies[a] = b;         
//                  console.log('done');           
//                 } else {            
//                   console.log('error');
//                   i--;
//                 }
//               }
//         },

//         detectPersonalLevel: function () {
//           if (personalMoveDB.count <= 10) {
//                 console.log('Просмотрено довольно мало фильмов');
//              } else if (personalMoveDB.count <= 30) {
//                 console.log('Вы классический зритель');
//               } else if (personalMoveDB.count > 30) {
//                 console.log('Вы киноман');
//              } else {
//                 console.log('Произошла ошибка');
//               }
//           },

//           showMyDB: function (hidden) {
//             if(!hidden) {
//               console.log(personalMoveDB);
//             }  
//         },

//         toggleVisibleMyDB: function () {
//           if(personalMoveDB.privat) {
//             personalMoveDB.privat = false;
//           } else {
//              personalMoveDB.privat = true;
//           }            
//         },

//           writeYourGenres: function () { 
//             // for(let i = 1; i <= 3; i++) { // начинаем с i = 1, так как обыватель не привык вести отсчет с 0 
//               // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
             
//               // if (genre == "" || genre == null) {
//               //   console.log('Вы ввели некорректоные данные или не ввели их вовсе');
//               //   i--;
//               // } else {
//               //   personalMoveDB.genres[i - 1] = genre;
//               // }
// // Еще как вариант ниже:
//           for(let i = 1; i < 2; i++) { // Цикл запускается один раз, так как все записываается через запятую    
//                let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();// Метод
//                //.toLocaleLowerCase() служит для перевода строк в нижний регистр, поскольку заглавные буквы
//                //перебивают строчные, то сортировка по методу .split() не будет нормально функционировать.
             
//               if (genres == "" || genres == null) {
//                 console.log('Вы ввели некорректоные данные или не ввели их вовсе');
//                 i--;
//               } else {
//                 personalMoveDB.genres[i - 1] = genres.split(', '); // Метод .split - запишет в массив через запятую
//                 personalMoveDB.genres.sort();// Отсортирует жанры по алфавиту
//               }

//           }
//           personalMoveDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//           });
//         }                
//           };
        
//         personalMoveDB.writeYourGenres();




                        //ОТЛАВЛИВАЕМ ОШИБКИ В КОДЕ ПРИ ПОМОЩИ КОНСОЛИ РАЗРАБОТЧИКА. BREAKPOINTS

                  //ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS - возможность одного типа данных превращаться в другой

                          //STRING
                
// При сложении со сторокой (конкатенация) всегда будет строка пример:
//       console.log(typeof(5 + ''));
        
//       const fontSize = 27 + 'px';
  
//                           //NUMBER 

// // Унарный плюс меняет строку в числовой тип данных
//       console.log(typeof(+'5'));


//                           //BOOLEAN

//   // 0, '', null, undefinded, NaN - значение false, если в пустой строке ' ' стоит пробел, это уже не false
//   // Пустые объекты и массивы - это true

//       let swither = null; // эта функция не сработает, так как swither передает значение false, если поставить 
//       if (swither) {// значение 1, то сработает, так как передаться значение true
//         console.log('Working...');
//       }
      
//       console.log(typeof(Boolean('4444'))); //Превратиться в булиновое значение
//       console.log(typeof(!!'4444')); //Превратиться в булиновое значение благодаря двойному знаку отрицания !!


                                        //ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ 28 урок

    //                                     //Старые методы 

    // const box = document.getElementById('box');// посредством метода getElementById мы находим id на странице html
    // // id должени быть один, иначе js запутается.
    //       console.log(box);

    //const btns = document.getElementsByTagName('button');// Поиск по тегам.В переменную btns записываются все кнопки, 
    // //работать с ними не получится, потому что это псевдомассив. Для того чтобы выбрать одну кнопку из массива, нужно
    // //поставить [0] ее порядковый номер, пример:
    // console.log(btns[0]);// Теперь мы можем работать с первой кнопкой 

    // const circles = document.getElementsByClassName('circles');// Поиск по классам. Точку ставить не нужно(.circles)
    //   console.log('circles');                                  // так как JS понимает, что мы уже ищем класс


    //                       //Современные методы

    // const hearts = document.querySelectorAll('.heart');//Ищет любой селектор указанный в скобках. Если ищем селектор
    // // по классу, то необходимо ставить точку, так как в отличие от конкретного поиска класса по методу
    // // getElementsByClassName метод querySelectorAll - не понимает, что мы ищем именно класс.
    // //Только метод querySelectorAll свободен от ограничений псевдомассивов, то есть может применять методы к массиву.
    //   hearts.forEach(item => { // Применяем метод .forEach для массива hearts
    //       console.log(item);
    //   });

    // // Еще один метод:
    // const oneHeart = document.querySelector('.heart');
    //       console.log(oneHeart); //Метод .querySelector выводит первый найденный селектор (пр: первую кнопку)



                                    // ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ 29 урок

                                 
    // Применение стилей в JS они являются inline, то есть важнее CSS, поэтому и применяются

//     const box = document.getElementById('box'),
//           btns = document.getElementsByTagName('button'),
//           circles = document.getElementsByClassName('circles'),
//           wrapper = document.querySelector('.wrapper'),  
//           hearts = document.querySelectorAll('.heart'), //После объявления переменной wrapper, можно искать уже не 
//           oneHeart = document.querySelector('.heart');//в document, а hearts = wrapper.querySelectorAll('.heart')    
                 

//     box.style.backgroundColor = 'blue'; //Вместо - в js употребляется формат камелКейс
//     box.style.width = '500px'; // Значение 500 обязательно оформляем в кавычки и устанвливаем ед. измерения
//     // При помощи кода ниже мы можем прописать точно такие же параметры, но в css коде в строчном фомате js, пр:
//     box.style.cssText = 'background-color: red; width: 500px;';


//     btns[1].style.borderRadius = '100%'; // Обязательно необходимо указывать [1], ведь псевдомассив не знает
//     // что такое методы и не выполнит задачу если мы просто укажем btns.style.borderRadius = '100%';
//     // нужна конкретика. Для того чтобы применить свойства ко всем элементам можно обратитсья к циклам, пр:
//       // for (let i = 0; i < hearts.length; i++) {
//       //   hearts[i].style.backgroundColor = 'red';
//       // }// Это геморно, есть способ проще:
//       hearts.forEach(item => {
//           item.style.backgroundColor = 'blue';
//       });// item - перебирает сердечки, то есть hearts и задает им стиль backgroundColor = 'red';

//     const div = document.createElement('div'); //Создает элемент div, но только в js коде, на странице его пока нет
//         div.classList.add('black');

//         // document.body.append(div);// Эта команда выводит наш div в конец тега body в html файле

//         // document.querySelector('.wrapper').append(div); // Добавляет в класс wrapper в html странице тег div

//         wrapper.prepend(div); // Этот метод помещает в начало тег div
//         // hearts[0].before(div); // Этот метод помещает div перед hearts[0]
//         // hearts[0].after(div); // Этот метод помещает div после hearts[0]
//         // circles[0].remove(); // Этот метод удаляет круг
//         // hearts[0].replaceWith(circles[0]); // Этот метод меняет один элемент на другой

//     div.innerHTML = '<h1>Hello world</h1>'; // Выводит текст в html
//  // div.textContent = 'Hello'; //Тоже самое, но выводит только текст, теги <h1></h1> вылезут тоже. Поэтому, если  
//  // мы хотим от пользователя получить текст, то лучше в целях безопасности использовать данный метод

//  div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');// Также выводит текст '<h2>Hello</h2>' в HTML до тега div




                                                 //TASK 5

                                                 

/*1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),//Выбираем img, так как обращаемся к картинкам
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),// Выставляем poster, так как .promo__genre находится внутри его
      movieList = document.querySelector('.promo__interactive-list');
        adv.forEach(item => {// Перебираем массив
          item.remove(); 
        });
        genre.textContent = 'Драмма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';// Важно, чтобы кавычки были разные!!!  
        movieList.innerHTML = '';//Путсые кавычки делают класс .promo__interactive-list пустым
        
        movieDB.movies.sort();//Сортируем объект по алфавиту
        movieDB.movies.forEach((film, i) => {//Перебираем объект и выносим каждое += значение movies в movieList в HTML 
            movieList.innerHTML += `         
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });// ${i + 1} делаем индекс +1 чтобы порядковый номер из массива выводился начиная с 1, а не 0
           // ${film} film это movies - в него запишутся все фильмы по порядку при поэтапной итерации
           // итерация  и присвоение происходит благодаря аргументам +=, поэтому i без ++.