"use strict";


window.addEventListener("DOMContentLoaded", () => {


    //‾‾‾‾‾‾‾‾‾‾_header‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элемент(ы):
    const headerIcon = document.querySelector(".header__menu-icon"); // родитель для иконок
    const headerNav = document.querySelector(".header__navigation"); // навигация



    headerIcon.addEventListener("click", () => {
        if (headerIcon.lastElementChild.classList.contains("header__icon-burger")) { // условие-если (у элемента есть этот класс, то делаем:
            headerIcon.lastElementChild.className = "header__icon-exit"; // заменяем все классы на этот
            headerNav.className = "header__navigation nav-toggle"; // заменяем все классы на этот
        } else {
            headerIcon.lastElementChild.className = "header__icon-burger"; // заменяем все классы на этот
            headerNav.className = "header__navigation"; // заменяем все классы на этот
        }
    });
    //_______________________________________________________________________________________________________________________/; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @

    //‾‾‾‾‾‾‾‾‾‾_creative‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элементы:
    const plant = document.querySelector(".creative__button_plants"); // получаю элемент по селектору
    const minimal = document.querySelector(".creative__button_minimalist"); // получаю элемент по селектору
    const modern = document.querySelector(".creative__button_modern"); // получаю элемент по селектору


    plant.addEventListener("click", () => { // при клике:
        // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
        fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch (куда посылам запрос)
            .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
            .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
    });

    minimal.addEventListener("click", () => { // при клике:
        // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
        fetch('https://jsonplaceholder.typicode.com/todos/2') // fetch (куда посылам запрос)
            .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
            .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
    });

    modern.addEventListener("click", () => { // при клике:
        // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
        fetch('https://jsonplaceholder.typicode.com/todos/3') // fetch (куда посылам запрос)
            .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
            .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
    });
    //_______________________________________________________________________________________________________________________; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @

    //‾‾‾‾‾‾‾‾‾‾_design‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элементы со страницы:
    const slides = document.querySelectorAll(".design__slide"); // слайды = получаю все слайды(псевдомассив) по селектору
    const prev = document.querySelector(".design__switch-left"); // стрелка вЛево = получаю элемент по селектору
    const next = document.querySelector(".design__switch-right"); // стрелка вПраво = получаю элемент по селектору
    const slidesWrapper = document.querySelector(".design__slider-wrapper"); // большая главная обертка = получаю элемент по селектору
    const slidesField = document.querySelector(".design__slider-inner"); // блок со слайдами = получаю элемент по селектору
    const width = window.getComputedStyle(slidesWrapper).width; // ширина = глобальный объект-окно, какая сейчас ширина применена на slidesWrapper



    // ориентир - чтобы понимать на сколько отступили (влево, вправо)
    let offset = 0; // offset будет изначально на 0


    // для блока со слайдами:
    slidesField.style.width = 100 * slides.length + "%"; // для блока со слайдами задаём ширину = 100% * всё кол-во слайдов


    // для всех слайдов на странице:
    slides.forEach(element => { // перебираем все слайды и для каждого делаем:
        element.style.width = width; // задаём ширину из переменной-const width (все слайды будут одинаковой ширины)
    });



    // обработчик события для стрелики вПраво:
    next.addEventListener("click", () => { // при клике, делаем:
        // делаем:

        if (offset == +width.slice(0, width.length - 2) * (slides.length - 3)) { // если долистали до конца, то
            // offset = 0; // возвращаемся в начальное положение
        } else { // иное действие:
            offset += +width.slice(0, width.length - 2); // смещаемся (вправо)
        }

        slidesField.style.transform = `translateX(-${offset}px)`; // для блока со слайдами задаём трансформацию = по оси X на ориентир

    });


    // обработчик события для стрелики вЛево:
    prev.addEventListener("click", () => { // при клике, делаем:
        // делаем:

        if (offset == 0) { // если это начальное положение, то
            // offset = +width.slice(0, width.length - 2) * (slides.length - 1); // перемещаемся в самый конец
        } else { // иное действие:
            offset -= +width.slice(0, width.length - 2); // смещаемся (влево)
        }

        slidesField.style.transform = `translateX(-${offset}px)`; // для блока со слайдами задаём трансформацию = по оси X на ориентир

    });
    //_______________________________________________________________________________________________________________________/; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @ 

    //‾‾‾‾‾‾‾‾‾‾_customers‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элементы:
    const commentTitle = document.querySelector(".customers__comments-title"); // заголовок комментария = получаю элемент по селектору
    const commentDescr = document.querySelector(".customers__comments-description"); // описание комментария = получаю элемент по селектору
    const commentSign = document.querySelector(".customers__comments-signature"); // подпись комментария = получаю элемент по селектору
    const commentLeft = document.querySelector(".customers__switch-left"); // стрелка вЛево = получаю элемент по селектору
    const commentRight = document.querySelector(".customers__switch-right"); // стрелка вПраво = получаю элемент по селектору


    // массивы для взятия значений
    const arrTitle = ['“Finally i can build my own dream house”', '“2 Can own house finally build my dream i”', '“3 Dream house i can build own finally my”', '“4 My own finally i build dream can house”'];
    const arrDescr = ['After i decided to giving my trust to Arch for designing my own house, i feel so happy for my decision because finally the design is beyond my expectation!', '2 Is decision for trust i feel my happy for to because giving my design arch my beyond i so expectation! House, after to own my the finally decided', '3 Finally own my design beyond trust is my i expectation! Because my decided, happy so designing i my to for for after the decision to arch feel', '4 For after i arch expectation! Decision own my decided the because happy to is so designing beyond to trust my my my i feel design house, giving for'];
    const arrSign = ['Jonathan Hill', '2 Name Name', '3 Name Name', '4 Name Name'];


    let index = 0; // индекс - для старта:


    // обработчик события для стрелики вЛево:
    commentLeft.addEventListener("click", () => { // при клике, делаем:
        changeValue(-1); // вызываем функцию , передаём внуть -1
    });


    // обработчик события для стрелики вПраво:
    commentRight.addEventListener("click", () => { // при клике, делаем:
        changeValue(1); // вызываем функцию , передаём внуть +1
    });


    function changeValue(value) {
        index += value; // присваиваем это значение

        if (index == 4) { // проверяем по условию
            index = 0;
        }

        if (index == -1) { // проверяем по условию
            index = 3;
        }

        commentTitle.innerHTML = arrTitle[index]; // динамически меняем на значение из массива(по индексу)
        commentDescr.innerHTML = arrDescr[index]; // динамически меняем на значение из массива(по индексу)
        commentSign.innerHTML = arrSign[index]; // динамически меняем на значение из массива(по индексу)
    }
    //_______________________________________________________________________________________________________________________/; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @

    //‾‾‾‾‾‾‾‾‾‾_contact‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // POST на сервер:

    // получаем элементы
    const contactName = document.querySelector(".contact__input-name"), // инпут с именем - получаю по классу
        contactEmail = document.querySelector(".contact__input-email"), // инпут с email - получаю по классу
        contactText = document.querySelector(".contact__input-textarea"), // инпут с описанием - получаю по классу
        contactForm = document.querySelector(".contact__form"); // сама форма - получаю по классу



    contactForm.addEventListener("submit", (e) => { // событие submit - отправить форму,   (e) - объект события
        e.preventDefault(); // на объекте события отменяем стандартное поведение браузера (для AJAX запросов должна стоять в самом начале)

        let object = {
            name: contactName.value,
            email: contactEmail.value,
            text: contactText.value
        };

        // постим данные на сервер через fetch, через промисы настраиваем действия:
        fetch("https://jsonplaceholder.typicode.com/users", { // fetch (куда посылам запрос, объект - настраиваем)
            method: "POST", // метод запроса POST
            headers: { // заголовки, чтобы на сервере определили какой контент мы отправляем: {объект}
                "Content-type": "application/json" // тип контента: тип
            },
            body: JSON.stringify(object) // body: превращаем объект в формат JSON
        }).then(response => response.json() // если запрос Выполнился то возвратится промис (ответ в формате json => превращаем ещё в формат JS - объект)
        ).then(json => { // если запрос Выполнился то возвратится промис (данные-ответ от сервера => объект
            // выполняем действия:
            console.log(json);
        }).catch(() => { // если запрос Отклонился то:
            // выполняем действия:
            console.log("Error.........");
        }).finally(() => { // при любом исходе запроса:
            // выполняем действия:
        });
    });


    //==================================================================================================================



    // в localStorage сохраним значение из email:

    const idEmail = document.getElementById("email555"); // получаю элемент по id

    idEmail.value = localStorage.getItem('email'); // получить данные по ключу
    idEmail.oninput = () => { // когда что то вводили
        localStorage.setItem('email', idEmail.value); // сохранили пару ключ/значение
    };
    //_______________________________________________________________________________________________________________________/; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @ 

    //‾‾‾‾‾‾‾‾‾‾modal‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаем элементы
    const modalTrigger = document.querySelectorAll("[data-modal]"), // все кнопки(псевдомассив) - по дата атрибуту data-modal
        modal = document.querySelector(".modal"), // модальное окно - по классу
        modalCloseBtn = document.querySelector("[data-close]"); // кнопка закрытия - по дата атрибуту data-close

    //----------------------------------------------------
    // функция - открытие модального окна - обьявили
    function openModel() {
        modal.classList.add("_show");
        modal.classList.remove("_hide");

        document.body.style.overflow = "hidden"; // отключить скролл-прокрутку сайта при открытом модальном окне
    }

    // функция - закрытие модального окна - обьявили
    function closeModal() {
        modal.classList.add("_hide");
        modal.classList.remove("_show");

        document.body.style.overflow = ""; // включить обратно скролл-прокрутку сайта когда модальное окно закрылось
    }

    //-----------------------------------------------------
    // действия при клике на кнопку - из псевдомассива
    modalTrigger.forEach(button => {
        button.addEventListener("click", openModel);
    });

    // действия при клике на кнопку-закрыть в модальном окне
    modalCloseBtn.addEventListener("click", closeModal);


    //======================================================================================================================


    // POST на сервер:

    // получаем элементы
    const inputName = document.querySelector(".modal__input_name"), // инпут с именем - по классу
        inputPhone = document.querySelector(".modal__input_phone"); // инпут с телефоном - по классу



    modal.addEventListener("submit", (e) => { // событие submit - отправить форму,   (e) - объект события
        e.preventDefault(); // на объекте события отменяем стандартное поведение браузера (для AJAX запросов должна стоять в самом начале)

        let object = {
            name: inputName.value,
            phone: inputPhone.value
        };

        // постим данные на сервер через fetch, через промисы настраиваем действия:
        fetch("https://jsonplaceholder.typicode.com/posts", { // fetch (куда посылам запрос, объект - настраиваем)
            method: "POST", // метод запроса POST
            headers: { // заголовки, чтобы на сервере определили какой контент мы отправляем: {объект}
                "Content-type": "application/json" // тип контента: тип
            },
            body: JSON.stringify(object) // body: превращаем объект в формат JSON
        }).then(response => response.json() // если запрос Выполнился то возвратится промис (ответ в формате json => превращаем ещё в формат JS - объект)
        ).then(json => { // если запрос Выполнился то возвратится промис (данные-ответ от сервера => объект
            // выполняем действия:
            console.log(json);
        }).catch(() => { // если запрос Отклонился то:
            // выполняем действия:
            console.log("Error.........");
        }).finally(() => { // при любом исходе запроса:
            // выполняем действия:
        });
    });
    //_______________________________________________________________________________________________________________________/; // объедини @@ чтобы импорт сработал, а то после редактирования становится @ @ 


});