/**
 * Заблокировать пользователя
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.users.lock = function (id, callback) {
    if (id === '1') {
        Swal.fire('Внимание!', 'Блокировка пользователя с id=1 запрещена', 'warning');
    } else {
        lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/lock', {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                var newRecord = $(users.templates.item(result.data));
                var row = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

                row.html(newRecord.html());

                lemurro.helper.initBootstrapConfirmation(row, null);

                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        });
    }
};
