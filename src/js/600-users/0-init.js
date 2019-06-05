/**
 * Работа с пользователями
 *
 * @version 05.06.2019
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
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.init = function () {
    lemurro.users._t7helperAccessSets();

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.users._templates = {
        roles          : Template7.compile($('#js-tpl-user__roles').html()),
        accessSetsItem : Template7.compile($('#js-tpl-access-sets__item').html()),
        accessSetsRoles: Template7.compile($('#js-tpl-access-sets__roles').html())
    };

    lemurro.users._initRoles();
    users.init();
    lemurro.accessSets.getData();
};