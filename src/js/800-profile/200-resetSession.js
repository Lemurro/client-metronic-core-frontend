/**
 * Сброс выбранной сессии
 *
 * @param {String} session
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.profile.resetSession = function (session) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'profile/session/reset',
        {
            session: session,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                $('#js-page')
                    .find('.js-profile__sessions')
                    .find('div[data-id="' + session + '"]')
                    .remove();
            }
        }
    );
};
