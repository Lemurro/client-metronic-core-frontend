/**
 * Удаление
 *
 * @param {string} id ИД набора
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.accessSets.remove = function (id) {
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
};