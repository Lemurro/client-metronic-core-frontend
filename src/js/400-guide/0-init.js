/**
 * Операции со справочниками
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var guide = {};

/**
 * Тип справочника
 *
 * @type {string}
 */
guide.type = '';

/**
 * Объект для хранения шаблонов
 *
 * @type {object}
 */
guide.templates = {};

/**
 * Инициализация
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.init = function () {
    guide.type = $('#js-page').attr('data-type');

    guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    guide._getData();
};