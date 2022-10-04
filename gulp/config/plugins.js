import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"//Обработка ошибок
import notify from "gulp-notify"//События подсказки
import browserSync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновления картинки

//Экспортируем объект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	newer: newer
}