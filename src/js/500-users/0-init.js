/**
 * Работа с пользователями
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.users = {};

/**
 * Инициализация
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.init = function () {
    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.users._templates = {
        roles: Template7.compile($('#js-tpl-user__roles').html())
    };

    lemurro.users._initRoles();
};