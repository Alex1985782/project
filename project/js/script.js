"use strict";    

window.addEventListener('DOMContentLoaded', () => {

    //Табы

        const tabs = document.querySelectorAll('.tabheader__item'),
              tabsContent = document.querySelectorAll('.tabcontent'),
              tabsParent = document.querySelector('.tabheader__items');
    
        function hideTabContent () {
            tabsContent.forEach(item => {
                item.classList.add('hide'); //Добавляем и удаляем классы (в которых табы)
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');//Перебираем и удаляем дополнительный класс
            });
        }
        function showTabContent(i = 0) {//Ставим 0 по умолчанию, чтобы показывалась перавая картинка
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;//Помещаем в переменную, чтобы упростить написание
    
            if (target && target.classList.contains('tabheader__item')) {//Если событие клик происходит на объекте, то
                tabs.forEach((item, i) => {//происходит перебор объекта
                    if (target == item) {//Если событие при переборе равно кнопке, которую нажал пользователь, то
                        hideTabContent();//запускаются две функции
                        showTabContent(i);// в i - передается результат на какую кнопку нажали и запускает фуккцию 
                    }
                });
    
                
            }
        });
            
    //Таймер
        
        const deadline = '2020-07-19';//Дата окончания акции

function getTimeRemaining(endtime) {//Функция определяющая разницу между deadline и текущем временем
  const t = Date.parse(endtime) - Date.parse(new Date()),//В endtime помещаем deadline и вычитаем настоящее время
        days = Math.floor(t / (1000 * 60 * 60 * 24)),//Math.floor - Округляем время, вычисляем коилчество милсек в дне 
        hours = Math.floor(t / (1000 * 60 * 60) % 24),//% - дает остаток, чтобы 40 часов конвертировалось в дни
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

  return {//Возвращает объект, то есть когда функция отработает этот объект отдаст наружу эти свойства
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getZero(num) {//Функция, которая прибавляет одиночному числу 0
    if (num >= 0 && num < 10) {
        return `0 ${num}`;//Если меньше 10, то функция возвращает число с 0
    } else {
        return num; //Если приходит не единичное число, то ноль не добавляется
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);//Чтобы запускать функцию updateClock каждую секунду


updateClock();//Обновляет время, то есть при обновлении страницы время установленное в html не мигает
function updateClock() {//Функция получает инфу из return функции getTimeRemaining и выводит ее на страницу
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {//Останавливает таймер если его значение меньше или равно 0
        clearInterval(timeInterval);
    }
}

}

setClock('.timer', deadline);// Вот почему вместо .timer указан selector, он его подставил просто через функцию

//Модальное окно

const modalTrigger = document.querySelectorAll('[data-modal]'), //[] - так как вызываем атрибут
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

      function openModal() {
            modal.classList.add('show');//Показать окно
            modal.classList.remove('hide');//Скрыть, но при помощи toggle это сделать проще пример ниже:
            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';//Убираем скролл страницы, когда модальное окно открыто
            clearInterval(modalTimerId);//Если пользователь открыл сам окно, то по времени оно открываться не будет
      }
     
      modalTrigger.forEach(btn => {//Используем команду для всех кнопок
        btn.addEventListener('click', openModal);
      });        
      

      function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';// Восстанавливаем скролл страницы
      }

      modalCloseBtn.addEventListener('click', closeModal);//По нажатию запускаем функцию closeModal

      modal.addEventListener('click', (e) => {//Закрываем диалоговое окно по нажатию на окно
          if (e.target === modal) {//Если событие юзера происходит на окне, то 
            closeModal();// Вызваем функцию 
          }
      });

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {//Если открыто модальное окно, только тогда по 
            closeModal();//нажатию кнопки Escape, вызывается функция closeModal() и закрывает окно
        }
      });
           
      const modalTimerId = setTimeout(openModal, 3000);//Запускаем появление модального окна через 3 секунды

      function showModalByScroll() {
//Свойство window.pageYOffset отражает прокрученную часть по оси y. Свойство .documentElement.clientHeigh 
//показывает видимую часть экрана и если эта сумма будет больше или = свойству .documentElement.scrollHeight
//то есть скролинг достигнет низа экрана, то наступит событие всплывающего окна.
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);// Чтобы при прокрутке страницы вниз модальное окно
        //появлялось один раз
    }
      }
      
      window.addEventListener('scroll', showModalByScroll); //Чтобы модальное окно всплывало при скролинге вниз


      // Используем классы для карточек

      class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {//parentSelector аргумент - родитель для нашего div
          this.src = src;                                  //куда мы поместим нашу верстку из метода render
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = price;
          this.parent = document.querySelector(parentSelector);//this.parent будет содержать DOM элемент, который 
          //будет передаваться в настройку нашего класса
          this.transfer = 70;//Стоимость доллара в рублях
          this.changeToUAH();//Вызываем метод, чтобы запустить конвертор

      }

      changeToUAH() {
        this.price = this.price * this.transfer;//ковнвертируем доллары в рубли
      }

      render() {//Далее вызовом этого метода (render) будет создавать структуру элемента div
        const element = document.createElement('div');
        //Динамически создаем элемент div 
        element.innerHTML = `
        <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>   
        `;
        this.parent.append(element);//Добавляем наш DOM элемент на страгицу в HTML
      }
    }
   
    new MenuCard(//Создаем новый объект для вызова render(), вызывается один раз, поэтому в переменную 
                  //его не помещаем. Он отрабатывает и все.
          "img/tabs/vegy.jpg",
          "vegy",
          'Меню "Фитнес"',//Разные кавычки
          'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
           9,//Передаем price, у него в базе данных стоит 9 долларов, поэтому он ее прописал
           '.menu .container'//Создаем родительский селектор

    ).render(); 

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();
});

                                  
                                  
    



                                            