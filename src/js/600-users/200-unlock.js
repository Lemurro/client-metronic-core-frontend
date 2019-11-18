/**
 * Разблокировать пользователя
 *
 * @param {string} id ИД пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
lemurro.users.unlock = function (id) {
    lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/unlock', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var newRecord = $(users.templates.item(result.data));
            var row       = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

            row.html(newRecord.html());

            lemurro.helper.initBootstrapConfirmation(row, null);
        }
    });
};