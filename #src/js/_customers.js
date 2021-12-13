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
//_______________________________________________________________________________________________________________________/