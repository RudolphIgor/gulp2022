 //Основной модуль сам gulp
import gulp from "gulp";

 //Импорт путей
import { path } from "./gulp/config/path.js";

//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

//Передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

//Наблюдатель за изменениями файлов
function watcher () {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
}

//Главный сценарий задач
const mainTasks = gulp.parallel(copy, html);

//Построение сценариев выполнения задачь
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//Выполнение сценария по умолчанию
gulp.task('default', dev);