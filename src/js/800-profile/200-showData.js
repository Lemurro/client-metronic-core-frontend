/**
 * Отображение информации о профиле пользователя
 *
 * @param {Object} data
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile.showData = function (data) {
    var page = $('#js-page');

    page.find('.js-profile__info').html(lemurro.profile.templates.info(lemurro.userinfo));
    page.find('.js-profile__sessions').html(lemurro.profile.templates.sessions(data.sessions));

    lemurro.helper.initBootstrapConfirmation(page, null);

    if (profile.hasOwnProperty('_afterShowData') && typeof profile._afterShowData === 'function') {
        profile._afterShowData(data);
    }
};
