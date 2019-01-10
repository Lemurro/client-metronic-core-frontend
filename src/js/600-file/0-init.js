/**
 * Работа с файлами
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.file = {};

/**
 * Инициализация
 *
 * @param {string} classFile Селектор элемента файлов
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.init = function (classFile) {
    lemurro.file._config();

    /**
     * Селектор элемента файлов
     *
     * @type {string}
     */
    if (isEmpty(classFile)) {
        lemurro.file._classFile = 'js-files__file';
    } else {
        lemurro.file._classFile = classFile;
    }
};