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
//_______________________________________________________________________________________________________________________/