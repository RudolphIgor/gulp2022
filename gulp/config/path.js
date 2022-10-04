//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //Папка с результатами проекта
const srcFolder = `./src`; //Папка с исходниками проекта

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		html:`${buildFolder}/`,
		files: `${buildFolder}/files/`,
		css: `${buildFolder}/css/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		scss: `${srcFolder}/scss/style.scss`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		scss: `${srcFolder}/scss/**/*.scss`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}