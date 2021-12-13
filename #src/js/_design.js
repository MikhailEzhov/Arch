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
//_______________________________________________________________________________________________________________________/