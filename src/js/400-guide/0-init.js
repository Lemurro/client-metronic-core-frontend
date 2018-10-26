/**
 * Операции со справочниками
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.guide = {};

/**
 * Инициализация
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function () {
    /**
     * Тип справочника
     *
     * @type {string}
     */
    lemurro.guide.type = $('#js-page').attr('data-type');

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    lemurro.guide._getData();
};