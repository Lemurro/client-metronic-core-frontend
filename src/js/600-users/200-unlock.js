/**
 * Разблокировать пользователя
 *
 * @param {string} id ИД пользователя
 *
 * @version 03.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.unlock = function (id) {
    var authID = $('#js-users__items').find('tr[data-item-id="' + id + '"] .auth_id').text();

    swal({
        title            : 'Разблокировка пользователя',
        html             : 'Вы хотите разблокировать <strong>"' + authID + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, разблокировать',
        cancelButtonText : 'Нет'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/unlock', {}, function (result) {
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
};