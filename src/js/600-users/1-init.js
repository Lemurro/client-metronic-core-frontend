/**
 * Инициализация
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 18.08.2020
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
    lemurro.users._initEmailField();
    users.init();
    lemurro.accessSets.getData();
};