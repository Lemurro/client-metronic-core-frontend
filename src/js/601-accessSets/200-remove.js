/**
 * Удаление
 *
 * @param {string} id ИД набора
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.remove = function (id) {
    var name = $('#js-access-sets__items').find('tr[data-item-id="' + id + '"] .name').text();

    swal({
        title            : 'Удаление набора',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'access_sets/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    $('#js-access-sets__items').find('tr[data-item-id="' + result.data.id + '"]')
                        .remove();

                    swal('Выполнено', 'Запись успешно удалена', 'success');
                }
            });
        } else {

        }
    });
};