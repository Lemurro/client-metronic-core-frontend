/**
 * Удаление
 *
 * @param {string} id ИД набора
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.remove = function (id) {
    lemurro.lightajax.post(true, pathServerAPI + 'access_sets/' + id + '/remove', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-access-sets__items')
                .find('tr[data-item-id="' + result.data.id + '"]')
                .remove();

            lemurro.accessSets._buildSelect();

            swal('Выполнено', 'Запись успешно удалена', 'success');
        }
    });
};
