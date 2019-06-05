/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets._collectData = function () {
    var form = $('#js-access-sets-form');

    if (form.valid()) {
        return {
            id   : form.attr('data-id'),
            name : form.find('input[name="name"]').val(),
            roles: lemurro.users.getRoles(form)
        };
    } else {
        swal('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};