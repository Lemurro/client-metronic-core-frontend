/**
 * Получение информации о профиле пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'profile', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.profile.showData(result.data);
        }
    });
};
