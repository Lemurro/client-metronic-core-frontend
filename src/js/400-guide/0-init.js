/**
 * Операции со справочниками
 *
 * @version 07.08.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var guide = {};

/**
 * Инициализация
 *
 * @version 07.08.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.init = function () {
    /**
     * Тип справочника
     *
     * @type {string}
     */
    guide.type = $('#js-page').attr('data-type');

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    guide._getData();
};