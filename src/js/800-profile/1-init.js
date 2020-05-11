/**
 * Инициализация
 *
 * @type {Function}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile.init = function () {
    Template7.global = {
        sessionID: lemurro.sessionID,
    };

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.profile.templates = {
        info: Template7.compile($('#js-tpl-profile__info').html()),
        sessions: Template7.compile($('#js-tpl-profile__sessions').html()),
    };

    lemurro.profile.getData();
};
