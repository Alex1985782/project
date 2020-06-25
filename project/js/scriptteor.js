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

                                                 


// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),//Выбираем img, так как обращаемся к картинкам
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),// Выставляем poster, так как .promo__genre находится внутри его
//       movieList = document.querySelector('.promo__interactive-list');
//         adv.forEach(item => {// Перебираем массив
//           item.remove(); 
//         });
//         genre.textContent = 'Драмма';
//         poster.style.backgroundImage = 'url("img/bg.jpg")';// Важно, чтобы кавычки были разные!!!  
//         movieList.innerHTML = '';//Путсые кавычки делают класс .promo__interactive-list пустым
        
//         movieDB.movies.sort();//Сортируем объект по алфавиту
//         movieDB.movies.forEach((film, i) => {//Перебираем объект и выносим каждое значение movies в movieList в HTML 
//             movieList.innerHTML += `         
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//             `;
//         });// ${i + 1} делаем индекс +1 чтобы порядковый номер из массива выводился начиная с 1, а не 0
//            // ${film} film это movies - в него запишутся все фильмы по порядку при поэтапной итерации
//            // итерация  и присвоение происходит благодаря аргументам +=, поэтому i без ++.




                            //CОБЫТИЯ И ИХ ОБРАБОТЧИКИ (event - событие (e))

    //Всплытие событий это когда обработчик события сначала срабатывает на самом вложенном элементе, 
    //затем на родителе и так до самого верха  

    // const btn = document.querySelector('button');
    //       btn.addEventListener('click', () => {// Назначаем событие addEventListener, где 'Click' действие 
    //         alert('Click');                 // пользоавателя, а () => это callback функция запускающая alert
    //       });

    // const btn = document.querySelector('button');
    //       btn.addEventListener('click', (e) => {// В (e) сокращенно записано event(название может быть любым), 
    //       console.log(e.target); // где по 'Click' на button, это действие пользователя при помощи функции   
    //       e.target.remove();  // () => callback  сохраняется в консоль, также благодаря этой функции 
    //       });       // выполнятеся команда  e.target.remove() удаление кнопки  
    // Иными словами метод target фиксирует события пользователя и позволяет выполнять дальнейшие действия с объектом
    
    // let i = 0;
    // const btn = document.querySelector('button'),
    //       deleteElement = (e) =>{
    //          console.log(e.target);
    //          i++;
    //          if (i == 1) {// После того как функция выполнится - i будет = 1
    //             btn.removeEventListener('click', deleteElement);// внизу .addEventListener - назначаем обработчик, 
    //          }                                                  // а здесь удаляем, так как событие произошло (i = 1)
    //       };

    // btn.addEventListener('click', deleteElement); // После того как выполнится 'click' по элементу btn, сработает
    // // функция deleteElement, то есть мы ее не вызываем и поэтому скобки в конце не ставим - deleteElement(), а
    // // лишь говорим, что она будет выполнятся

    // const link = document.querySelector('a'); //Выбираем в документе HTML ссылку, функцией .preventDefault()
    //     event.addEventListener('click', (event) => {//отменяем переход по ссылке и колбэком выводим в консоль
    //         event.preventDefault();// событие пользователя
    //         console.log(event.target);
    //     });
    
        // const btns = document.querySelector('button');
        //     btns.forEach(item => {
        //         btn.addEventListener('click', deleteElement, {once: true});//{once: true} - это опция к deleteElement
        //     });//Перебор необходим чтобы назначать один обработчик сразу на несколько элементов




                            //НАВИГАЦИЯ ПО DOM - ЭЛЕМЕНТАМ, data-АТРИБУТЫ, ПРЕИМУЩЕСТВО for/of

// // Существуют методы, которые позволяют путешествовать по DOM дереву
// console.log(document.body.childNodes);// Метод .childNodes позволяет получить все ноды(элементы) все узлы, которые 
// //находятся внутри родителя body. Чтобы получить последний или первый элемент, есть свойства(типа методы), пр:
//    console.log(document.body.lastChild);
//    console.log(document.body.firstChild);

// // Если в примерах выше мы отталкивались от родителя (body), то также можно и отталкиваться от любого элемента,
// // например через селектор можно путешествовать по дереву, и получить родителей, соседей и детей. пр:
//    console.log(document.querySelector('#current').parentNode.parentNode);//В этом коде мы через селектор 'id=current'
//     //размещенного в HTML коде поднимаемя выше сначала к одному родителю .parentNode, а затем повтороной командой
//     //.parentNode - еще выше ко второму родителю. Команда с приставкой Node выводит в консоль как элементы так и 
       // узлы, например перенос строки. Есть свойства(методы), которые выводят только элементы, пр:
       //console.log(document.querySelector('#current').parentElement); или вместо .firstChild - .firstElementChild


// // data-атрибут, прописывается в HTML коде как data-current="3", где data это комада языка, а current - наша фантазия
// // "3" - это значение, оно как true, в принципе data- атрибуты можно испльзовать и без значения. Эти атрибуты были 
// // придуманы в замен id селекторов, т. к. более удобнее. Чтобы получить data-атрибуты из HTML кода нужно прописать
//        console.log(document.querySelector('[data-current="3"]').nextSibling); // Свойством .nextSibling мы получаем 
//       // не родителей а соседей, но это может быть и не элемент, так как запрашивали и ноду. Чтобы вызвать именно 
//       // элемент, есть команда .nextElementSibling, которая, к примеру выведет в консоль следующий элемент в списке.
// Но чтобы вызвать элементы в команде document.body.childNodes возникают сложности, поскольку в языке такой команды нет
// метод перебора forEach использовать не получится. Поэтому мы используем перебирающую конструкцию for/of.
// Наша цель это избавиться от всех text - вых node. Если зайти в консоль, то мы увидим, что у объетка есть есть 
// свойство nodeName: "#text", то есть название ноды, вот его то мы и будем использавать в условии if для перебора of
// как условие, при котором эти текстовые ноды будут исключаться посредством continue, и програамма будет выполняться
// дальше, пока не переберет все элементы, пример:
        // for(let node of document.body.childNodes) { 
        //     if(node.nodeName == '#text') {
        //         continue;
        //     }
        //     console.log(node); 
        // }



                                                         //TASK 6

                                                 
// document.addEventListener('DOMContentLoaded', () => {//'DOMContentLoaded' - чтобы сначала загрузилась HTML, 
//     const movieDB = {                              //а потом отрабатывал js.
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    
    
//     const adv = document.querySelectorAll('.promo__adv img'),//Выбираем img, так как обращаемся к картинкам
//           poster = document.querySelector('.promo__bg'),
//           genre = poster.querySelector('.promo__genre'),// Выставляем poster, т.к. .promo__genre находится внутри его
//           movieList = document.querySelector('.promo__interactive-list'),
//           addForm = document.querySelector('form.add'),
//           addInput = addForm.querySelector('.adding__input'),
//           checkbox = addForm.querySelector('[type="checkbox"]');//Лучше здесь искать по атрибутам

//           addForm.addEventListener('submit', (event) => {
//               event.preventDefault(); //Отменяет событие браузера по перезагрузке страницы

//               let newFilm = addInput.value; //Чтобы получить название фильма
//             const favorite = checkbox.checked; //Свойство checked служит как булиновое значение, об инфо о галочке

//                     if (newFilm) {//Условие выполняется, если не пустая строка в форме

//                         if (newFilm.length > 21) {
//                             newFilm = `${newFilm.substring(0, 22)}...`;//Методом substring обрезаем длину названия  
//                              // фильма после 22 символа и если название будет длиннее, то просто добавляем троеточие 
//                         }

//                         if (favorite) {//favorite выступает как true, то есть если галочка стоит, то выводим
//                             console.log('Добавляем любимый фильм');

//                         }
//                         movieDB.movies.push(newFilm);//Метод push добавляет фильмы в массив movieDB.movies (сторока)
//                         sortArr(movieDB.movies);
//                         createMovieList(movieDB.movies, movieList); //Создает новый лист
//                     }
                
//   event.target.reset();//Очищает форму после ее заполнения, то есть в addForm в ней было действие                    

//           });

//             const deleteAdv = (arr) => {
//                 arr.forEach(item => {// Перебираем массив и удаляем рекламу
//                     item.remove(); 
//                   });
//             };          
           
//             const makeChanges = () => {
//                 genre.textContent = 'Драмма';
//                 poster.style.backgroundImage = 'url("img/bg.jpg")';// Важно, чтобы кавычки были разные!!!  
    
//             };

//             const sortArr = (arr) => {
//                 arr.sort();
//             };

          
//             function createMovieList(films, parent) {
//                parent.innerHTML = '';//Путсые кавычки делают класс .promo__interactive-list пустым  
//                sortArr(films);

//                films.forEach((film, i) => {//Перебираем объект и выносим каждое значение movies в movieList в HTML 
//                     parent.innerHTML += `         
//                         <li class="promo__interactive-item">${i + 1} ${film}
//                             <div class="delete"></div>
//                         </li>
//                     `;
//                 });

//                document.querySelectorAll('.delete').forEach((btn, i) => {
//                    btn.addEventListener('click', () => {
//                        btn.parentElement.remove();
//                        movieDB.movies.splice(i, 1);//splice - это метод, который вырезает определенный элемент 
//                                                    //из массива, i - это сам элемент, а 1 - номер эл. в массиве
//         createMovieList(films, parent);//Вызываем здесь, чтобы порядковые номера после удаления обновлялись 

//                    });
//                });
//             } 

//             deleteAdv(adv);
//             makeChanges();          
//             createMovieList(movieDB.movies, movieList);   
//         });





                                         //СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

                                    
//События touchstart - коснулись пальцем экрана
//        touchmove - провели пальцем по экрану
//        touchend
//        touchenter - палец при движении по экрану залес на определенную область
//        touchleave - палец при скольжении по экрану ушел за пределы элемента
//        touchcancel - к примеру палец вышел за пределы браузера

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault(); //На мобилках лучше всегда применять отмену стандартного поведения браузера

//         console.log('Start');
//         console.log(e.touches);//Свойстово touches - определяет количество пальцев взаимодействующих с экраном, 
//     });                         //targetTouches - показывает сколько пальцев взаимодействует с элементом
//                                 // changedTouches - показывает, показывает пальцы которые совершили действие

//     //     box.addEventListener('touchmove', (e) => {
//     //         e.preventDefault(); //На мобилках лучше всегда применять отмену стандартного поведения браузера
    
//             console.log(e.targetTouches[0].pagesX); //Показывает координаты перемещения конкретного пальца,
//             //палец указываем под номером в []
//     //     });

    
//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault(); //На мобилках лучше всегда применять отмену стандартного поведения браузера

//     //     console.log('End');
//     // });
// });




                                // Async, defer, ДИНАМИЧЕСКИЕ СКРИПТЫ

// //атрибут defer - благодаря ему, сначала грузится HTML, а потом к нему подключается скрипт 
// // <script defer src="js/script.js"></script> в независимости от того, где находится ссылка на подключение, 
// // при этом сохраняется последовательный порядок загрузки ссылок на другие файлы js.

// //атрибут async - загружает все асинхронно, то есть ссылки на файлы заргужаются независимо друг от друга.
// //Такое поведение к примеру применятся когда необходимо подключить метрику на сайт, то есть сторонний код
// //и там пофиг когда он заработает и начнет обрабатывать.

// //Чтобы разместить ссылку на в HTML странице, можно создать элемент в коде js, пример ниже: (динамические скрипты)
//     const script = document.createElement('script');
//     script.src = 'js/test.js'; //ссылка
//     script.async = false; //В таком случае скрипт будет вести себя как и обычный скрипт внизу страницы
//     document.body.append('script');//Добавляем скрипт в конец файла HTML

// //Еще способ выводить с помощью функций:

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src; //ссылка
//     script.async = false; //В таком случае скрипт будет вести себя как и обычный скрипт внизу страницы, не асинхронно
//     document.body.append('script');//Добавляем скрипт в конец файла HTML
// }

// loadScript('js/test.js');
// loadScript('js/some.js');




                                                        // 2 МОДУЛЬ



                                          //ClassList и делегирование событий - урок 37
                                          


    // const btns = document.querySelectorAll('button'),
    //       wrapper = document.querySelector('.btn-block');

    // console.log(btns[0].classList.length);// с помощью метода classList и свойства length смотрим сколько 
    // //есть классов у первой кнопки.
    // console.log(btns[0].classList.item(1)); //а с помощью метода item можем посмотреть название класса 
    // console.log(btns[0].classList.add('red')); // этот метод добавляет класс red в html к первой кнопке
    // console.log(btns[0].classList.remove('blue')); // Удаляем класс blue в html у первой кнопки
    // console.log(btns[0].classList.toggle('blue'));// Если этот класс присутствует, то удаляется и наоборот


    // if (btns[1].classList.contains('red')) {//Если у второй кнопки есть класс red, возвращает true,
    //     console.log('red');             //то есть метод contains проверяет наличие класса
    // }


    // btns[0].addEventListener('click', () => {
    //     if (!btns[1].classList.contains('red')) {
    //         btns[1].classList.add('red');
    //     } else {
    //         btns[1].classList.remove('red');
    //     }        
    // });
// Про код выше, когда юзер нажимает на первую кнопку, то если у второй кнопки отсутствует класс 'red',
// то он его добавляет, а если есть, то убирает. Тело функции можно заменить на btns[1].classList.toggle('red);

// console.log(btns[0].className); // Устаревший вариант, ну его на хер

// wrapper.addEventListener('click', (event) => { //event - содержит всю информацию, которая происходит с событием 
//   if (event.target && event.target.classList.contains('blue')) {//Указываем event.target, так как рекомендует google
//         console.log('Hello');
//     }
// });// Мы делигируем событие с родителей на его потомков



// wrapper.addEventListener('click', (event) => { //event - содержит всю информацию, которая происходит с событием 
//     if (event.target && event.target.tagName == 'BUTTON') {//Указываем event.target, так как рекомендует google
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {// Перебором делегирование не сработает на кнопку, которая появилась динамически, так как
//     btn.addEventListener('click', () => {//он ее не знает
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// wrapper.addEventListener('click', (event) => { //event - содержит всю информацию, которая происходит с событием 
//     if (event.target && event.target.matches('button.red')) {//matches - какой-то элемент совпадает с чем-то 
//         console.log('Hello');
//     }
// });



    
                                          //38. Создаем табы в новом проекте


// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent () {
//         tabsContent.forEach(item => {
//             item.classList.add('hide'); //Добавляем и удаляем классы (в которых табы)
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');//Перебираем и удаляем дополнительный класс
//         });
//     }
//     function showTabContent(i = 0) {//Ставим 0 по умолчанию, чтобы показывалась перавая картинка
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;//Помещаем в переменную, чтобы упростить написание

//         if (target && target.classList.contains('tabheader__item')) {//Если событие клик происходит на объекте, то
//             tabs.forEach((item, i) => {//происходит перебор объекта
//                 if (target == item) {//Если событие при переборе равно кнопке, которую нажал пользователь, то
//                     hideTabContent();//запускаются две функции
//                     showTabContent(i);// в i - передается результат на какую кнопку нажали и запускает фуккцию 
//                 }
//             });

            
//         }
//     });
          
// });                               
                              



                      //39. Скрипты и время их выполнения. setTimeout и setInterval


    // const timerId = setTimeout(function(text) {//отсрочка выполнения функции на 2 сек
    //     console.log(text);
    // }, 2000, 'hello');// 'hello' передается в text

    // const timerId = setTimeout(logger, 2000);
    //  clearInterval(timerId);//Обнуляет интервал
    //     function logger () {
    //         console.log('text');
    // }

    // const btn = document.querySelector('.btn');
    // let timerId,//так как функция, то чтобы переменная была не локальная, то выносим ее сюда
    //     i = 0;

    // btn.addEventListener('click', () => {
    //     // const timerId = setTimeout(logger, 2000);
    //        timerId = setInterval(logger, 500);//Срабатывает каждые 2 секунды
    // });// У setInterval есть недостаток, так как функция может выполняться долго, то интервал не будет ее ждать,
    //    // поэтому рекурсивная лучше.   

    // function logger () {
    //     if (i === 3) {
    //         clearInterval(timerId);
    //     }
    //     console.log('text');
    //     i++;
    //     }

    //     //Рекурсивная 
    //     let id = setTimeout(function log(){
    //         console.log('Hello');
    //         id = setTimeout(log, 500);
    //     }, 500);//Теперь у нас интервал между выполненим функции всегда одинаковый, так как он срабатывает четко 
    //     //после выполнения функции
   

        // const btn = document.querySelector('.btn');
        // let timerId,//так как функция, то чтобы переменная была не локальная, то выносим ее сюда
        //     i = 0;

        // function myAnimation() {
        //     const elem = document.querySelector('.box');
        //     let pos = 0;//задаем значение позиции

        //     const id = setInterval(frame, 10);//интервал для запуска функции
        //     function frame() {//frame(с анг. кадр)
        //         if (pos == 300) {//Когда позиция будет равна 300, квадратик 
        //             clearInterval(id);//остановится
        //         } else {
        //             pos++;
        //             elem.style.top = pos + 'px';//Перемещение позиции согласно css, то есть мы к 0 + данные px
        //             elem.style.left = pos + 'px';// из css по отступам
        //         }
        //     }
        // }

        // btn.addEventListener('click', myAnimation);//По клику запускается функция




                                                  //40. Работа с датами
    //get - запрашивает дату 
    //set - устанавливает дату

    // const now = new Date();//При таком значении выведет текущую дату

  // console.log(now.setHours(18, 40));// Метод .setHours устанвливает согласно аргумента 18 часов, но есть особенности 
  // console.log(now);//он выводит время по UTC, второй аргумент устанавливает 40 минут

    // new Date.parse('2020-05-01');//Метод .parse аналогично set устанавливает дату
    
    // console.log(now.getFullYear());//Метод getFullYear показывает год
    // console.log(now.getMonth());//Отсчет месяца начинается с нуля поэтому май это 4 месяц
    // console.log(now.getDate());// Показывает число
    // console.log(now.getDay());//Показывает номер дня недели, где вс это 0, а сб 6
    // console.log(now.getHours());//Местоное время 
    // console.log(now.getUTCHours());//Время UTC

    // console.log(now.getTimezoneOffset());//Показывает разницу местного времени в минутах от UTC
    // console.log(now.getTime());//Показывает время в милисекудах прошедшее с 1970 года

  // let start = new Date(); //Вычисляем время за которое выполнится цикл
  //   for(let i = 0; i < 100000; i++) {
  //     let some = i ** 3;
  //   }

  //   let end = new Date();
  //   alert(`Цикл отработал за ${end - start} миллисекунд`);






                               //41. Создаем таймер обратного отсчета на сайте


// const deadline = '2020-07-19';//Дата окончания акции

// function getTimeRemaining(endtime) {//Функция определяющая разницу между deadline и текущем временем
// const t = Date.parse(endtime) - Date.parse(new Date()),//В endtime помещаем deadline и вычитаем настоящее время
//       days = Math.floor(t / (1000 * 60 * 60 * 24)),//Math.floor - Округляем время, вычисляем коилчество милсек в дне 
//       hours = Math.floor(t / (1000 * 60 * 60) % 24),//% - дает остаток, чтобы 40 часов конвертировалось в дни
//       minutes = Math.floor((t / 1000 / 60) % 60),
//       seconds = Math.floor((t / 1000) % 60);

//   return {//Возвращает объект, то есть когда функция отработает этот объект отдаст наружу эти свойства
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function getZero(num) {//Функция, которая прибавляет одиночному числу 0
//     if (num >= 0 && num < 10) {
//         return `0 ${num}`;//Если меньше 10, то функция возвращает число с 0
//     } else {
//         return num; //Если приходит не единичное число, то ноль не добавляется
//     }
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//           days = document.querySelector('#days'),
//           hours = document.querySelector('#hours'),
//           minutes = document.querySelector('#minutes'),
//           seconds = document.querySelector('#seconds'),
//           timeInterval = setInterval(updateClock, 1000);//Чтобы запускать функцию updateClock каждую секунду


// updateClock();//Обновляет время, то есть при обновлении страницы время установленное в html не мигает
// function updateClock() {//Функция получает инфу из return функции getTimeRemaining и выводит ее на страницу
//     const t = getTimeRemaining(endtime);

//     days.innerHTML = getZero(t.days);
//     hours.innerHTML = getZero(t.hours);
//     minutes.innerHTML = getZero(t.minutes);
//     seconds.innerHTML = getZero(t.seconds);

//     if (t.total <= 0) {//Останавливает таймер если его значение меньше или равно 0
//         clearInterval(timeInterval);
//     }
// }

// }

// setClock('.timer', deadline);// Вот почему вместо .timer указан selector, он его подставил просто через функцию




                              //42. Параметры документа, окна и работа с ними



//         //Работа с элементом. Отсчет координат начинается с верхнего левого угла, что отличается от CSS
//         //JS не может работать с псевдоэлементами CSS
       
//         const box = document.querySelector('.box'),
//               btn = document.querySelector('button'),
//             //   width = box.clientWidth,//Получаем ширину нашего модального окна
//             //   height = box.clientHeight;//Высоту
//             // width = box.offsetWidth,//Получаем ширину нашего модального окна как по CSS
//             // height = box.offsetHeight;//Высоту
//             width = box.scrollWidth,//Получаем ширину нашего модального окна 
//             height = box.scrollHeight;//Высоту, но с учетом всей прокрутки (скроллинга)

//               console.log(width, height);//В консоле выводится это значение

//             btn.addEventListener('click', () => {//При нажатии на кнопку, обработчик дает команду элементу box через
//                 //   box.style.height = box.scrollHeight + 'px';//стили CSS увеличить box на всю высоту скроллинга
//                 console.log(box.scrollTop);//Показывает в px сколько проскролил, выводит инфу в консоль
//               });

//             //Синтаксис получения координат объекта:
//             console.log(box.getBoundingClientRect());
//             console.log(box.getBoundingClientRect().top);//Координаты только верхнего значения

// const style = window.getComputedStyle(box);//С помощью этого метода смотрим CSS свойтсва элемента box и в переменую
//               console.log(style);// Если нужен конкретный стиль, то console.log(style.display);

// //Необходимо понимать, что inline стили JS может менять и они приорететнее CSS стилей, 
// //которые JS может только смотреть. В случае со скролингом были применены inline стили.

                                        
//                                         //Работа с document и window

//     console.log(document.documentElement.scrollTop);//Получаем количество px, которые пролистал пользователь
//     //обязательно нужно указывать к document метод .documentElement, иначе .scrollTop к document не применится

//     window.scrollBy(0, 400);//Прокрутка от текущей позиции, где 0 это x, который не изменяется, а 400 это y
//     window.scrollTo(0, 400);//Действует относительно всей страницы



     

                                      //43. Создаем модальное окно



// const modalTrigger = document.querySelectorAll('[data-modal]'), //[] - так как вызываем атрибут
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');
     
//       modalTrigger.forEach(btn => {//Используем команду для всех кнопок
//         btn.addEventListener('click', () => {
//             modal.classList.add('show');//Показать окно
//             modal.classList.remove('hide');//Скрыть, но при помощи toggle это сделать проще пример ниже:
//             // modal.classList.toggle('show');
//             document.body.style.overflow = 'hidden';//Убираем скролл страницы, когда модальное окно открыто
//           });
//       });     

//       function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         // modal.classList.toggle('show');
//         document.body.style.overflow = '';// Восстанавливаем скролл страницы
//       }

//       modalCloseBtn.addEventListener('click', closeModal);//По нажатию запускаем функцию closeModal

//       modal.addEventListener('click', (e) => {//Закрываем диалоговое окно по нажатию на окно
//           if (e.target === modal) {//Если событие юзера происходит на окне, то 
//             closeModal();// Вызваем функцию 
//           }
//       });

//       document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {//Если открыто модальное окно, только тогда по 
//             closeModal();//нажатию кнопки Escape, вызывается функция closeModal() и закрывает окно
//         }
//       });




                                            //  44. Модификации модального окна
                
//  const modalTimerId = setTimeout(openModal, 3000);//Запускаем появление модального окна через 3 секунды

//       function showModalByScroll() {
// //Свойство window.pageYOffset отражает прокрученную часть по оси y. Свойство .documentElement.clientHeigh 
// //показывает видимую часть экрана и если эта сумма будет больше или = свойству .documentElement.scrollHeight
// //то есть скролинг достигнет низа экрана, то наступит событие всплывающего окна.
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//         openModal();
//         window.removeEventListener('scroll', showModalByScroll);// Чтобы при прокрутке страницы вниз модальное окно
//         //появлялось один раз
//     }
//       }
      
//       window.addEventListener('scroll', showModalByScroll); //Чтобы модальное окно всплывало при скролинге вниз




                                                //45. Функции-конструкторы


// К этим функциям не нужен return, мы из них ничего не возвращаем. Могут содержать в себе методы и свойтсва
//Конструкторы необходимы для создания новых однотипных объектов. К примеру создали прототип, а затем на 
//его основе и с помощью свойства .prototype создали новый объект используя элементы протипа. Поэтому конструктор 


//         function User(name, id) {//Функция конструктор, которая создает объект
//           this.name = name;
//           this.id = id;
//           this.human = true;
//           this.hello = function () {//Создаем метод hello
//             console.log(`Hello ${this.name}`);
//           };
//         }

//         User.prototype.exit = function() {//Создаем объект на основе нашего прототипа 
//           console.log(`Пользователь ${this.name} ушел`);
//         };
       
//         const ivan = new User('Ivan', 28),
//               alex = new User('Alex', 28);

//               ivan.exit();

//               ivan.hello();//Вызываем метод
//               alex.hello();

//               console.log(ivan);
//               console.log(alex);





//                                                   //46. Контекст вызова. This

// // 1. Обычнаяя функция: this = window, но если use strict - underfined
//         function showThis(a, b) {
//           console.log(this); 
//             function sum() {
//               console.log(this);
//               return a + b;
//             }   
//             console.log(sum());      
//         }
//         showThis();

  
// // 2. Контекст вызова (this) у методов объекта - сам объект, если внутри метода сделать еще функцию с вызовом this,
// // то он выдаст undefined, так как это простой вызов функции и он не относится к методу объекта.
//         const obj = {
//           a: 12,
//           b: 24,
//           sum: function() {
//             console.log(this);
//           }
//         };
//         obj.sum();

// // 3. this в конструкторах и классах - это новый экземпляр объекта. То есть this  по отношению к свойству name,
// // выступает как вновь созданный объект. Согласно нижеописанного случая в this помещена информация из пременной ivan
//     function User(name, id) {//Функция конструктор, которая создает объект
//       this.name = name;
//       this.id = id;
//       this.human = true;
//       this.hello = function () {//Создаем метод hello
//         console.log(`Hello ${this.name}`);
//       };
//     }
//     let ivan = new User('Ivan', 28),

// // 4. Ручное присвоение контекста: call, apply, bind
//     function sayName(surname) {
//       console.log(this);
//       console.log(this.name);    
//     }

//     const user = {
//       name: 'Bob'
//     };

//     sayName.call(user);//call и apply одинаковые методы, которые ссвязывают между собой конструкции. В данном 
//     sayName.apply(user);//случае, значение из объекта user передается в функцию sayName. Отличие заключается в 
//     //передаче аргументов например:
//     sayName.call(user, 'Smith');//Где аргумент 'Smith' подставится в аргумент функции sayName(surname)
//     sayName.apply(user, ['Smith']);//Тоже самое, только синтаксис в виде массива

//     //Присвоение при помощи метода .bind, который создает новую функцию и под нее подвязывает контекст this
//     function count(num) {
//       return this*num;
//     }

//     const double = count.bind(2);//double это функция у которой есть привязанный контекст, где 2 передается в this
//     console.log(double(3));// В num передается функция double
//     console.log(double(13));

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {//Это сработает только с обычной функцией, контекст события
//   this.style.backgroundColor = 'red';// будет сам элемент на котором произошло событие. Стрелочная не 
// });//сработает, глянь ниже почему так...

// // У стрелочной функции нет своего контекста вызова, она будет его брать у родителя, пример:
//   const obj = {
//     num: 5,
//     sayNumber: function () {//Если бы это была обычная функция, то в консоль вывелось бы undefined, но так как 
//       const say = () => {//в стрелочной функции нет своего контекста вызова, то она берет контекст у своего 
//         console.log(this);//родителя, в данном случае ее родителем выступает метод sayNumber у которого контекст
//       };//ссылается на объект в котором он расположен, поэтому this в стрелочной функции будет ссылаться на объект
//       say();//то есть родителя метода в котором расположени стрелочная функция.
//     }
//   };
//   obj.sayNumber();

// const double = (a) => {
//   return a * 2;
// };// Так выглядит обычная стрелочная функция, но ее можно писать проще:
// const double = a => a * 2;//return подставляется автоматически, а если аргумент один, то и скобки не обязательны
// console.log(double(10));





                                               //47. Классы (ES6)

// //Классы служат для шаблонизации, то есть мы создаем шаблон на основе которого построим много компонентов для сайта,
// //так называемая концепция. А экземпляры это то, что на основе концепции мы создаем.

//     class Rectangle {//Название класса всегда начинается с заглавной буквы. Между {} - ; не ставится
//       constructor(height, width) {//Свойство конструктор это тот же объект, конструирует класс в скобках принимает 
//           this.height = height;// аргументы из вне при создании экземпляра класса. this обращается к экземпляру 
//           this.width = width;//нового созданного объекта к каждому отдельному квадратику. = width берется из 
//       }//constructor(height, width) и записывается в свойство this.width
//       calcAreal() {// Вычисляем площадь. Сам метод записывается без function
//         return this.height * this.width;//Контекст вызова this. ссылается на новый объект, который будет создан
//       }// (this.width = width;) и берем из него свойство .height и .width
//     }

//     class ColoredReactangleWithText extends Rectangle {//extends метод наследования, где левое наследует от правого
//       constructor(height, width, text, bgColor) {
//         super(height, width);//Метод, который вызывает от наследодателя свойства this.height = height; 
//       // и this.width = width; и должен всегда идти ПЕРВОЙ строчкой в конструкторе
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps() {
//       console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
//     }

//     const div = new ColoredReactangleWithText(20, 30, 'hi', 'blue');
//     div.showMyProps();
//     console.log(div.calcAreal());


//  const square = new Rectangle(10, 10);//В переменную square помещаем объект, который создается при помощи класса
//  //Rectangle у которого в теле есть два свойства this.height = height; и this.width = width; и которым присваивается
//  // значение (10, 10); Результат записывается в переменную.
//  const long = new Rectangle(103, 10);

//     console.log(square.calcAreal());
//     console.log(long.calcAreal());



                                    
  
                                          //48. Используем классы в реальной работе