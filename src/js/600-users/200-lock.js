/**
 * Заблокировать пользователя
 *
 * @param {string} id ИД пользователя
 *
 * @version 03.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.lock = function (id) {
    if (id === '1') {
        swal('Внимание!', 'Блокировка пользователя с id=1 запрещена', 'warning');
    } else {
        var authID = $('#js-users__items').find('tr[data-item-id="' + id + '"] .auth_id').text();

        swal({
            title            : 'Блокировка пользователя',
            html             : 'Вы хотите заблокировать <strong>"' + authID + '"</strong>?',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да, заблокировать',
            cancelButtonText : 'Нет'
        }).then(function (result) {
            if (result.value) {
                lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/lock', {}, function (result) {
                    lemurro.lightajax.preloader('hide');

                    if (result.hasOwnProperty('errors')) {
                        lemurro.showErrors(result.errors);
                    } else {
                        var newRecord = $(users.templates.item(result.data));

                        $('#js-users__items')
                            .find('tr[data-item-id="' + result.data.id + '"]')
                            .html(newRecord.html());
                    }
                });
            }
        });
    }
};