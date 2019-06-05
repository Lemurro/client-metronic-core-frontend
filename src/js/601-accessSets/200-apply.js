/**
 * Применим выбранный набор
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.apply = function () {
    var select = $('#js-user__access-sets').find('select');
    var id = select.val();

    if (!isEmpty(id)) {
        lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                lemurro.users.setRoles($('#js-user-form'), result.data.roles);

                select.val(null);

                swal('Выполнено', 'Успешно применён набор "' + result.data.name + '"', 'success');
            }
        });
    }
};