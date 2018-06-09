/**
 * Список пользователей
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.getData = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var html = '';

            for (var i in result.data.items) {
                html += users.templates.item(result.data.items[i]);
            }

            $('#js-users__items').html(html);
        }
    });
};