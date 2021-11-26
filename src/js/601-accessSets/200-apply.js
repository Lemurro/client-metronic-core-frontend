/**
 * Применим выбранный набор
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.apply = function () {
    var select = $('#js-user__access-sets').find('select');
    var id = select.val();

    if (!isEmpty(id)) {
        lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                lemurro.users.setRoles($('#js-user-form'), result.data.roles);

                select.val(null);

                swal('Выполнено', 'Успешно применён набор "' + result.data.name + '"', 'success');
            }
        });
    }
};
