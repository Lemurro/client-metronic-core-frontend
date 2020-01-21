/**
 * Разблокировать пользователя
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.users.unlock = function (id, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/unlock', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var newRecord = $(users.templates.item(result.data));
            var row       = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

            row.html(newRecord.html());

            lemurro.helper.initBootstrapConfirmation(row, null);

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};