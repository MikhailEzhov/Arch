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
//_______________________________________________________________________________________________________________________/