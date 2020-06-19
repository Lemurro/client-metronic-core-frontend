/**
 * Получение информации о профиле пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.profile.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'profile', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.profile.showData(result.data);
        }
    });
};
