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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a  = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c  = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMoveDB.movies[a] = b;
      personalMoveDB.movies[c] = d;
      console.log(personalMoveDB);