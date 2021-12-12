// Ctrl+C  - в терминале оснатовить выполнение gulp, затем если надо то Y - да !!! 



let projectFolder = "dist"; // папка со всем проектом, атоматически создается галпом
// let projectFolder = require("path").basename(__dirname); // вместо dist - папка будет называтся как сам проект

let sourseFolder = "#src"; // папка с исходниками для проекта



// пути для gulp
let path = {

    // куда gulp будет выгружать новосозданные файлы:
    build: {
        html: projectFolder + "/", // будет выгружатся в корень
        css: projectFolder + "/css/", // будет выгружатся в корень/css
        js: projectFolder + "/js/", // будет выгружатся в корень/js

        bootstrapJs: projectFolder + "/bootstrap/", // будет выгружатся в корень/bootstrap
        bootstrapCss: projectFolder + "/bootstrap/", // будет выгружатся в корень/bootstrap

        img: projectFolder + "/img/", // будет выгружатся в корень/img
        imgHeader: projectFolder + "/img/header/", // будет выгружатся в корень/img/header
        imgMain: projectFolder + "/img/main/", // будет выгружатся в корень/img/main
        imgFooter: projectFolder + "/img/footer/", // будет выгружатся в корень/img/footer

        fonts: projectFolder + "/fonts/" // будет выгружатся в корень/fonts
    },

    // откуда gulp получает исходные файлы:
    src: {
        html: [sourseFolder + "/*.html", "!" + sourseFolder + "/_*.html"], // исходники будут браться из корень/файлы с расширеним html / исключать начинающиеся с _ из корень/файлы с расширеним html
        css: sourseFolder + "/scss/style.scss", // исходники будут браться из корень/scss/только файл-style.scss
        js: sourseFolder + "/js/script.js", // исходники будут браться из корень/scss/только файл-style.scss

        bootstrapJs: sourseFolder + "/bootstrap/*.js", // исходники будут браться из корень/bootstrap/файлы с расширеним js
        bootstrapCss: sourseFolder + "/bootstrap/bootstrap.scss", // исходники будут браться из корень/bootstrap/только файл-bootstrap.scss

        img: sourseFolder + "/img/*.{jpg,png,svg,gif,ico,webp}", // исходники будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgHeader: sourseFolder + "/img/header/*.{jpg,png,svg,gif,ico,webp}", // исходники будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgMain: sourseFolder + "/img/main/*.{jpg,png,svg,gif,ico,webp}", // исходники будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgFooter: sourseFolder + "/img/footer/*.{jpg,png,svg,gif,ico,webp}", // исходники будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}

        fonts: [sourseFolder + "/fonts/*", "!" + sourseFolder + "/fonts/*.txt"] // исходники будут браться из корень/fonts/все файлы кроме txt
    },

    // откуда gulp получает исходные файлы, за которыми надо следить (они изменяются и автосохраняются):
    watch: {
        html: sourseFolder + "/**/*.html", // исходники(автосохраняющиеся) будут браться из корень/все подпапки/файлы с расширеним html
        css: sourseFolder + "/scss/*.scss", // исходники(автосохраняющиеся) будут браться из корень/scss/файлы с расширеним scss
        js: sourseFolder + "/js/*.js", // исходники(автосохраняющиеся) будут браться из корень/js/файлы с расширеним js

        bootstrapCss: sourseFolder + "/bootstrap/**/*.scss", // исходники(автосохраняющиеся) будут браться из корень/bootstrap/все вложенные папки/файлы с расширеним scss

        img: sourseFolder + "/img/*.{jpg,png,svg,gif,ico,webp}", // исходники(автосохраняющиеся) будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgHeader: sourseFolder + "/img/header/*.{jpg,png,svg,gif,ico,webp}", // исходники(автосохраняющиеся) будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgMain: sourseFolder + "/img/main/*.{jpg,png,svg,gif,ico,webp}", // исходники(автосохраняющиеся) будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
        imgFooter: sourseFolder + "/img/footer/*.{jpg,png,svg,gif,ico,webp}", // исходники(автосохраняющиеся) будут браться из корень/img/все подпапки/файлы с расширеним или{jpg,png,svg,gif,ico,webp}
    },

    clean: "./" + projectFolder + "/" // clean: путь к папке с проктом
};



// переменные для самого gulp, и для установленных плагинов и дополнений:
let {
    src,
    dest
} = require("gulp"); // src, dest  = присваиваем сам установленный gulp
let gulp = require("gulp"); // gulp = присваиваем сам установленный gulp
let browsersync = require("browser-sync").create(); // browsersync = присваиваем плагин, который установили - browser sync - он обновляет браузер (npm i browser-sync --save-dev)
let fileinclude = require("gulp-file-include"); // fileinclude = присваиваем плагин, который установили - file include - он подключает файлы (npm i gulp-file-include --save-dev)
let del = require("del"); // del = присваиваем плагин, который установили - del - он удаляет(npm i del --save-dev)
let scss = require("gulp-sass")(require('sass')); // scss = присваиваем плагины, который установили - gulp-sass, sass gulp-sass - они для работы с css препроцессором (npm i gulp-sass --save-dev) а затем (npm i sass gulp-sass --save-dev)
let autoprefixer = require("gulp-autoprefixer"); // autoprefixer = присваиваем плагин, который установили - gulp-autoprefixer - он добавляет автопрефиксы (npm i gulp-autoprefixer --save-dev)
let clean_css = require("gulp-clean-css"); // clean_css = присваиваем плагин, который установили - gulp-clean-css - он чистит и сжимает css файл на выходе (npm i gulp-clean-css --save-dev)
let rename = require("gulp-rename"); // rename = присваиваем плагин, который установили - gulp-rename - он переименовывает файл (npm i gulp-rename --save-dev)
let uglify = require("gulp-uglify-es").default; // uglify = присваиваем плагин, который установили - gulp-uglify-es - он сжимает и оптимизирует файл (npm i gulp-uglify-es --save-dev)



// функция для обновления браузера:
function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + projectFolder + "/" // это переменная clean
        },
        port: 3000,
        notify: false
    });
}



// функция для html:
function html() {
    return src(path.src.html) // возвращаем: src - это сам gulp(путь, откуда gulp получает исходные файлы: из html)
        .pipe(fileinclude()) // pipe-команда для gulp (подключить другие файлы - собрать в один)
        .pipe(dest(path.build.html)) // pipe-команда для gulp (dest - это сам gulp(путь, куда gulp будет выгружать новосозданные файлы: в html))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для css:
function css() {
    return src(path.src.css) // возвращаем: src - это сам gulp(путь, откуда gulp получает исходные файлы: из scss)
        .pipe(
            scss({ // настройки для препроцессора:
                outputStyle: "expanded" // будет развернутый файл - удобен для чтения, не сжатый
            })
        )
        .pipe(
            autoprefixer({ // настройки для автопрефиксов:
                overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
                cascade: true // стиль написания автопрефиксов - каскад
            })
        )
        .pipe(dest(path.build.css)) // pipe-команда для gulp (выгружаем 1 раз))
        .pipe(clean_css()) // pipe-команда для gulp (почистит и сожмет файл на выходе)
        .pipe(
            rename({
                extname: ".min.css" // переименовываем, добавляю к файлу ещё .min.css
            })
        )
        .pipe(dest(path.build.css)) // pipe-команда для gulp (выгружаем 2 раз)
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для js:
function js() {
    return src(path.src.js) // возвращаем: src - это сам gulp(путь, откуда gulp получает исходные файлы: из js)
        .pipe(fileinclude()) // pipe-команда для gulp (подключить другие файлы - собрать в один)
        .pipe(dest(path.build.js)) // pipe-команда для gulp (выгружаем 1 раз))
        .pipe(
            uglify() // сжимаем и оптимизируем файл js
        )
        .pipe(
            rename({
                extname: ".min.js" // переименовываем, добавляю к файлу ещё .min.js
            })
        )
        .pipe(dest(path.build.js)) // pipe-команда для gulp (выгружаем 2 раз))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для bootstrapJs:
function bootstrapJs() {
    return src(path.src.bootstrapJs) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.bootstrapJs)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}


// функция для bootstrapCss:
function bootstrapCss() {
    return src(path.src.bootstrapCss) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(
            scss({ // настройки для препроцессора:
                outputStyle: "expanded" // будет развернутый файл - удобен для чтения, не сжатый
            })
        )
        .pipe(
            autoprefixer({ // настройки для автопрефиксов:
                overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
                cascade: true // стиль написания автопрефиксов - каскад
            })
        )
        .pipe(dest(path.build.bootstrapCss)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для img:
function img() {
    return src(path.src.img) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.img)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}
// функция для imgHeader:
function imgHeader() {
    return src(path.src.imgHeader) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.imgHeader)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}
// функция для imgMain:
function imgMain() {
    return src(path.src.imgMain) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.imgMain)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}
// функция для imgFooter:
function imgFooter() {
    return src(path.src.imgFooter) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.imgFooter)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для fonts:
function fonts() {
    return src(path.src.fonts) // возвращаем: (путь, откуда gulp получает исходные файлы)
        .pipe(dest(path.build.fonts)) // pipe-команда для gulp (путь, куда gulp будет выгружать новосозданные файлы))
        .pipe(browsersync.stream()); // pipe-команда для gulp (обновить браузер)
}



// функция для слежки за файлами: отлавливает изменения и автосохранения
function watchFiles(params) {
    gulp.watch([path.watch.html], html); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию html
    gulp.watch([path.watch.css], css).on('change', browsersync.reload); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию css. это помогло для автообновления браузера при изменении scss файлов
    gulp.watch([path.watch.js], js); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию js
    gulp.watch([path.watch.bootstrapCss], bootstrapCss); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию bootstrapCss
    gulp.watch([path.watch.img], img); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию img
    gulp.watch([path.watch.imgHeader], imgHeader); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию imgHeader
    gulp.watch([path.watch.imgMain], imgMain); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию imgMain
    gulp.watch([path.watch.imgFooter], imgFooter); // для gulp указываем путь к файлам за которыми надо следить, затем передаём функцию imgFooter
}



// функция для очистки(удаления) папки(dist)
function clean(params) {
    return del(path.clean); // возвращаем: удаляем(путь к папке с проктом-dist)
} // gulp её пересоздает потом



// сообщаем галпу что надо выполнить (сценарий выполнения):
let build = gulp.series(clean, html, gulp.parallel(bootstrapCss, bootstrapJs, js, fonts, css), img, imgHeader, imgMain, imgFooter); // series- по очереди, потом parallel- одновременно
let watch = gulp.parallel(build, watchFiles, browserSync); // parallel- одновременно

// сообщаем галпу новые переменные, чтобы он их понимал(подружился с ними):
exports.fonts = fonts;
exports.imgFooter = imgFooter;
exports.imgMain = imgMain;
exports.imgHeader = imgHeader;
exports.img = img;
exports.bootstrapCss = bootstrapCss;
exports.bootstrapJs = bootstrapJs;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;