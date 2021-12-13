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
//_______________________________________________________________________________________________________________________/