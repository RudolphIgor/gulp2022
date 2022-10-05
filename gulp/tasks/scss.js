import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCSS from "gulp-clean-css"; //Сжатие CSS
import webpbcss from "gulp-webpcss"; //Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev  })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'SCSS',
			message: "Error: <%= error.message %>"
		})
	))
	
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(
		app.plugins.if(
			app.isBuild,
			groupCssMediaQueries()
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			webpbcss({
				webpClass: ".webp",
				noWebpClass: ".no-webp"
			})
		)
	)
	.pipe(
		autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 version"],
			cascade: true
		})
	)
	.pipe(app.plugins.replace(/@img\//g, '../img/'))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(
		app.plugins.if(
			app.isBuild,
			cleanCSS()
		)
	)
	.pipe(rename({
		extname: ".min.css"
	}))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browserSync.stream())
}