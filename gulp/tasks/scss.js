import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCSS from "gulp-clean-css"; //Сжатие CSS
import webpbcss from "gulp-webpcss"; //Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'SCSS',
			message: "Error: <%= error.message %>"
		})
	))
	
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(app.plugins.replace(/@img\//g, '../img/'))
	.pipe(rename({
		extname: ".min.css"
	}))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browserSync.stream())
}