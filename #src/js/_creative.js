//‾‾‾‾‾‾‾‾‾‾_creative‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

// получаю элементы:
const plant = document.querySelector(".creative__button_plants"); // получаю элемент по селектору
const minimal = document.querySelector(".creative__button_minimalist"); // получаю элемент по селектору
const modern = document.querySelector(".creative__button_modern"); // получаю элемент по селектору


plant.addEventListener("click" , () => { // при клике:
    // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
    fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch (куда посылам запрос)
    .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
    .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
});

minimal.addEventListener("click" , () => { // при клике:
    // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
    fetch('https://jsonplaceholder.typicode.com/todos/2') // fetch (куда посылам запрос)
    .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
    .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
});

modern.addEventListener("click" , () => { // при клике:
    // делаем GET запрос через Fetch (получаем данные с сервера, и обрабатываем их):
    fetch('https://jsonplaceholder.typicode.com/todos/3') // fetch (куда посылам запрос)
    .then(response => response.json()) // если всё выполнилось то возвращается промис (ответ в формате json => превращаем ещё в формат JS - объект)
    .then(json => console.log(json)); // если всё выполнилось то возвращается промис (объект JS => показываем в консоли этот объект)
});
//_______________________________________________________________________________________________________________________