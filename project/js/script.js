"use strict";                        
                                
window.addEventListener('DOMContentLoaded', () => {

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
          
});                               
                              