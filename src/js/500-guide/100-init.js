/**
 * Инициализация
 *
 * @param {string} pageName Суффикс файла html: guide_[pageName].html
 * @param {string} jsClass  js-класс справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function (pageName, jsClass) {
    /**
     * Имя справочника
     *
     * @type {string}
     */
    lemurro.guide._name = pageName;

    /**
     * Класс справочника
     *
     * @type {string}
     */
    lemurro.guide._class = jsClass;

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide._templates = {};

    // Загрузим справочник
    lemurro.guide._load();
};