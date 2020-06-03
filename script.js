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
    //         continue; //в отличие от команды break - кманда continue продолжает итерацию, но не выводит значеиие 3
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
//           if (a == '' || a == null || a.length > 5 || b == '' || b == null || a.length > 50) {           
//            i--;           
//           }          
// }

// let i = 1;
// while (i < 3) {
//  let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         personalMoveDB.movies[a] = b;
//           if (a == '' || a == null || a.length > 5 || b == '' || b == null || a.length > 50) {           
//            i--;           
//           }
// }

// let i = 1;
// do {
//   let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
//           personalMoveDB.movies[a] = b;
//           i++;
//             if (a == '' || a == null || a.length > 5 || b == '' || b == null || a.length > 50) {           
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

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
}
start();

    const personalMoveDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

function rememberMyFilms() {

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
  }
  // rememberMyFilms();

  function detectPersonalLevel() {

      if (personalMoveDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
         } else if (personalMoveDB.count <= 30) {
            console.log('Вы классический зритель');
          } else if (personalMoveDB.count > 30) {
            console.log('Вы киноман');
         } else {
            console.log('Произошла ошибка');
          }
  }
  // detectPersonalLevel();

  console.log(personalMoveDB);

  function showMyDB(hidden) {

      if(!hidden) {
          console.log(personalMoveDB);
      }

}
showMyDB(personalMoveDB.privat);
// Функция showMyDB использует аргумент hidden, который по своей природе как и цифра "1" является true.
// Таким образом, подставляя к hidden знак отрицания - "!", мы указываем, что если hidden не true, то выводим объект.
// Привязка к объекту, где находится значение privat:false, осуществляется посредством вызова функции 
// showMyDB(personalMoveDB.privat), собственно для которой и выполняется тело функции showMyDB.
// hidden - пер. с англ. скрытый


function writeYourGenres() {
 
    for(let i = 1; i <= 3; i++) { // начинаем с i = 1, так как обыватель не привык вести отсчет с 0
       let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
     personalMoveDB.genres[i - 1] = genre; //i - 1, чтобы запись в массив осуществляласть с 0, а не empty(пустой)      
    }
}
    writeYourGenres();

